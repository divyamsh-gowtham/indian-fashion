"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function BeamsBackground({
  className,
  children,
}: BeamsBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-neutral-950",
        className
      )}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_40%)] animate-pulse" />

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 px-4 text-center">

          {children ? (
            children
          ) : (
            <>
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Bay’r
                <br />
                Independent Fashion
              </motion.h1>

              <motion.p
                className="max-w-2xl text-lg md:text-2xl text-white/70"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                Discover Indian designers rooted in culture, craft, and conscious
                creation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mt-6 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/designers"
                  className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Explore Designers
                </a>

                <a
                  href="/editorials"
                  className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Read Stories
                </a>
              </motion.div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
