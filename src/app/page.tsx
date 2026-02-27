
"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <Separator className="bg-white/5" />

      <Footer />
    </main>
  );
}
