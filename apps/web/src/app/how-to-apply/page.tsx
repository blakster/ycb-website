"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clipboard,
  Clock,
  CreditCard,
  FileText,
  Heart,
  Lightbulb,
  Mail,
  MessageCircle,
  Star,
  Target,
  UserCheck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HowToApply() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);

  const navigationItems = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "steps", label: "Application Steps", icon: Clipboard },
    { id: "looking-for", label: "What We Look For", icon: Star },
    { id: "admissions", label: "Admissions Process", icon: CheckCircle },
    { id: "tips", label: "Application Tips", icon: Lightbulb },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if we should show floating nav (mobile only)
      // Show after scrolling past the page header and sidebar area
      const pageHeader = document.querySelector(".page-header") as HTMLElement;
      const sidebar = document.querySelector(".sidebar-nav") as HTMLElement;

      let triggerPoint = 300; // Default fallback

      if (pageHeader) {
        triggerPoint = pageHeader.offsetTop + pageHeader.offsetHeight + 100;
      } else if (sidebar) {
        triggerPoint = sidebar.offsetTop + 200;
      }

      setShowFloatingNav(window.scrollY > triggerPoint);

      // Update active section based on scroll position
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId) as HTMLElement;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) as HTMLElement;
    if (element) {
      const navHeight = 120;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const applicationSteps = [
    {
      step: "Step 1",
      title: "Check Eligibility",
      description:
        "Before you begin, make sure you meet the eligibility criteria",
      icon: <UserCheck className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600",
      details: [
        "You are a high school student (Grades 9–12 or equivalent).",
        "You have parental/guardian consent (if under 18).",
        "You are comfortable with English (the medium of instruction).",
      ],
    },
    {
      step: "Step 2",
      title: "Create an Account",
      description: "Sign up on our website to begin your application",
      icon: <Users className="h-6 w-6" />,
      color: "from-green-400 to-green-600",
      details: [
        "This will allow you to save progress, track status, and receive updates.",
      ],
    },
    {
      step: "Step 3",
      title: "Complete the Application Form",
      description:
        "Fill in your details and respond to essay & introduction questions",
      icon: <FileText className="h-6 w-6" />,
      color: "from-purple-400 to-purple-600",
      details: [
        "Takes about 30–40 minutes to complete",
        "Help us understand your curiosity, interests, and motivation to join YCB",
      ],
    },
    {
      step: "Step 4",
      title: "Pay the Application Fee",
      description: "Submit the non-refundable fee to confirm your application",
      icon: <CreditCard className="h-6 w-6" />,
      color: "from-orange-400 to-orange-600",
      details: ["Application fee: ₹500 (non-refundable)"],
    },
    {
      step: "Step 5",
      title: "Round 1 Review",
      description: "Our team reviews applications to shortlist candidates",
      icon: <Clipboard className="h-6 w-6" />,
      color: "from-red-400 to-red-600",
      details: ["Applications reviewed for the next stage"],
    },
    {
      step: "Step 6",
      title: "Round 2: Group Discussion",
      description:
        "Shortlisted applicants participate in group discussion or interview",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "from-indigo-400 to-indigo-600",
      details: ["Assess creativity, problem-solving, and teamwork skills"],
    },
    {
      step: "Step 7",
      title: "Admission Offer",
      description: "Selected students receive official admission letter",
      icon: <Award className="h-6 w-6" />,
      color: "from-teal-400 to-teal-600",
      details: [
        "Confirm your spot by paying the program fee within the deadline",
      ],
    },
  ];

  const qualities = [
    {
      emoji: "🌱",
      title: "Curiosity & Passion",
      description: "A genuine interest in solving real-world problems.",
    },
    {
      emoji: "💡",
      title: "Creative Thinking",
      description:
        "The ability to think differently and come up with bold ideas.",
    },
    {
      emoji: "🤝",
      title: "Collaboration",
      description: "Willingness to work in diverse teams and learn from peers.",
    },
    {
      emoji: "❤️",
      title: "Commitment",
      description: "The drive to follow through and make ideas happen.",
    },
    {
      emoji: "💬",
      title: "Clarity",
      description:
        "Comfort with expressing yourself in English, since it's the medium of instruction.",
    },
  ];

  const tips = [
    {
      title: "Be authentic",
      description: "Write essays in your own voice — we want to know you.",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      title: "Show your passion",
      description:
        "Share problems you care about, even if you don't have solutions yet.",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Keep it clear",
      description:
        "Avoid long, complicated answers — focus on clarity and honesty.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Prepare for GD/Interview",
      description:
        "Think about how you solve problems, work in teams, and communicate ideas.",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      title: "Don't overthink",
      description: "Curiosity and sincerity matter more than perfect answers.",
      icon: <Lightbulb className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header - Separate from main content */}
      <div className="page-header w-full px-8 pt-32 pb-8 lg:px-16 xl:px-24">
        <div className="text-center">
          <h1 className="mb-6 font-bold text-4xl text-[#050a30] md:text-5xl lg:text-6xl">
            How to{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Apply
            </span>
            ?
          </h1>
          <div className="mx-auto mb-6 h-1 w-16 bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-lg leading-relaxed">
            The application process is simple, but it requires thought and
            sincerity. Our process is designed to get to know you — your
            curiosity, ideas, and passion. Here's how it works:
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="flex-shrink-0 lg:w-64">
            <div className="sidebar-nav sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                Quick Navigation
              </h3>
              <div className="space-y-3">
                {navigationItems.map((item) => {
                  return (
                    <button
                      className={`flex w-full items-center rounded-xl px-0 py-3 text-left font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-soft-dark px-4 text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-50 hover:px-4 hover:text-[#050a30]"
                      }`}
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {/* Overview */}
            <section className="scroll-mt-32" id="overview">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Application Overview
                  </h2>

                  <div className="mb-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                    <h3 className="mb-3 font-bold text-[#050a30] text-xl">
                      Simple but Thoughtful Process
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our application process is designed to understand who you
                      are beyond grades and achievements. We want to know about
                      your curiosity, your ideas, and your passion for making a
                      difference in the world.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Quick Application
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Takes only 30-40 minutes to complete
                      </p>
                    </div>

                    <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Personal Touch
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Get to know you through essays and discussions
                      </p>
                    </div>

                    <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                        <Star className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Merit-Based
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Selection based on potential, not perfection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Steps */}
            <section className="scroll-mt-32" id="steps">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                  <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                    Application Steps
                  </h2>

                  <div className="space-y-6">
                    {applicationSteps.map((step, index) => (
                      <div
                        className="rounded-xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-lg"
                        key={index}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`bg-gradient-to-r ${step.color} flex-shrink-0 rounded-xl p-3 text-white`}
                          >
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-600 text-sm">
                                {step.step}
                              </span>
                              <h3 className="font-bold text-[#050a30] text-lg">
                                {step.title}
                              </h3>
                            </div>
                            <p className="mb-3 text-gray-600">
                              {step.description}
                            </p>
                            <ul className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li
                                  className="flex items-start gap-2 text-gray-700 text-sm"
                                  key={detailIndex}
                                >
                                  <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* What We're Looking For */}
            <section className="scroll-mt-32" id="looking-for">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    What We're Looking For
                  </h2>

                  <div className="mb-8 rounded-xl border border-green-200 bg-green-50 p-6">
                    <p className="font-medium text-gray-700 leading-relaxed">
                      We don't look for "perfect" resumes — we look for{" "}
                      <strong>potential</strong>. Successful YCB participants
                      share these qualities:
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {qualities.map((quality, index) => (
                      <div
                        className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
                        key={index}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{quality.emoji}</div>
                          <div>
                            <h3 className="mb-2 font-bold text-[#050a30] text-lg">
                              {quality.title}
                            </h3>
                            <p className="text-gray-600">
                              {quality.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Admissions Process */}
            <section className="scroll-mt-32" id="admissions">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
                  <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                    Admissions Process
                  </h2>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <Calendar className="h-6 w-6 text-blue-600" />
                          <h3 className="font-bold text-[#050a30]">
                            Rolling Admissions
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Applications are reviewed on a rolling basis – apply
                          early to increase your chances.
                        </p>
                      </div>

                      <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                          <h3 className="font-bold text-[#050a30]">
                            Final Selection
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Final selections are made after Round 2 (Group
                          Discussion).
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <Mail className="h-6 w-6 text-purple-600" />
                          <h3 className="font-bold text-[#050a30]">
                            Admission Letter
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Once selected, you'll receive an official admission
                          letter and payment details.
                        </p>
                      </div>

                      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <Clock className="h-6 w-6 text-orange-600" />
                          <h3 className="font-bold text-[#050a30]">
                            Limited Seats
                          </h3>
                        </div>
                        <p className="text-gray-700">
                          Seats are limited, so confirm your place promptly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Tips */}
            <section className="scroll-mt-32" id="tips">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-yellow-50/20 to-amber-50/30 p-8 shadow-lg">
                  <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                    Tips for Applying
                  </h2>

                  <div className="space-y-4">
                    {tips.map((tip, index) => (
                      <div
                        className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
                        key={index}
                      >
                        <div className="flex-shrink-0 rounded-full bg-yellow-100 p-2">
                          {tip.icon}
                        </div>
                        <div>
                          <h3 className="mb-2 font-bold text-[#050a30]">
                            {tip.title}
                          </h3>
                          <p className="text-gray-600">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 text-center">
                    <h3 className="mb-3 font-bold text-[#050a30] text-xl">
                      Ready to Apply?
                    </h3>
                    <p className="mb-6 text-gray-700">
                      Start your journey as a young changemaker today!
                    </p>
                    <a 
                      href="https://docs.google.com/forms/d/1EArNLQpDdzHXXbT8y8xk3q7ZPGy0ZgmG0SI6cAV8ZEA/edit?usp=drivesdk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group hover:-translate-y-1 hover-glow inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-8 py-4 font-bold text-[#050a30] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg"
                    >
                      Start Application
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Floating Navigation for Mobile */}
      {showFloatingNav && (
        <>
          {/* Overlay to close menu when clicking outside */}
          {isFloatingNavOpen && (
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setIsFloatingNavOpen(false)}
            />
          )}

          <div className="-translate-x-1/2 fixed bottom-6 left-1/2 z-50 transform lg:hidden">
            <div className="relative">
              {/* Expanded Menu */}
              {isFloatingNavOpen && (
                <div className="-translate-x-1/2 absolute bottom-full left-1/2 mb-3 max-h-80 w-64 transform overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationItems.map((item) => {
                    return (
                      <button
                        className={`flex w-full items-center px-4 py-3 text-left font-medium text-sm transition-all duration-200 ${
                          activeSection === item.id
                            ? "bg-soft-dark text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                        }`}
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsFloatingNavOpen(false);
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Menu Button */}
              <button
                className="flex items-center gap-2 rounded-full bg-soft-dark px-5 py-3 font-medium text-sm text-white shadow-lg transition-all duration-200 hover:bg-opacity-90"
                onClick={() => setIsFloatingNavOpen(!isFloatingNavOpen)}
              >
                {navigationItems.find((item) => item.id === activeSection)
                  ?.label || "Quick Navigation"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isFloatingNavOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
