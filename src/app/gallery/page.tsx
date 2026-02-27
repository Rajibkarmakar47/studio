"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";
import { Separator } from "@/components/ui/separator";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            A visual record of our digital conquests and the elite crew behind the mission.
          </p>
        </div>
        <Separator className="bg-white/5 mb-12" />
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
