
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Transmission Received",
      description: "We've received your inquiry and will respond shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold mb-8">Establish Communication</h3>
            <p className="text-muted-foreground text-lg mb-12">
              Have a project in mind or want to join the Zero Gravity ranks? Send us a message and our ground crew will get back to you within 24 standard hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "comms@zeroghub.com" },
                { icon: Phone, title: "Phone", info: "+1 (555) 000-0G0G" },
                { icon: MapPin, title: "HQ", info: "Orbiting Satellite ZG-1" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/50 text-sm uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xl font-bold font-headline">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Callsign</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" className="bg-background border-border py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comms Channel</FormLabel>
                        <FormControl>
                          <Input placeholder="email@domain.com" className="bg-background border-border py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transmission Topic</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" className="bg-background border-border py-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payload Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your detailed inquiry..." 
                          className="bg-background border-border min-h-[150px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary text-background hover:bg-accent py-6 rounded-xl font-bold group">
                  Execute Transmission <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
