"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl border bg-white p-8 shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl font-light tracking-tight">Bay’r Internal</h2>
          <p className="mt-2 text-sm text-stone-500">Sign in to manage collections</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 outline-none focus:ring-2 focus:ring-black/5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-stone-200 px-4 py-3 outline-none focus:ring-2 focus:ring-black/5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-stone-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
