"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Check auth
  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
       setEmail(data.user.email ?? null);

        setLoading(false);
      }
    }

    getUser();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">

        <h1 className="text-2xl font-semibold text-center">
          My Profile
        </h1>

        <div className="text-center text-stone-700">
          {email}
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-black text-white py-2 rounded"
        >
          Logout
        </button>

      </div>
    </main>
  );
}
