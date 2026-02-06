"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; // Path to the file we fixed above

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Your Profile</h1>
      {/* Your profile content here */}
    </div>
  );
}
