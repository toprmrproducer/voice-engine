import {
  ArrowRight,
  AudioLines,
  BadgeIndianRupee,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  Gauge,
  Layers3,
  MessageSquareText,
  PhoneCall,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: `AI voice agents for real conversations | ${BRAND.name}`,
  description:
    "Build, launch, and manage production voice agents with Gemini Live, Rumik voices, campaigns, telephony, and sub-accounts.",
};

const benefits = [
  {
    icon: AudioLines,
    title: "Voice that fits the call",
    copy: "Use Rumik Silk with Mulberry or Muga models, four speaker presets, and controllable voice direction.",
  },
  {
    icon: Radio,
    title: "Live conversation engine",
    copy: "Run low-latency browser and phone conversations with interruption-aware realtime pipelines.",
  },
  {
    icon: Layers3,
    title: "Model-agnostic by design",
    copy: "Select live, language, speech, and telephony providers per workflow without rebuilding the product.",
  },
];

const operations = [
  [PhoneCall, "Inbound and outbound calls", "Connect numbers, route inbound calls, or launch a single outbound call."],
  [Workflow, "Campaign control", "Upload contacts, start campaigns, pause execution, resume, and inspect each run."],
  [Users, "Main and sub-accounts", "Separate clients, access, credits, numbers, and configurations by organization."],
  [BadgeIndianRupee, "Visible economics", "Compare provider cost references separately from the price charged to a client."],
] as const;

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f2e8] text-[#29241f]">
      <header className="border-b border-[#2d281f]/10 bg-[#f7f2e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/landing" className="flex items-center gap-3 font-semibold tracking-tight">
            <Image src="/brand-logo.svg" alt="" width={38} height={38} className="rounded-xl" />
            <span className="text-lg">{BRAND.name}</span>
          </Link>
          <nav className="flex items-center gap-2" aria-label="Primary navigation">
            <Link href="/auth/login" className="rounded-xl px-4 py-2 text-sm font-medium hover:bg-black/5">
              Log in
            </Link>
            <Link href="/auth/signup" className="rounded-xl bg-[#2b251f] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#17130f]">
              Start building
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(circle_at_75%_20%,rgba(190,129,66,0.2),transparent_38%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9e7045]/30 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#765232]">
                <CircleCheck className="h-4 w-4" /> Rumik-ready voice engine
              </div>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                AI voice agents built for the real call.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#665d54] sm:text-xl">
                Build with Gemini Live, speak through Rumik, connect telephony, launch campaigns, and manage every client from one operational workspace.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/auth/signup" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#a66d3d] px-6 font-semibold text-white shadow-[0_12px_28px_rgba(116,72,35,.22)] hover:bg-[#8d5c34]">
                  Build a voice agent <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/auth/login" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#2b251f]/15 bg-white/55 px-6 font-semibold hover:bg-white">
                  Open workspace
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#655c53]">
                {["Rumik Silk TTS", "Gemini Live", "Multi-provider", "Organization controls"].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#a66d3d]" />{item}</span>
                ))}
              </div>
            </div>

            <div className="relative rounded-[28px] border border-[#2b251f]/10 bg-[#29231e] p-3 shadow-[0_40px_90px_rgba(62,43,28,.25)]">
              <div className="rounded-[22px] border border-white/10 bg-[#151310] p-5 text-white sm:p-7">
                <div className="flex items-center justify-between">
                  <div><p className="text-xs uppercase tracking-[.18em] text-white/45">Live agent</p><p className="mt-1 font-semibold">RapidX Receptionist</p></div>
                  <span className="flex items-center gap-2 rounded-full bg-[#b8ffcc]/10 px-3 py-1.5 text-xs font-medium text-[#b8ffcc]"><span className="h-2 w-2 rounded-full bg-[#7fee9f]" />Ready</span>
                </div>
                <div className="my-10 flex h-28 items-center justify-center gap-1.5" aria-label="Voice waveform">
                  {[24, 45, 74, 42, 92, 58, 106, 71, 38, 82, 52, 27, 64, 94, 48, 32].map((height, index) => (
                    <span key={index} className="w-2 rounded-full bg-gradient-to-t from-[#966038] to-[#e9bf92]" style={{ height }} />
                  ))}
                </div>
                <div className="grid gap-2.5">
                  {[
                    [Sparkles, "Live model", "Gemini Live"],
                    [Bot, "Voice", "Rumik · Mulberry · Speaker 2"],
                    [MessageSquareText, "Language", "English + Hindi"],
                  ].map(([Icon, label, value]) => (
                    <div key={String(label)} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[.04] p-3">
                      <Icon className="h-4 w-4 text-[#d6a875]" />
                      <span className="text-sm text-white/50">{String(label)}</span>
                      <span className="ml-auto text-right text-sm font-medium">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#2b251f]/10 bg-[#eee5d7] px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[.2em] text-[#7a6d61]">One platform from first prompt to live call</p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="rounded-2xl border border-[#2b251f]/10 bg-[#faf7f0] p-6">
                  <Icon className="h-6 w-6 text-[#9b6337]" />
                  <h2 className="mt-8 text-xl font-semibold tracking-tight">{title}</h2>
                  <p className="mt-3 leading-7 text-[#6b6259]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9b6337]">Implementation proof</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Rumik is a first-class provider, not a voice pasted on top.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b6259]">The engine includes a dedicated Rumik configuration, service factory integration, model and speaker controls, and focused adapter tests.</p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-amber-700/20 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                <ShieldCheck className="h-5 w-5 shrink-0" /> Adapter tested. An organization Rumik API key is required for live use.
              </div>
            </div>
            <div className="rounded-[26px] border border-[#2b251f]/10 bg-white/55 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Models", "Mulberry + Muga"],
                  ["Speakers", "4 presets"],
                  ["Streaming", "Pipeline ready"],
                  ["Controls", "Direction + sampling"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#eee5d7] p-5"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#7b6d60]">{label}</p><p className="mt-3 text-xl font-semibold">{value}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2a241f] px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#d6a875]">Run the operation</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">The voice is only the start.</h2><p className="mt-5 text-lg leading-8 text-white/60">Turn one working agent into a managed voice business with calls, campaigns, client separation, and cost visibility.</p></div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
              {operations.map(([Icon, title, copy]) => (
                <article key={title} className="bg-[#2a241f] p-7 sm:p-9"><Icon className="h-6 w-6 text-[#e2b17c]" /><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-white/55">{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#2b251f]/10 bg-[#eadfce] p-7 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9b6337]">Verified foundation</p><p className="mt-4 text-5xl font-semibold tracking-[-.05em]">31</p><p className="mt-2 text-lg font-medium">Rumik and adjacent provider regression checks passed.</p><p className="mt-4 text-sm leading-6 text-[#6b6259]">This is repository test evidence, not a customer or performance claim.</p></div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[[Gauge, "Realtime", "Live model pipelines"], [Zap, "Responsive", "Browser and phone"], [ShieldCheck, "Tenant-aware", "Organization controls"]].map(([Icon, title, copy]) => (
                  <div key={String(title)} className="rounded-2xl bg-[#faf7f0] p-5"><Icon className="h-5 w-5 text-[#9b6337]" /><h3 className="mt-7 font-semibold">{String(title)}</h3><p className="mt-2 text-sm text-[#6b6259]">{String(copy)}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#a66d3d] px-7 py-12 text-white sm:px-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-white/65">Ready when your provider keys are</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Build the agent. Choose the voice. Put it on the phone.</h2></div>
              <Link href="/auth/signup" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-[#6f4526] hover:bg-[#fff8ef]">Create an account <ChevronRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#2b251f]/10 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#9b6337]">FAQ</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">What you need to know</h2><div className="mt-10 divide-y divide-[#2b251f]/10 border-y border-[#2b251f]/10">
            {[
              ["Does Auto4U support Rumik AI voices?", "Yes. Rumik is registered as a first-class TTS provider with Silk gateway support, Mulberry and Muga models, speaker presets, and streaming pipeline integration."],
              ["Is Rumik active automatically?", "No. Each organization must add a valid Rumik API key before live synthesis can run."],
              ["Can I use other models and voices?", "Yes. The provider registry supports multiple live-model, language, speech, and telephony providers. Availability depends on the keys configured for your organization."],
              ["Can this run calls and campaigns?", "Yes. The workspace includes inbound and outbound telephony, phone numbers, campaign controls, run history, and client account management."],
            ].map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">{question}<span className="text-[#9b6337] group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-[#6b6259]">{answer}</p></details>)}
          </div></div>
        </section>
      </main>

      <footer className="border-t border-[#2b251f]/10 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6b6259] sm:flex-row sm:items-center sm:justify-between"><span>{BRAND.name} · AI voice operations</span><div className="flex gap-5"><Link href="/auth/login" className="hover:text-[#29241f]">Log in</Link><Link href="/auth/signup" className="hover:text-[#29241f]">Create account</Link></div></div></footer>
    </div>
  );
}
