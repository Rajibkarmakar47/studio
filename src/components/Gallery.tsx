"use client";

import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Gamepad2, Users } from "lucide-react";

export function Gallery() {
  const gamePhotos = [
    { id: "gal-game-1", title: "Arena Nights" },
    { id: "gal-game-2", title: "Final Strike" },
    { id: "gal-game-3", title: "Hardware Focus" },
  ];

  const teamPhotos = [
    { id: "gal-team-1", title: "Strategic Brief" },
    { id: "gal-team-2", title: "Victory Circle" },
    { id: "gal-team-3", title: "Ground Crew Vibes" },
  ];

  const renderPhotos = (photos: { id: string; title: string }[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {photos.map((photo) => {
        const imgData = PlaceHolderImages.find((img) => img.id === photo.id);
        return (
          <div key={photo.id} className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all shadow-2xl">
            {imgData && (
              <Image
                src={imgData.imageUrl}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={imgData.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-primary font-bold font-headline tracking-widest uppercase text-xs">{photo.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="gallery" className="py-24 bg-background/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Mission Archives</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Visual Logs</h3>
        </div>

        <Tabs defaultValue="games" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 border border-white/10 p-1 rounded-full h-14">
              <TabsTrigger 
                value="games" 
                className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-background font-bold flex items-center gap-2"
              >
                <Gamepad2 size={18} /> Combat Archives
              </TabsTrigger>
              <TabsTrigger 
                value="team" 
                className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-background font-bold flex items-center gap-2"
              >
                <Users size={18} /> Ground Crew
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="games" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderPhotos(gamePhotos)}
          </TabsContent>
          
          <TabsContent value="team" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderPhotos(teamPhotos)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
