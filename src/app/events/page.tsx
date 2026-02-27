"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Events } from "@/components/Events";
import { Separator } from "@/components/ui/separator";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Mission <span className="theme-text-gradient">Schedule</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Stay synchronized with our upcoming tournaments, community meetups, and digital spectacles.
          </p>
        </div>
        <Separator className="bg-white/5 mb-12" />
        <Events />
      </div>
      <footer className="py-12 bg-background/50 border-t border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
          &copy; Team Zero Gravity. All systems nominal.
        </div>
      </footer>
    </main>
  );
}
