'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="min-h-screen bg-[#0c0a09] text-zinc-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center">Create Your Account</h1>

        {/* Email + password */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800 text-white"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-zinc-800 text-white"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-black rounded-full font-medium hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm text-zinc-500">or</div>

        {/* Google */}
        <button
          onClick={() => signIn('google')}
          className="w-full py-3 bg-zinc-100 text-black rounded-full font-semibold hover:opacity-90 transition"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}

