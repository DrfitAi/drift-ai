'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui aggiungerai la logica con il tuo backend in futuro
    alert(`Registering with email: ${email}`);
  };

  return (
    <main className="min-h-screen bg-[#0c0a09] text-white font-sans flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold text-center font-serif">Create your account</h1>

        <button
          onClick={() => signIn('google')}
          className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-neutral-200 transition"
        >
          Continue with Google
        </button>

        <div className="relative my-6">
          <hr className="border-zinc-700" />
          <span className="absolute inset-0 flex justify-center -top-2.5 text-sm text-zinc-500 bg-[#0c0a09] px-2">
            or use email
          </span>
        </div>

        <form onSubmit={handleEmailRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-zinc-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-neutral-200 transition"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

