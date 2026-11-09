// app/login/page.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // <-- Added Next.js Image
import { Mail, Lock, ArrowLeft, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Demo only — no authentication is wired up in this assessment.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12 relative overflow-hidden">
      {/* Background Glows using Hex Colors */}
      <div aria-hidden className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-[#6366F1]/15 rounded-full blur-[120px] pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-[#8B5CF6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#6366F1] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl shadow-slate-200/40 p-8">
          
          {/* Logo using favicon.ico */}
          <div className="flex items-center gap-2 mb-6">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-[#6366F1]/30 bg-white">
              <Image 
                src="/favicon.ico" 
                alt="RestoFlow Logo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Resto<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">Flow</span>
            </span>
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Sign in to your RestoFlow dashboard.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@restaurant.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]/40"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]/40"
                  required
                />
              </div>
            </div>

            {/* Submit Button (Direct button to trigger form submit) */}
            <button 
              type="submit" 
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] shadow-lg shadow-[#6366F1]/30 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1]"
            >
              Sign in <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-5">
            New to RestoFlow?{" "}
            <Link href="/#contact" className="font-semibold text-[#6366F1] hover:underline">
              Request info
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}