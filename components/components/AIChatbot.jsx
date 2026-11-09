// components/AIChatbot.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles } from "lucide-react";

/* --- Predefined response engine (swap with real API later) --- */
function getResponse(input) {
  const q = input.toLowerCase();
  if (q.match(/what is restoflow|about restoflow|who are you/))
    return "RestoFlow is a restaurant marketing platform that connects your campaigns to real in-store revenue. We track every customer who walks in, every dollar they spend, and every channel that drives results. You pay only when customers redeem.";
  if (q.match(/track|campaign|attribution/))
    return "Every RestoFlow Drop is tracked end-to-end. When a guest redeems a gift card, we tie the visit back to the originating campaign, so you see exact revenue, ROAS, and customer counts per channel — not estimates.";
  if (q.match(/pricing|cost|fee/))
    return "You pay only when customers redeem — no upfront fees, no monthly minimums. If a campaign doesn't drive a redemption, you don't pay. That's how we keep our incentives aligned with yours.";
  if (q.match(/roi|return|measure/))
    return "RestoFlow reports ROAS, redemption rate, average bill on redemption, and incremental revenue per campaign. Most partners see 500%+ average ROAS within their first few campaigns.";
  if (q.match(/get started|start|sign ?up|onboard/))
    return "Getting started is simple: request info, tell us about your restaurant, and we'll ship your first RestoFlow Drop within a few business days. No contracts, no setup fees.";
  if (q.match(/redeem|redemption|gift card/))
    return "Redemptions are tracked in real time. Each redeemed gift card is tied to a specific campaign, a specific customer, and their exact spend at the register — giving you the full picture of campaign ROI.";
  return "Great question! RestoFlow helps restaurants run campaigns that pay for themselves. You can ask me about campaign tracking, pricing, ROAS, redemptions, or how to get started.";
}

const SUGGESTED = [
  "What is RestoFlow?",
  "How does campaign tracking work?",
  "How does the pricing work?",
  "How can I measure my marketing ROI?",
  "How do I get started?",
];

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! Welcome to RestoFlow. 👋\n\nI'm your restaurant marketing assistant. How can I help you grow your restaurant today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: getResponse(trimmed) }]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating AI button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close RestoFlow AI Assistant" : "Open RestoFlow AI Assistant"}
        className={`fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full text-white shadow-2xl shadow-violet/50 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric ${
          open ? "rotate-90" : "animate-float"
        }`}
        style={{
          background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)",
        }}
      >
        {/* Outer glow ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-gradient-to-br from-electric to-violet opacity-40 blur-md -z-10"
        />

        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            {/* Bot icon */}
            <Bot className="w-7 h-7" />
            {/* Sparkle badge — AI indicator */}
            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-violet" />
            </span>
            {/* Online dot */}
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
          </>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-electric to-violet px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              {/* Upgraded bot avatar with sparkle + online dot */}
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center relative">
                <Bot className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-white" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">RestoFlow AI Assistant</p>
                <p className="text-[11px] flex items-center gap-1 opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300" /> Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-[340px] overflow-y-auto px-3 py-3 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-electric to-violet text-white rounded-br-sm"
                      : "bg-white text-slate-700 border border-slate-200 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-3 py-2 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggested questions */}
          <div className="px-3 py-2 border-t border-slate-200 bg-white">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {SUGGESTED.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="shrink-0 text-[11px] font-medium text-electric bg-electric/5 hover:bg-electric/10 border border-electric/20 rounded-full px-2.5 py-1 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-2 border-t border-slate-200 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask about RestoFlow..."
              className="flex-1 px-3 py-2 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric/40"
            />
            <button
              onClick={() => sendMessage(input)}
              aria-label="Send message"
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric to-violet text-white flex items-center justify-center hover:opacity-90 disabled:opacity-50 transition-opacity"
              disabled={!input.trim() || typing}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}