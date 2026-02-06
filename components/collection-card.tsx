"use client";

import { motion } from "motion/react";


interface CollectionCardProps {
  title: string;
  designer: string;
  city: string;
  description: string;
  images: string[];
  video?: string | null;
}

export default function CollectionCard({
  title,
  designer,
  city,
  description,
  images,
  video,
}: CollectionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="border rounded-xl overflow-hidden bg-white shadow-sm"
    >
      {/* Media */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-xs uppercase tracking-widest text-stone-500">
          {designer} · {city}
        </p>
        <p className="text-sm text-stone-700">{description}</p>
      </div>
    </motion.div>
  );
}
