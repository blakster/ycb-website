"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        content: "",
      });
    } catch (_error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative w-full bg-white py-20">
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="mb-6 font-bold text-4xl text-[#050a30] md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <div className="gradient-underline mx-auto mt-4" />
            <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg md:text-xl">
              Have questions about YCB or want to learn more about our programs?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-20 lg:grid-cols-5 lg:items-start">
            {/* Contact Information */}
            <div className="flex flex-col lg:col-span-2 lg:pt-12 lg:pr-12">
              <div className="mb-8">
                <h2 className="mb-4 font-bold text-3xl text-[#050a30] md:text-4xl">
                  Contact Information
                </h2>
                <p className="text-[#718096] text-xl">
                  Reach out to us through any of the following channels:
                </p>
              </div>

              <div className="flex-1 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[gold]/20">
                    <svg
                      className="h-8 w-8 text-[#050a30]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 8l7.89 4.26c.3.16.67.16.97 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#050a30] text-xl">
                      Email
                    </h3>
                    <p className="text-[#718096] text-lg">ycbootcamp@taleofhumankind.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-12 shadow-lg lg:col-span-3 lg:pl-12">
              <div className="mb-8">
                <h2 className="mb-4 font-bold text-3xl text-[#050a30] md:text-4xl">
                  Send us a Message
                </h2>
                <p className="text-[#718096] text-xl">
                  We'd love to hear from you. Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>
              </div>

              {submitMessage && (
                <div
                  className={`mb-6 rounded-lg p-4 ${
                    submitMessage.includes("Thank you")
                      ? "border border-green-200 bg-green-50 text-green-700"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="font-medium text-base" htmlFor="name">
                      Name *
                    </Label>
                    <Input
                      className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                      id="name"
                      name="name"
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      suppressHydrationWarning
                      type="text"
                      value={formData.name}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="font-medium text-base" htmlFor="email">
                      Email *
                    </Label>
                    <Input
                      className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                      id="email"
                      name="email"
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      suppressHydrationWarning
                      type="email"
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="font-medium text-base" htmlFor="number">
                    Phone Number
                  </Label>
                  <Input
                    className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                    id="number"
                    name="number"
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    suppressHydrationWarning
                    type="tel"
                    value={formData.number}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="font-medium text-base" htmlFor="subject">
                    Subject *
                  </Label>
                  <Input
                    className="h-14 border-gray-300 text-base focus:border-[gold] focus:ring-[gold]/20"
                    id="subject"
                    name="subject"
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    required
                    suppressHydrationWarning
                    type="text"
                    value={formData.subject}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="font-medium text-base" htmlFor="content">
                    Message *
                  </Label>
                  <textarea
                    className="flex min-h-[160px] w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base ring-offset-white placeholder:text-gray-500 focus:border-[gold] focus:outline-none focus:ring-2 focus:ring-[gold]/20 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="content"
                    name="content"
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={8}
                    suppressHydrationWarning
                    value={formData.content}
                  />
                </div>

                <Button
                  className="group hover:-translate-y-1 hover-glow flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:text-base"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          fill="currentColor"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        height="18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
