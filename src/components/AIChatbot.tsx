
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { informationalAssistantChatbot } from "@/ai/flows/informational-assistant-chatbot";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Greetings! I am the Zero G Hub assistant. How can I help you navigate our organization today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await informationalAssistantChatbot({
        question: userMessage,
        aboutUsContent: "Team Zero Gravity (Zero G) is an elite gaming organization founded in 2021 that focuses on innovation, community, and competitive excellence. Their mission is to redefine boundaries and connect gamers globally through high-level esports and community projects.",
        projectsContent: "Key projects include: Nova Tournament Hub (automated management platform), Zero G Arena VR (VR training environment for FPS), and Orbit Connect (social app for gamers).",
        membersContent: "Ground crew members include: Alex 'Apex' Vance (Founder & Team Lead), Satoshi 'Ghost' K. (Lead Strategist), Elena 'Dev' Rossi (Tech Architect), and Marco 'Comm' Lopez (Community Manager)."
      });

      setMessages((prev) => [...prev, { role: "bot", content: response.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "I'm having trouble connecting to my orbit. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-destructive hover:bg-destructive/90 rotate-90' : 'bg-primary hover:bg-accent text-background'}`}
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
          <div className="p-4 bg-primary text-background flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={24} />
            </div>
            <div>
              <h4 className="font-bold font-headline leading-none">Zero G Intelligence</h4>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Always Online</span>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl flex gap-3 ${msg.role === 'user' ? 'bg-primary text-background rounded-tr-none' : 'bg-secondary border border-border rounded-tl-none'}`}>
                    <div className="shrink-0 pt-1">
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary border border-border p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-xs text-muted-foreground italic">Decrypting data...</span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border bg-background/50">
            <div className="relative flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Zero G..."
                className="bg-secondary border-border rounded-xl pr-12 focus-visible:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 text-primary hover:text-accent disabled:opacity-50 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
