from types import SimpleNamespace
from unittest.mock import patch

import pytest
from pydantic import ValidationError

from api.services.configuration.check_validity import UserConfigurationValidator
from api.services.configuration.registry import (
    REGISTRY,
    RumikTTSConfiguration,
    ServiceProviders,
    ServiceType,
)
from api.services.pipecat.service_factory import create_tts_service


def test_rumik_tts_configuration_defaults_and_registration():
    config = RumikTTSConfiguration(api_key="test-key")

    assert config.provider == ServiceProviders.RUMIK
    assert config.model == "mulberry"
    assert config.voice == "speaker_1"
    assert config.gateway_url == "https://silk-api.rumik.ai"
    assert config.full_response_aggregation is True
    assert REGISTRY[ServiceType.TTS][ServiceProviders.RUMIK] is RumikTTSConfiguration


def test_rumik_tts_configuration_rejects_invalid_sampling_settings():
    with pytest.raises(ValidationError):
        RumikTTSConfiguration(api_key="test-key", top_p=1.1)
    with pytest.raises(ValidationError):
        RumikTTSConfiguration(api_key="test-key", top_k=0)


def test_create_rumik_tts_service_preserves_verified_adapter_settings():
    user_config = SimpleNamespace(
        tts=SimpleNamespace(
            provider=ServiceProviders.RUMIK.value,
            api_key="test-key",
            model="muga",
            voice="speaker_3",
            gateway_url="https://silk-api.rumik.ai",
            description="calm and direct",
            temperature=0.4,
            top_p=0.8,
            top_k=30,
            full_response_aggregation=False,
        )
    )
    audio_config = SimpleNamespace(
        transport_out_sample_rate=24000,
        transport_in_sample_rate=16000,
    )

    with patch("api.services.pipecat.service_factory.RumikTTSService") as mock_service:
        create_tts_service(user_config, audio_config)

    kwargs = mock_service.call_args.kwargs
    assert kwargs["api_key"] == "test-key"
    assert kwargs["gateway_url"] == "https://silk-api.rumik.ai"
    assert kwargs["full_response_aggregation"] is False
    assert kwargs["settings"].model == "muga"
    assert kwargs["settings"].voice == "speaker_3"
    assert kwargs["settings"].description == "calm and direct"
    assert kwargs["settings"].temperature == 0.4
    assert kwargs["settings"].top_p == 0.8
    assert kwargs["settings"].top_k == 30


def test_rumik_validator_accepts_key_without_network_introspection():
    validator = UserConfigurationValidator()

    assert validator._check_api_key(ServiceProviders.RUMIK.value, "test-key") is True
