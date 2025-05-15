"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function SendMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission if needed
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full md:w-60 lg:w-72 my-5 md:mt-3">
      <h2 className="text-xl font-bold mb-4">Send us message</h2>

      <div className="space-y-2">
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-12"
        />

        <Input
          placeholder="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-12"
        />

        <Textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-32 resize-none"
        />

        <Button
          onClick={handleSubmit}
          className="w-full bg-red-700 hover:bg-red-800 text-white font-medium h-12"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
