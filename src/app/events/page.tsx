
"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <Events />
      </div>
      <Footer />
    </main>
  );
}
