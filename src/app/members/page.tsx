
"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";
import { Members } from "@/components/Members";
import { Footer } from "@/components/Footer";

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-12">
        <Members />
      </div>
      <Footer />
    </main>
  );
}
