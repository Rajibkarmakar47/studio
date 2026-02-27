
"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
