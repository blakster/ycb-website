"use client";

import { ArrowRight, Award, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ApplyPage() {
  const applications = [
    {
      id: "ycb-2025",
      title: "Young Changemakers Bootcamp 2025",
      description:
        "Join our flagship program for young innovators and social entrepreneurs",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      deadline: "March 15, 2025",
      status: "Open",
      duration: "6 months",
      location: "Multiple Cities",
    },
    {
      id: "summer-intensive",
      title: "Summer Innovation Intensive",
      description: "Fast-track program for rapid prototyping and validation",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      deadline: "May 30, 2025",
      status: "Open",
      duration: "2 months",
      location: "Delhi & Mumbai",
    },
    {
      id: "leadership-program",
      title: "Youth Leadership Development",
      description:
        "Comprehensive leadership training for emerging changemakers",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      deadline: "July 15, 2025",
      status: "Coming Soon",
      duration: "4 months",
      location: "Bangalore & Pune",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-bold text-3xl md:text-5xl">
            <span className="text-gray-900">Available </span>
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
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {applications.map((program) => (
              <Card
                className="group relative gap-0 overflow-hidden border border-gray-200 bg-white p-0 transition-all duration-300 hover:border-gold/50 hover:shadow-xl"
                key={program.id}
              >
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
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
                          : program.status === "Opening Soon"
                            ? "bg-amber-500 text-white"
                            : "bg-orange-500 text-white"
                      }`}
                    >
                      {program.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-0 flex h-full flex-col p-6">
                  <h3 className="mb-3 font-bold text-gray-900 text-xl">
                    {program.title}
                  </h3>

                  <p className="mb-4 flex-grow text-gray-600 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Calendar className="h-4 w-4 text-gold" />
                      <span className="text-sm">
                        Deadline: {program.deadline}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                      <Clock className="h-4 w-4 text-gold" />
                      <span className="text-sm">
                        Duration: {program.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">
                      <div className="h-4 w-4 rounded-full bg-gold" />
                      <span className="text-sm">
                        Location: {program.location}
                      </span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className={`group/btn w-full transition-all duration-300 ${
                        program.status === "Open" ||
                        program.status === "Opening Soon"
                          ? "smooth-hover bg-[gold] font-bold text-[#1a365d] hover:scale-105 hover:bg-[gold]/90"
                          : "cursor-not-allowed bg-gray-200 text-gray-500 hover:bg-gray-300"
                      }`}
                      disabled={program.status === "Coming Soon"}
                    >
                      <Link
                        className="flex items-center justify-center gap-2 font-bold"
                        href={
                          program.status !== "Coming Soon"
                            ? "https://docs.google.com/forms/d/1EArNLQpDdzHXXbT8y8xk3q7ZPGy0ZgmG0SI6cAV8ZEA/edit?usp=drivesdk"
                            : "#"
                        }
                        target={program.status !== "Coming Soon" ? "_blank" : undefined}
                        rel={program.status !== "Coming Soon" ? "noopener noreferrer" : undefined}
                      >
                        {program.status === "Coming Soon"
                          ? "Coming Soon"
                          : "Apply"}
                      </Link>
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
                  href="https://docs.google.com/forms/d/1EArNLQpDdzHXXbT8y8xk3q7ZPGy0ZgmG0SI6cAV8ZEA/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
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
