"use client";

import { useState } from "react";

type ContactMode = "demo" | "info";

const ContactTabs = () => {
  const [mode, setMode] = useState<ContactMode>("demo");

  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-[#08070d] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-8">
      <div
        className="grid grid-cols-2 rounded-full border border-white/10 bg-[#14131b] p-1"
        role="tablist"
        aria-label="Contact options"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === "demo"}
          className={`h-11 rounded-full text-sm font-bold transition ${
            mode === "demo"
              ? "bg-[#8c00ff] text-white shadow-[0_12px_28px_rgba(140,0,255,0.35)]"
              : "text-white/62 hover:text-white"
          }`}
          onClick={() => setMode("demo")}
        >
          Book a demo
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "info"}
          className={`h-11 rounded-full text-sm font-bold transition ${
            mode === "info"
              ? "bg-[#8c00ff] text-white shadow-[0_12px_28px_rgba(140,0,255,0.35)]"
              : "text-white/62 hover:text-white"
          }`}
          onClick={() => setMode("info")}
        >
          Request info
        </button>
      </div>

      {mode === "demo" ? <DemoPanel /> : <InfoPanel />}
    </div>
  );
};

const DemoPanel = () => (
  <div className="pt-8" role="tabpanel">
    <h3 className="text-[1.55rem] font-black tracking-[-0.04em] text-white">
      Pick a time that works.
    </h3>
    <p className="mt-4 max-w-[410px] text-sm font-medium leading-7 text-white/64">
      30 minutes with a strategist. We&apos;ll walk through your concept, run
      the ROAS math, and show you a working drop tailored to your locations.
    </p>
    <a
      href="#calendar"
      className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#8c00ff] px-6 text-sm font-black text-white shadow-[0_14px_32px_rgba(140,0,255,0.35)] transition hover:bg-[#9b20ff]"
    >
      Open calendar
      <ArrowIcon />
    </a>
  </div>
);

const InfoPanel = () => (
  <form className="pt-8" role="tabpanel">
    <h3 className="text-[1.55rem] font-black tracking-[-0.04em] text-white">
      Request more info.
    </h3>
    <div className="mt-7 space-y-4">
      <Field label="Full name" placeholder="Jane Smith" />
      <Field label="Work email" placeholder="jane@hellonori.com" />
      <Field label="Company" placeholder="Hello Nori" />
      <label className="block">
        <span className="text-[0.62rem] font-black uppercase tracking-[0.32em] text-white/46">
          What would you like to talk about? (optional)
        </span>
        <textarea
          className="mt-2 min-h-20 w-full resize-none rounded-lg border border-white/10 bg-[#14131b] px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/42 focus:border-[#8c00ff]"
          placeholder="What you'd like to know more about"
        />
      </label>
    </div>
    <button
      type="button"
      className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#5c079d] px-6 text-sm font-black text-white/55 shadow-[0_14px_32px_rgba(140,0,255,0.18)] transition hover:bg-[#8c00ff] hover:text-white"
    >
      Send request
      <ArrowIcon />
    </button>
  </form>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <label className="block">
    <span className="text-[0.62rem] font-black uppercase tracking-[0.32em] text-white/46">
      {label}
    </span>
    <input
      className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#14131b] px-4 text-sm font-medium text-white outline-none transition placeholder:text-white/42 focus:border-[#8c00ff]"
      placeholder={placeholder}
    />
  </label>
);

const ArrowIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactTabs;
