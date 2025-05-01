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
          &quot;The future of sales isn&apos;t automation. It&apos;s delegation.&quot;
        </blockquote>
      </section>
    </div>
  );
}

