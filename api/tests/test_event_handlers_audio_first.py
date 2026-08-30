from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, call

import pytest

from api.services.pipecat.event_handlers import queue_start_opening_audio_first


@pytest.mark.asyncio
async def test_recorded_greeting_is_queued_before_realtime_node_setup():
    events = []
    engine = Mock()
    engine.workflow = SimpleNamespace(start_node_id="start")
    engine.get_start_greeting.return_value = ("audio", "2")

    async def queue_opening(**kwargs):
        events.append(("queue", kwargs))
        return "greeting"

    async def set_node(node_id):
        events.append(("set", node_id))

    engine.queue_node_opening = AsyncMock(side_effect=queue_opening)
    engine.set_node = AsyncMock(side_effect=set_node)

    await queue_start_opening_audio_first(engine)

    assert events == [
        (
            "queue",
            {
                "node_id": "start",
                "previous_node_id": None,
                "generate_if_no_greeting": False,
            },
        ),
        ("set", "start"),
    ]


@pytest.mark.asyncio
async def test_prefetched_recording_skips_fetch_path_and_queues_before_setup():
    events = []
    engine = Mock()
    engine.workflow = SimpleNamespace(start_node_id="start")
    engine.get_start_greeting.return_value = ("audio", "2")
    engine.queue_node_opening = AsyncMock()

    async def set_node(node_id):
        events.append(("set", node_id))

    async def queue_frame(frame):
        events.append(("frame", type(frame).__name__))

    engine.set_node = AsyncMock(side_effect=set_node)
    transport_output = SimpleNamespace(queue_frame=queue_frame)
    prefetched = SimpleNamespace(audio=b"\x00\x00", transcript="Hello")

    await queue_start_opening_audio_first(
        engine,
        prefetched_audio=prefetched,
        transport_output=transport_output,
    )

    assert events[-1] == ("set", "start")
    assert [name for name, _value in events[:-1]] == ["frame"] * 4
    engine.queue_node_opening.assert_not_awaited()


@pytest.mark.asyncio
async def test_missing_recorded_greeting_falls_back_after_node_setup():
    engine = Mock()
    engine.workflow = SimpleNamespace(start_node_id="start")
    engine.get_start_greeting.return_value = ("audio", "2")
    engine.queue_node_opening = AsyncMock(side_effect=["none", "llm"])
    engine.set_node = AsyncMock()

    await queue_start_opening_audio_first(engine)

    assert engine.mock_calls.index(call.set_node("start")) < engine.mock_calls.index(
        call.queue_node_opening(
            node_id="start",
            previous_node_id=None,
            generate_if_no_greeting=True,
        )
    )
