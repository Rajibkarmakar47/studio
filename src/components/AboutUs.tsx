
"use client";

import React from "react";
import { Zap, Target, Users, Globe } from "lucide-react";

export function AboutUs() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly exploring new horizons in gaming tech and community building."
    },
    {
      icon: Target,
      title: "Precision",
      description: "A data-driven approach to competitive strategy and organization growth."
    },
    {
      icon: Users,
      title: "Community",
      description: "Fostering an inclusive environment where every player finds their orbit."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting gamers from every corner of the planet through elite events."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
              Defying gravity, <br />
              <span className="text-white/40">one project at a time.</span>
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2021, Team Zero Gravity (Zero G) emerged from a vision to create a space where gaming, technology, and creativity intersect without limitations.
              </p>
              <p>
                We believe that the future of digital entertainment lies in community-driven ecosystems. Our team works tirelessly to bridge the gap between high-level esports and grassroots innovation.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all hover:shadow-[0_0_30px_rgba(46,250,79,0.1)] group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <val.icon className="text-primary group-hover:text-background w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 font-headline">{val.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
