"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        scrolled
          ? "bg-stone-50/95 backdrop-blur border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="uppercase tracking-widest font-medium">
          Bay’r
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-xs uppercase tracking-widest">

          {/* Home Sections */}
          <a href="#discover">Discover</a>
          <a href="#designers">Designers</a>
          <a href="#editorial">Editorial</a>
          <a href="#about">About</a>

          {/* Pages */}
          <Link href="/login" className="hover:underline">
            Login
          </Link>

          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>

          <Link href="/profile" className="hover:underline">
            Profile
          </Link>

        </nav>
      </Container>
    </header>
  );
}
