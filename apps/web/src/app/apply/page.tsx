"use client";

import { ArrowRight, Award, Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ycbFlashcard from "@/assets/flashcards/ycb.jpg";
import delhiFlashcard from "@/assets/flashcards/delhi.jpg";
import hyderabadFlashcard from "@/assets/flashcards/hyderabad.jpeg";
import kharagpurFlashcard from "@/assets/flashcards/kharagpur.png";
import mandiFlashcard from "@/assets/flashcards/mandi.jpg";

export default function ApplyPage() {
  const applications = [
    {
      id: "ycb-2026",
      title: "Young Changemakers Bootcamp 2026",
      description:
        "Join our flagship program for the next generation of builders and leaders",
      image: ycbFlashcard,
      date: "June 17-23, 2026",
      deadline: "May 15, 2026",
      status: "Open",
      duration: "1 week",
      location: "Chennai",
      formUrl: "https://forms.gle/BML4T2DxpKX5qffYA"
    },
    {
      id: "weekend-edition-1",
      title: "YCB Weekend Edition 1",
      description: "Build solutions inside one of India’s leading tech-driven campuses",
      image: delhiFlashcard,
      date: "May 22-24, 2026",
      deadline: "May 15, 2026",
      status: "Open",
      duration: "3 days",
      location: "Delhi",
      formUrl: "https://forms.gle/jCWWYpi7dB4fBCxRA"
    },
    // {
    //   id: "weekend-edition-2",
    //   title: "YCB Weekend Edition 2",
    //   description: "Explore ideas where deep tech and innovation come together",
    //   image: hyderabadFlashcard,
    //   date: "May 29-31, 2026",
    //   deadline: "May 15, 2026",
    //   status: "Open",
    //   duration: "3 days",
    //   location: "Hyderabad",
    //   formUrl: "https://forms.gle/jCWWYpi7dB4fBCxRA"
    // },
    {
      id: "weekend-edition-2",
      title: "YCB Weekend Edition 2",
      description: "Turn ideas into action where legacy meets innovation",
      image: kharagpurFlashcard,
      date: "June 5-7, 2026",
      deadline: "May 15, 2026",
      status: "Open",
      duration: "3 days",
      location: "Kharagpur",
      formUrl: "https://forms.gle/jCWWYpi7dB4fBCxRA"
    },
    // {
    //   id: "weekend-edition-4",
    //   title: "YCB Weekend Edition 4",
    //   description: "Think and build with purpose amidst the mountains",
    //   image: mandiFlashcard,
    //   date: "June 12-14, 2026",
    //   deadline: "May 15, 2026",
    //   status: "Open",
    //   duration: "3 days",
    //   location: "Mandi",
    //   formUrl: "https://forms.gle/jCWWYpi7dB4fBCxRA"
    // },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-bold text-3xl md:text-5xl">
            <span className="text-gray-900">Upcoming </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-gray-600 text-lg leading-relaxed">
            Choose the program that best fits your goals and timeline
          </p>
        </div>
      </section>

      {/* Application Cards Section */}
      <section className="bg-gray-50 px-4 pt-4 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((program) => (
              <Card
                className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white p-0 transition-all duration-300 hover:border-gold/50 hover:shadow-xl"
                key={program.id}
              >
                {/* Program Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    alt={program.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    src={program.image}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`rounded-full px-3 py-1 font-bold text-xs ${
                        program.status === "Open"
                          ? "bg-green-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {program.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col p-6 pt-4">
                  <h3 className="mb-2 font-bold text-gray-900 text-xl">
                    {program.title}
                  </h3>

                  <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="h-4 w-4 text-gold" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase text-gray-400">Date</span>
                        <span className="text-sm font-medium">{program.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="h-4 w-4 text-gold" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase text-gray-400">Duration</span>
                        <span className="text-sm font-medium">{program.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="h-4 w-4 text-gold" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase text-gray-400">Location</span>
                        <span className="text-sm font-medium">{program.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                      <Award className="h-4 w-4 text-gold" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase text-gray-400">Deadline</span>
                        <span className="text-sm font-medium">{program.deadline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="group/btn w-full smooth-hover bg-[gold] font-bold text-[#1a365d] transition-all duration-300 hover:scale-[1.02] hover:bg-[gold]/90"
                    >
                      <a
                        className="flex items-center justify-center gap-2 font-bold"
                        href={program.formUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 md:text-4xl">
              Ready to Make an Impact?
            </h2>

            <p className="mb-6 text-gray-600 text-lg leading-relaxed">
              Join thousands of young changemakers who have transformed their
              communities through our programs. Your journey starts here.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="smooth-hover bg-[gold] px-6 py-3 font-bold text-[#1a365d] transition-all duration-300 hover:scale-105 hover:bg-[gold]/90"
              >
                <Link
                  className="flex items-center gap-2"
                  href="/apply"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                className="border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-gray-50"
                variant="outline"
              >
                <Link href="/contact">Have Questions?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
