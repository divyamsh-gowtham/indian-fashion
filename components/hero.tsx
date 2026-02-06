"use client";

import { motion } from "framer-motion";
import Container from "./container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <Container>
        <motion.div
          className="text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Discover Independent
            <br />
            Indian Fashion
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            A curated platform for designers, sarees, handloom, and
            culture-driven collections.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Link href="#designers">
              <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                Explore Designers
              </button>
            </Link>

            <Link href="#editorial">
              <button className="px-8 py-3 border border-white/40 rounded-full hover:bg-white/10 transition">
                Read Stories
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
