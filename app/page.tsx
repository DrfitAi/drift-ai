import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-neutral-100 font-serif">
      {/* Logo/Header */}
      <header className="p-6 text-center">
        <img src="/drift-logo.png" alt="Drift AI Logo" className="mx-auto w-32" />
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">Close more. Do less.</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-neutral-300 mb-8">
          AI agents that generate and qualify real leads, send personalized emails,
          and schedule meetings. Just tell it who you want to talk to.
        </p>
        <Link href="/campaign">
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition">
            Get started
          </button>
        </Link>
      </section>

      {/* Quote Section */}
      <section className="py-12 px-6 bg-[#1c1917]">
        <blockquote className="max-w-2xl mx-auto italic text-center text-xl text-neutral-400">
          "The future of sales isn’t automation. It’s delegation."
        </blockquote>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">How it works</h2>
        <p className="text-center text-neutral-300 mb-12 max-w-xl mx-auto">
          Insert your target. Your AI agent builds a contact list, crafts a personalized sequence,
          and starts messaging. Autonomously.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#1c1917] p-6 rounded-xl">
            <h3 className="font-semibold text-white mb-2">01. Who you're targeting</h3>
            <p className="text-neutral-400 text-sm">
              Role, sector, company size, country — the agent builds the perfect query.
            </p>
          </div>
          <div className="bg-[#1c1917] p-6 rounded-xl">
            <h3 className="font-semibold text-white mb-2">02. Finds and analyzes</h3>
            <p className="text-neutral-400 text-sm">
              It scrapes the web, filters leads, verifies emails, and collects real data.
            </p>
          </div>
          <div className="bg-[#1c1917] p-6 rounded-xl">
            <h3 className="font-semibold text-white mb-2">03. Writes and sends</h3>
            <p className="text-neutral-400 text-sm">
              Generates 3 tailored emails, adapts the tone, and handles the outreach. You monitor.
              It works.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Block */}
      <section className="py-24 px-6 bg-[#0c0a09]">
        <div className="max-w-4xl mx-auto space-y-6 text-zinc-300 text-left leading-relaxed">
          <h2 className="text-2xl font-semibold uppercase tracking-wide">Editorial</h2>
          <p>
            Drift AI is a quiet operator. It finds and qualifies leads, verifies emails,
            writes your message, and reaches out—without you lifting a finger.
          </p>
          <p>
            Built for precision and rhythm, Drift adapts to your tone and timing. It works
            behind the scenes to surface real conversations with people that matter.
          </p>
          <p>
            Atmospheric, sharp, and obsessively focused on output—Drift is for founders and
            sales teams who move fast and don’t miss.
          </p>
        </div>
      </section>
    </div>
  );
}

