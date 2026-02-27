
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Theme Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full z-0" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20 grayscale brightness-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Defying the Status Quo
        </div>
        
        <h1 className="text-5xl md:text-8xl font-headline font-bold mb-6 tracking-tighter leading-tight max-w-4xl mx-auto">
          TEAM <span className="theme-text-gradient">ZERO GRAVITY</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-body">
          An elite gaming organization pushing the limits of innovation and competitive spirit in the digital void. We don't follow trends, we float above them.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-background hover:bg-accent px-8 py-6 rounded-full text-base font-bold transition-all hover:scale-105 group">
            <Link href="/members">
              Meet Our Team <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-white/5 px-8 py-6 rounded-full text-base font-bold transition-all">
            Join the Ranks
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <ChevronDown className="text-primary/50" />
      </div>
    </section>
  );
}
