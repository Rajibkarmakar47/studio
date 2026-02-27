
"use client";

import React from "react";
import Image from "next/image";
import { Gamepad2, Users, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Games() {
  const games = [
    {
      id: "game-1",
      title: "Tactical Strike",
      genre: "Competitive FPS",
      members: "2.4k Active",
      rating: "4.9",
      description: "Our flagship competitive squad dominating the tactical shooter landscape with precision and teamwork."
    },
    {
      id: "game-2",
      title: "Starfall Chronicles",
      genre: "Space Sim / RPG",
      members: "1.1k Active",
      rating: "4.8",
      description: "Exploring the vast reaches of the galaxy in this immersive community-driven space odyssey."
    },
    {
      id: "game-3",
      title: "Neon Velocity",
      genre: "Cyberpunk Racer",
      members: "800+ Active",
      rating: "4.7",
      description: "High-speed adrenaline junkies pushing the limits of physics in the digital neon underground."
    }
  ];

  return (
    <section id="games" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Digital Frontiers</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Active Game Sectors</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {games.map((game) => {
            const imgData = PlaceHolderImages.find((img) => img.id === game.id);
            return (
              <div key={game.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 border border-border/50 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_rgba(46,250,79,0.15)]">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1 text-primary">
                        <Star className="w-4 h-4 fill-primary" />
                        <span className="text-xs font-bold">{game.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/70">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-bold">{game.members}</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold font-headline text-white mb-2">{game.title}</h4>
                    <p className="text-primary/80 text-xs font-bold uppercase tracking-widest">{game.genre}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 px-4">
                  {game.description}
                </p>
                
                <div className="mt-auto px-4">
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
                    Enter Sector <Gamepad2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
