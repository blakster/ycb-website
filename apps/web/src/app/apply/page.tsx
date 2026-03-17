"use client";

import { ArrowRight, Calendar, Clock, Users, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";
const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || "https://humankind-admin.web.app";

interface Contest {
  id: string;
  title: string;
  description?: string;
  shortDescription?: string;
  imageUrl?: string;
  status: string;
  applicationDeadline?: { _seconds: number } | string;
  startDate?: { _seconds: number } | string;
  endDate?: { _seconds: number } | string;
  maxParticipants?: number;
  currentParticipants?: number;
  organizationName?: string;
  tags?: string[];
}

function formatDate(value: unknown): string {
  if (!value) return "TBD";
  let date: Date | null = null;
  if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, unknown>;
    const seconds = obj._seconds ?? obj.seconds;
    if (typeof seconds === "number") {
      date = new Date(seconds * 1000);
    }
  }
  if (!date && (typeof value === "string" || typeof value === "number")) {
    date = new Date(value);
  }
  if (!date || Number.isNaN(date.getTime())) return "TBD";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getDeadlineStatus(deadline: unknown): { text: string; urgent: boolean } {
  if (!deadline) return { text: "No deadline", urgent: false };
  let date: Date | null = null;
  if (typeof deadline === "object" && deadline !== null) {
    const obj = deadline as Record<string, unknown>;
    const seconds = obj._seconds ?? obj.seconds;
    if (typeof seconds === "number") {
      date = new Date(seconds * 1000);
    }
  }
  if (!date && (typeof deadline === "string" || typeof deadline === "number")) {
    date = new Date(deadline);
  }
  if (!date || Number.isNaN(date.getTime())) return { text: "TBD", urgent: false };

  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) return { text: "Closed", urgent: false };
  if (daysLeft <= 7) return { text: `${daysLeft} days left`, urgent: true };
  return { text: formatDate(deadline), urgent: false };
}

const defaultImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop";

export default function ApplyPage() {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContests() {
      try {
        const response = await fetch(`${API_URL}/contests/active`);
        if (!response.ok) throw new Error("Failed to load contests");
        const data = await response.json();
        setContests(data.contests || data || []);
      } catch (err) {
        console.error("Failed to load contests:", err);
        setError("Unable to load programs right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadContests();
  }, []);

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

      {/* Contest Cards Section */}
      <section className="bg-gray-50 px-4 pt-4 pb-12">
        <div className="mx-auto max-w-5xl">
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-[gold]" />
              <p className="mt-4 text-gray-500">Loading programs...</p>
            </div>
          )}

          {error && (
            <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-8 text-center">
              <p className="mb-4 text-gray-600">{error}</p>
              <Button
                asChild
                className="smooth-hover bg-[gold] font-bold text-[#1a365d] hover:bg-[gold]/90"
              >
                <a
                  href={`${PORTAL_URL}/portal/contests`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Browse All Programs
                </a>
              </Button>
            </div>
          )}

          {!loading && !error && contests.length === 0 && (
            <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-8 text-center">
              <p className="mb-2 font-semibold text-gray-900 text-lg">No Programs Open</p>
              <p className="mb-4 text-gray-600">
                There are no active programs right now. Check back soon or sign up for our newsletter to be notified.
              </p>
              <Button
                asChild
                className="smooth-hover bg-[gold] font-bold text-[#1a365d] hover:bg-[gold]/90"
              >
                <a
                  href={`${PORTAL_URL}/portal/contests`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View All Programs
                </a>
              </Button>
            </div>
          )}

          {!loading && !error && contests.length > 0 && (
            <div className={`mx-auto grid max-w-6xl gap-6 ${contests.length === 1 ? "max-w-md" : contests.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {contests.map((contest) => {
                const deadline = getDeadlineStatus(contest.applicationDeadline);
                const isOpen = contest.status === "active";

                return (
                  <Card
                    className="group relative gap-0 overflow-hidden border border-gray-200 bg-white p-0 transition-all duration-300 hover:border-gold/50 hover:shadow-xl"
                    key={contest.id}
                  >
                    {/* Contest Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <Image
                        alt={contest.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        src={contest.imageUrl || defaultImage}
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <div
                          className={`rounded-full px-3 py-1 font-bold text-xs ${
                            isOpen
                              ? "bg-green-500 text-white"
                              : "bg-orange-500 text-white"
                          }`}
                        >
                          {isOpen ? "Open" : contest.status}
                        </div>
                      </div>
                      {deadline.urgent && isOpen && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="rounded-full bg-red-500 px-3 py-1 font-bold text-white text-xs">
                            {deadline.text}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mt-0 flex h-full flex-col p-6">
                      <h3 className="mb-2 font-bold text-gray-900 text-xl">
                        {contest.title}
                      </h3>
                      {contest.organizationName && (
                        <p className="mb-2 text-gray-500 text-sm">by {contest.organizationName}</p>
                      )}
                      <p className="mb-4 flex-grow text-gray-600 leading-relaxed">
                        {contest.shortDescription || contest.description?.slice(0, 120) || ""}
                        {(contest.description?.length || 0) > 120 && !contest.shortDescription ? "..." : ""}
                      </p>

                      {/* Details */}
                      <div className="mb-6 space-y-2">
                        {contest.applicationDeadline && (
                          <div className="flex items-center gap-3 text-gray-500">
                            <Calendar className="h-4 w-4 text-gold" />
                            <span className="text-sm">
                              Deadline: {formatDate(contest.applicationDeadline)}
                            </span>
                          </div>
                        )}
                        {contest.endDate && (
                          <div className="flex items-center gap-3 text-gray-500">
                            <Clock className="h-4 w-4 text-gold" />
                            <span className="text-sm">
                              Ends: {formatDate(contest.endDate)}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-3 text-gray-500">
                          <Users className="h-4 w-4 text-gold" />
                          <span className="text-sm">
                            {contest.currentParticipants || 0} applied
                            {contest.maxParticipants ? ` / ${contest.maxParticipants} spots` : ""}
                          </span>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="mt-auto">
                        <Button
                          asChild
                          className="group/btn w-full smooth-hover bg-[gold] font-bold text-[#1a365d] transition-all duration-300 hover:scale-105 hover:bg-[gold]/90"
                        >
                          <a
                            className="flex items-center justify-center gap-2 font-bold"
                            href={`${PORTAL_URL}/apply/${contest.id}`}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Apply Now
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
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
                <a
                  className="flex items-center gap-2"
                  href={`${PORTAL_URL}/portal/contests`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Browse All Programs
                  <ArrowRight className="h-4 w-4" />
                </a>
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
