
"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, Instagram, Youtube } from "lucide-react";

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
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
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

          <div className="flex items-center justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all group" aria-label="Discord">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          &copy; {year ?? '...'} Team Zero Gravity. All systems nominal.
        </div>
      </div>
    </footer>
  );
}
