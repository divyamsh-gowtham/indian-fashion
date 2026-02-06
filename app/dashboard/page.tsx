"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  
  // Form State
  const [title, setTitle] = useState("");
  const [designer, setDesigner] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // We'll start with a URL input for simplicity
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('designers')
      .insert([
        { 
          title, 
          designer, 
          city, 
          description, 
          images: [imageUrl], // Supabase expects an array
          user_id: user.id 
        }
      ]);

    if (error) {
      alert("Error saving: " + error.message);
    } else {
      alert("Designer added successfully!");
      // Reset form
      setTitle("");
      setDesigner("");
      setCity("");
      setDescription("");
      setImageUrl("");
    }
    setIsSubmitting(false);
  };

  if (loading) return <div className="p-8 animate-pulse">Loading...</div>;

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10">
          <h1 className="text-3xl font-light">Add New Collection</h1>
          <p className="text-stone-500 text-sm">Logged in as {user?.email}</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500">Collection Title</label>
              <input 
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-black transition"
                value={title} onChange={(e) => setTitle(e.target.value)} required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500">Designer/Label Name</label>
              <input 
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-black transition"
                value={designer} onChange={(e) => setDesigner(e.target.value)} required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500">City</label>
            <input 
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-black transition"
              value={city} onChange={(e) => setCity(e.target.value)} required 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500">Description</label>
            <textarea 
              className="w-full border border-stone-200 p-3 rounded-md outline-none focus:ring-1 focus:ring-black transition h-24"
              value={description} onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500">Image URL</label>
            <input 
              placeholder="https://images.unsplash.com/..."
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-black transition text-sm"
              value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required 
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-stone-800 transition disabled:bg-stone-400"
          >
            {isSubmitting ? "Saving..." : "Publish Collection"}
          </button>
        </form>
      </div>
    </div>
  );
}
