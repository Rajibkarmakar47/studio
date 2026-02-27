
"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <Separator className="bg-white/5" />
      
      <ContactForm />
      
      <footer className="py-12 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="font-headline font-bold text-2xl tracking-tighter uppercase text-primary">Zero G Hub</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
            Pioneering the next frontier of gaming and technology. Join our orbit and defy the status quo.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            {['Twitter', 'Discord', 'Instagram', 'Twitch'].map((social) => (
              <a key={social} href="#" className="text-sm font-medium hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            &copy; {year ?? '...'} Team Zero Gravity. All systems nominal.
          </div>
        </div>
      </footer>
    </main>
  );
}
