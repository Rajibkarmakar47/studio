
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Trophy, Shield, Cpu, Share2 } from "lucide-react";

export function Members() {
  const members = [
    {
      id: "member-1",
      name: "Alex 'Apex' Vance",
      role: "Founder & Team Lead",
      specialty: "Strategy & Operations",
      icon: Shield
    },
    {
      id: "member-2",
      name: "Satoshi 'Ghost' K.",
      role: "Lead Strategist",
      specialty: "Competitive Meta",
      icon: Trophy
    },
    {
      id: "member-3",
      name: "Elena 'Dev' Rossi",
      role: "Tech Architect",
      specialty: "Platform Systems",
      icon: Cpu
    },
    {
      id: "member-4",
      name: "Marco 'Comm' Lopez",
      role: "Community Manager",
      specialty: "Public Relations",
      icon: Share2
    }
  ];

  return (
    <section id="members" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">The Nucleus</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">The Ground Crew</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => {
            const imgData = PlaceHolderImages.find((img) => img.id === member.id);
            return (
              <div key={member.id} className="flex flex-col items-center text-center group">
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-full h-full rounded-full border-2 border-border p-2 group-hover:border-primary transition-all overflow-hidden bg-card">
                    {imgData && (
                      <Image
                        src={imgData.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        data-ai-hint={imgData.imageHint}
                      />
                    )}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold font-headline mb-1">{member.name}</h4>
                <p className="text-primary text-sm font-medium mb-3 uppercase tracking-wider">{member.role}</p>
                
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary transition-all">
                  <member.icon size={14} />
                  {member.specialty}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
