
"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Events() {
  const upcomingEvents = [
    {
      id: "event-1",
      title: "Zero G Invitational 2024",
      date: "Oct 15, 2024",
      time: "18:00 UTC",
      location: "Online / Twitch",
      category: "Tournament",
      status: "Registration Open"
    },
    {
      id: "event-2",
      title: "Global Community Meetup",
      date: "Nov 02, 2024",
      time: "14:00 UTC",
      location: "Tokyo, Japan / Discord",
      category: "Social",
      status: "Limited Slots"
    }
  ];

  return (
    <section id="events" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Transmission Schedule</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold mb-4">Upcoming Events</h3>
            <p className="text-muted-foreground">Mark your star charts. Join our most anticipated gatherings and competitive spectacles.</p>
          </div>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-background rounded-full group">
            View Full Calendar <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => {
            const imgData = PlaceHolderImages.find((img) => img.id === event.id);
            return (
              <div key={event.id} className="group relative bg-card border border-border/50 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row transition-all hover:border-primary/40">
                <div className="lg:w-2/5 relative aspect-square lg:aspect-auto">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent hidden lg:block" />
                  <Badge className="absolute top-6 left-6 bg-primary text-background border-none font-bold">
                    {event.category}
                  </Badge>
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {event.status}
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold font-headline mb-6 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </div>

                  <Button className="w-full lg:w-fit bg-secondary text-primary border border-primary/20 hover:bg-primary hover:text-background rounded-xl font-bold transition-all">
                    Register Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
