
"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Games } from "@/components/Games";
import { Footer } from "@/components/Footer";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <Games />
      </div>
      <Footer />
    </main>
  );
}
