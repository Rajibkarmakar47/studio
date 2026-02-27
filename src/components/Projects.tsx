
"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Projects() {
  const projects = [
    {
      id: "project-1",
      title: "Nova Tournament Hub",
      category: "Platform",
      description: "A centralized platform for automated tournament management and real-time player statistics tracking.",
      tags: ["React", "Firebase", "Web3"]
    },
    {
      id: "project-2",
      title: "Zero G Arena VR",
      category: "Gaming",
      description: "An immersive virtual reality training environment designed for elite tactical FPS athletes.",
      tags: ["Unity", "VR", "Tactical"]
    },
    {
      id: "project-3",
      title: "Orbit Connect",
      category: "Community",
      description: "A social mobile application connecting players with similar gaming archetypes and skill levels.",
      tags: ["Flutter", "Social", "AI"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Innovation Pipeline</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Featured Projects</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const imgData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
                  <Badge className="absolute top-4 left-4 bg-primary text-background border-none uppercase font-bold text-[10px] tracking-widest">
                    {project.category}
                  </Badge>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold font-headline mb-3 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </h4>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/10 text-white/50">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
