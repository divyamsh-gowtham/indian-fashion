"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50">
      <p className="text-stone-500 animate-pulse">Loading Dashboard...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-light">Dashboard</h1>
        <p className="mt-2 text-stone-600">Welcome back, {user?.email}</p>
        
        {/* Your Form or Content for Bay'r goes here */}
        <div className="mt-10 rounded-xl border border-dashed border-stone-300 p-20 text-center">
          <p className="text-stone-400">Designer Management coming soon.</p>
        </div>
      </div>
    </div>
  );
}
