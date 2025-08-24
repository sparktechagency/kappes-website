"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import useService from "@/hooks/useService";
import useToast from "@/hooks/useShowToast";
import { useSelector } from "react-redux";

export default function SendMessage() {
  const { selectedService } = useSelector((state) => state.service);
  const { handleSendMessage, isSending } = useService();
  const { showSuccess, showError } = useToast();

  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    senderName: false,
    senderEmail: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      senderName: !formData.senderName.trim(),
      senderEmail:
        !formData.senderEmail.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.senderEmail.trim()),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async () => {
    // Validate form
    if (!validateForm()) {
      showError("Please fill in all required fields correctly");
      return;
    }

    // Check if a service is selected
    if (!selectedService) {
      showError("Please select a service before sending a message");
      return;
    }

    try {
      // Prepare message data with service ID
      const messageData = {
        ...formData,
        serviceId: selectedService._id,
      };

      await handleSendMessage(messageData);

      // Reset form
      setFormData({ senderName: "", senderEmail: "", message: "" });

      // Show success message
      showSuccess("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);

      // Show specific error message
      const errorMessage =
        error.data?.message ||
        error.message ||
        "Failed to send message. Please try again.";

      showError(errorMessage);
    }
  };

  return (
    <div className="w-full md:w-60 lg:w-72 my-5 md:mt-3">
      <h2 className="text-xl font-bold mb-4">Send us message</h2>

      <div className="space-y-2">
        <div>
          <Input
            placeholder="Your Name"
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
            className={`w-full h-12 ${
              errors.senderName ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.senderName && (
            <p className="text-red-500 text-xs mt-1">Name is required</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Your Email"
            type="email"
            name="senderEmail"
            value={formData.senderEmail}
            onChange={handleChange}
            className={`w-full h-12 ${
              errors.senderEmail ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.senderEmail && (
            <p className="text-red-500 text-xs mt-1">
              {!formData.senderEmail.trim()
                ? "Email is required"
                : "Please enter a valid email"}
            </p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full min-h-32 resize-none ${
              errors.message ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">Message is required</p>
          )}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isSending}
          className="w-full bg-red-700 hover:bg-red-800 text-white font-medium h-12 disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </div>
  );
}
