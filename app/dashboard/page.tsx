export const dynamic = "force-dynamic";
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // Check login
  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login"); // redirect if not logged in
      } else {
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !image) {
      alert("Please fill all fields");
      return;
    }

    alert("Fake upload successful ✅ (Phase 1)");
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
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          Designer Dashboard
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Designer Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setImage(e.target.files?.[0] || null)
            }
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Upload
          </button>

        </form>
      </div>
    </main>
  );
}

