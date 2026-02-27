"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Games } from "@/components/Games";
import { Separator } from "@/components/ui/separator";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Game <span className="theme-text-gradient">Sectors</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Explore our active digital frontiers. From high-stakes tactical shooters to immersive space odysseys.
          </p>
        </div>
        <Separator className="bg-white/5 mb-12" />
        <Games />
      </div>
      <footer className="py-12 bg-background/50 border-t border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
          &copy; Team Zero Gravity. All systems nominal.
        </div>
      </footer>
    </main>
  );
}
