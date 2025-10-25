"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="section-gradient-light relative w-full py-8 lg:py-12">
      {/* Optional radial spots overlay */}
      <div className="radial-spots-light" />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-8">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>

          {/* Heading */}
          <h3 className="mb-4 font-bold text-3xl text-[#050a30] lg:text-4xl">
            Stay Connected with YCB
          </h3>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-[#718096] text-lg leading-relaxed">
            Stay updated on programs, deadlines, and changemaking
            opportunities.
          </p>
        </div>

        {/* Newsletter Form */}
        <form className="mx-auto max-w-md" onSubmit={handleNewsletterSubmit}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
            <div className="flex-1">
              <input
                className="w-full rounded-xl border border-gray-300 bg-white px-6 py-4 text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30"
                disabled={isLoading || isSubscribed}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                suppressHydrationWarning
                type="email"
                value={email}
              />
            </div>
            <button
              className="group hover:-translate-y-1 hover-glow mx-auto flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-14 sm:w-fit sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg"
              disabled={isLoading || isSubscribed}
              type="submit"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="hidden sm:inline">Subscribing...</span>
                  <span className="sm:hidden">Subscribing...</span>
                </>
              ) : isSubscribed ? (
                <>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="hidden sm:inline">Subscribed!</span>
                  <span className="sm:hidden">Subscribed!</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Subscribe</span>
                  <span className="sm:hidden">Subscribe</span>
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
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Subscribe</title>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {isSubscribed && (
            <div className="mt-4 flex items-center justify-center gap-2 text-yellow-600">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span className="font-medium text-sm">
                Thanks for subscribing! You'll hear from us soon.
              </span>
            </div>
          )}
        </form>

        {/* Privacy Note */}
        <p className="mt-6 text-gray-600 text-sm">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}