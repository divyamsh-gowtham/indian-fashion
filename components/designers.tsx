"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Section from "./section";
import Container from "./container";
import CollectionCard from "./collection-card";

export default function Designers() {
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDesigners() {
      // Fetching live data from Supabase instead of static lib/data
      const { data, error } = await supabase
        .from('designers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching designers:", error.message);
      } else if (data) {
        setCollections(data);
      }
      setLoading(false);
    }

    fetchDesigners();
  }, []);

  return (
    <Section
      id="designers"
      eyebrow="Designers"
      title="Curated saree collections."
      description="A glimpse into studios working with handloom, dye, and tradition."
    >
      <Container>
        {loading ? (
          // Simple loading state to improve UX
          <div className="flex h-64 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-black" />
          </div>
        ) : collections.length === 0 ? (
          // State for when no designers have been added yet
          <div className="py-20 text-center">
            <p className="text-stone-400">No collections published yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {collections.map((c) => (
              <CollectionCard
                key={c.id}
                title={c.title}
                designer={c.designer}
                city={c.city}
                description={c.description}
                images={c.images}
                video={c.video}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
