"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative w-full h-screen py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/worldmap.png"
        alt="World map background"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white text-center space-y-8">
        <h2 className="text-3xl font-bold font-comfortaa uppercase">
          Get in Touch
        </h2>

        <div className="space-y-2 text-sm">
          <div className="flex justify-center items-center gap-2">
            <Phone size={16} /> <span>+1 647 2737 6756</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Mail size={16} />
            <a
              href="mailto:hamdy.mostafa@leoniucorp.com"
              className="text-red-700 hover:underline"
            >
              hamdy.mostafa@leoniucorp.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 text-center">
            <MapPin size={16} />
            <span>123 Main Street, Anytown, ON K1A 0A1, Canada</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid md:grid-cols-2 gap-4 mt-10">
          <Input
            placeholder="Your Name *"
            className="col-span-1 bg-white/90 text-black placeholder:text-gray-600"
          />
          <Textarea
            placeholder="Your Message *"
            className="md:row-span-3 col-span-1 bg-white/90 text-black placeholder:text-gray-600 h-36 resize-none overflow-y-auto"
          />
          <Input
            placeholder="Your Email *"
            className="col-span-1 bg-white/90 text-black placeholder:text-gray-600"
          />
          <Input
            placeholder="Your Phone *"
            className="col-span-1 bg-white/90 text-black placeholder:text-gray-600"
          />
          <Button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white col-span-full mt-2 py-3 px-8 font-semibold"
          >
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </div>
  );
}
