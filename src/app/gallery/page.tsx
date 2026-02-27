"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <Gallery />
      </div>
      <footer className="py-12 bg-background/50 border-t border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
          &copy; Team Zero Gravity. All systems nominal.
        </div>
      </footer>
    </main>
  );
}
