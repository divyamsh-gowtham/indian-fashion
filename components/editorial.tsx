"use client";

import { motion } from "motion/react";
import Section from "./section";
import Container from "./container";
import { editorials } from "@/lib/data";

export default function Editorial() {
  return (
    <Section id="editorial" title="Editorial">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {editorials?.map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-widest text-stone-500">
                  {e.category}
                </p>

                <h3 className="text-lg font-medium leading-snug">
                  {e.title}
                </h3>

                <p className="text-sm text-stone-600">
                  {e.excerpt}
                </p>

                <span className="inline-block pt-2 text-xs font-medium uppercase tracking-wider text-black group-hover:underline">
                  Read Story →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
