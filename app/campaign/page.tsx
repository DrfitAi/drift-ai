'use client';

import { useState } from 'react';

export default function CampaignWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    companyName: '',
    website: '',
    targetRole: '',
    companyType: '',
    country: '',
    flow: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <main className="min-h-screen bg-[#0c0a09] text-zinc-100 font-sans px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-serif font-semibold tracking-tight">Build Your Campaign</h1>
          <p className="text-zinc-400">Let Drift AI understand your business needs before launching.</p>
        </header>

        {step === 1 && (
          <section className="space-y-6">
            <div className="space-y-4">
              <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry" className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500" />
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500" />
              <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website (optional)" className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500" />
            </div>
            <button onClick={nextStep} className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:opacity-90 transition">Continue</button>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Who should Drift reach?</h2>
            <div className="space-y-4">
              <input type="text" name="targetRole" value={formData.targetRole} onChange={handleChange} placeholder="Target Role (e.g. Head of Growth)" className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500" />
              <input type="text" name="companyType" value={formData.companyType} onChange={handleChange} placeholder="Type of Company (e.g. SaaS 10–200 employees)" className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500" />
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country (e.g. Germany)" className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500" />
            </div>
            <button onClick={nextStep} className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:opacity-90 transition">Continue</button>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-white">Pick your outreach flow</h2>
            <p className="text-zinc-400">Each flow is designed for high conversion, based on proven psychology & sales research.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "curious",
                  title: "Curious Spark",
                  description: "Hook with curiosity → stats + proof → gentle CTA. High-performing for C-level."
                },
                {
                  id: "problem",
                  title: "Problem → Solve → Close",
                  description: "Address their pain → show case → ask. Works best for technical or executive roles."
                },
                {
                  id: "linkedin",
                  title: "LinkedIn Invite + Drop",
                  description: "Friendly invite → soft drop → short follow-up. Best for founders and early-stage teams."
                },
                {
                  id: "quickwin",
                  title: "Quick Win Sequence",
                  description: "Give value fast → follow-up subtly → re-engage. Reciprocity-driven flow."
                },
                {
                  id: "punch",
                  title: "Punch + Case",
                  description: "Challenge assumption → share result → nudge. Built for high-friction leads."
                }
              ].map(flow => (
                <div
                  key={flow.id}
                  className={`border rounded-xl p-5 bg-zinc-900 hover:border-white cursor-pointer transition ${
                    formData.flow === flow.id ? "border-white" : "border-zinc-700"
                  }`}
                  onClick={() => setFormData({ ...formData, flow: flow.id })}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{flow.title}</h3>
                  <p className="text-zinc-400 text-sm">{flow.description}</p>
                </div>
              ))}
            </div>
            <button onClick={nextStep} className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:opacity-90 transition">Continue</button>
          </section>
        )}

        {step === 4 && (
          <section className="space-y-10 animate-fade-in">
            <h2 className="text-2xl font-semibold text-white">Your Agent is Ready</h2>

            <div className="space-y-6">
              <div className="bg-zinc-900 p-5 rounded-xl shadow-inner">
                <p className="text-sm text-zinc-500 mb-1">Industry</p>
                <p className="text-lg font-medium text-white tracking-wide">{formData.industry}</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl shadow-inner">
                <p className="text-sm text-zinc-500 mb-1">Target</p>
                <p className="text-lg font-medium text-white">{formData.targetRole} in {formData.companyType}, {formData.country}</p>
              </div>
              <div className="bg-zinc-900 p-5 rounded-xl shadow-inner">
                <p className="text-sm text-zinc-500 mb-1">Selected Flow</p>
                <p className="text-lg font-medium text-white capitalize">{formData.flow.replace("-", " ")}</p>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700">
              <h3 className="text-xl font-semibold text-white mb-2">Preview (simulated)</h3>
              <div className="text-zinc-300 space-y-4 text-sm leading-relaxed">
                <p>💬 <span className="italic">"Hey {formData.targetRole}, I came across your work at a {formData.companyType}..."</span></p>
                <p>📬 <span className="italic">"Here's something we've seen work well for others in {formData.industry}..."</span></p>
                <p>📅 <span className="italic">"Would it be insane to book a 10-min slot this week?"</span></p>
              </div>
            </div>

            <div className="text-center pt-8">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:opacity-90 transition">
                Unlock Your Agent
              </button>
              <p className="text-sm text-zinc-500 mt-2">Create account to activate outreach engine</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

