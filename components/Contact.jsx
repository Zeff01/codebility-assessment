// components/Contact.jsx
"use client";
import { useState } from "react";
import { Send, CheckCircle2, Mail, Building2, User } from "lucide-react";
import Button from "./ui/Button";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", restaurant: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", restaurant: "", message: "" });
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white overflow-hidden scroll-mt-24">
      <div aria-hidden className="absolute -bottom-20 right-0 w-[460px] h-[460px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <span className="inline-block px-3 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wider">
              REQUEST INFO
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              See What Your Marketing{" "}
              <span className="gradient-text">Actually Earns.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Tell us about your restaurant and we'll ship your first RestoFlow Drop
              within a few business days. No contracts, no setup fees.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                Launch your first tracked campaign in under a week
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                See revenue, ROAS, and customer counts in real time
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                Pay only when customers redeem — no upfront cost
              </li>
            </ul>
          </div>

          {/* Right form */}
          <form
            onSubmit={submit}
            className="bg-slate-50/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-200/40"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" icon={<User className="w-4 h-4 text-slate-400" />}>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className="input"
                />
              </Field>
              <Field label="Work email" icon={<Mail className="w-4 h-4 text-slate-400" />}>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@bistro.com"
                  className="input"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Restaurant name" icon={<Building2 className="w-4 h-4 text-slate-400" />}>
                <input
                  type="text"
                  required
                  value={form.restaurant}
                  onChange={update("restaurant")}
                  placeholder="Bistro & Co."
                  className="input"
                />
              </Field>
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                What do you want to grow?
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="More walk-ins, repeat visits, takeout orders..."
                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric/40 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-electric to-violet shadow-lg shadow-electric/30 hover:shadow-xl hover:shadow-violet/40 hover:-translate-y-0.5 transition-all"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Request received — we'll be in touch
                </>
              ) : (
                <>
                  Request Info <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-3">
              Demo form — submissions are not stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon, children }) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
        <div className="[&_.input]:w-full [&_.input]:pl-9 [&_.input]:pr-3 [&_.input]:py-2.5 [&_.input]:text-sm [&_.input]:bg-white [&_.input]:border [&_.input]:border-slate-200 [&_.input]:rounded-lg [&_.input]:focus:outline-none [&_.input]:focus:ring-2 [&_.input]:focus:ring-electric/40">
          {children}
        </div>
      </div>
    </div>
  );
}