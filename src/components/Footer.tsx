
"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <h4 className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-8">Contact Us</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-medium hover:text-primary transition-colors">+1 (555) 000-ZERO</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-medium hover:text-primary transition-colors">hq@teamzerogravity.com</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          &copy; {year ?? '...'} Team Zero Gravity. All systems nominal.
        </div>
      </div>
    </footer>
  );
}
