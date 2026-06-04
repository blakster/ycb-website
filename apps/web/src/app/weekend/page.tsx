"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  MapPin,
  MessageCircle,
  Mic,
  Rocket,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import weekendHero from "@/assets/weekend-hero.jpg";

const APPLY_FORM_URL = "https://forms.gle/jCWWYpi7dB4fBCxRA";

const navigationItems = [
  { id: "about", label: "About Weekend Edition" },
  { id: "cities", label: "Cities & Dates" },
  { id: "eligibility", label: "Eligibility" },
  { id: "experience", label: "The Experience" },
  { id: "sets-apart", label: "What Sets Us Apart" },
  { id: "fee", label: "Fee & Aid" },
  { id: "faq", label: "FAQs" },
] as const;

const SECTION_IDS = navigationItems.map((n) => n.id);

const faqCategories = [
  "Application & Admission",
  "For Parents",
  "Travel & Logistics",
  "Program Experience",
] as const;

type FaqCategory = (typeof faqCategories)[number];

const faqData: Record<
  FaqCategory,
  Array<{ question: string; answer: string }>
> = {
  "Application & Admission": [
    {
      question: "Who can apply for YCB Weekend Edition?",
      answer:
        "Students from across India studying in Grades 8-12 are eligible to apply.",
    },
    {
      question: "How do I apply?",
      answer:
        "Students can apply through the 'Apply' button on our website, and choose to apply to the YCB Weekend Edition for the city that fits right to them.",
    },
    {
      question: "Is there any selection process?",
      answer:
        "No. The program follows an open application model. Seats are limited and will be filled on a first-come, first-served basis.",
    },
    {
      question: "Is there an application fee?",
      answer: "No, there is no application fee for YCB Weekend Edition.",
    },
    {
      question: "Is this program suitable for beginners?",
      answer:
        "Yes. The program is designed for students with no prior experience, as well as those who are curious to explore innovation and problem-solving.",
    },
    {
      question: "What qualities are you looking for in the participants?",
      answer:
        "Passion for innovation and entrepreneurship, intellectual curiosity, openness to collaboration, and a willingness to explore and solve real-world problems.",
    },
    {
      question: "What is the cohort size?",
      answer:
        "Each cohort will consist of approximately 80-100 students.",
    },
  ],
  "For Parents": [
    {
      question: "How safe is the residential environment for students?",
      answer:
        "The campus is secure with 24x7 supervision, gender-separate accommodations, and trained team to ensure student safety and comfort.",
    },
    {
      question:
        "What level of parental involvement is expected during the program?",
      answer:
        "Parents are not required to attend. However, they receive regular updates via email and Whatsapp group. They can connect with participants in their break hours.",
    },
    {
      question: "What if my child has dietary restrictions or medical needs?",
      answer:
        "We accommodate vegetarian, and other dietary requirements, as well as special medical needs if informed in advance. On-site support is available throughout the week.",
    },
    {
      question:
        "Is there any difference between day scholars and residential participants?",
      answer:
        "No, all students receive the same program experience. The only difference is that scholars return home daily, while residential students stay on campus.",
    },
    {
      question:
        "Will my child have time to rest or relax during the program?",
      answer:
        "Yes, the schedule includes breaks, reflection time, and evening activities for relaxation and social interaction.",
    },
  ],
  "Travel & Logistics": [
    {
      question: "Do participants need to arrange their own travel?",
      answer:
        "Yes, students are required to arrange their own travel and report directly at the campus venue.",
    },
    {
      question: "Is accommodation provided?",
      answer:
        "Accommodation is optional and available at an additional cost for the participants.",
    },
    {
      question: "Will pickup/drop services be provided?",
      answer:
        "No, participants are expected to report directly to the venue.",
    },
  ],
  "Program Experience": [
    {
      question:
        "Is YCB Weekend Edition a partner program or connected to the host institution?",
      answer:
        "YCB Weekend Edition is organized by Tale of Humankind Foundation. Host institutions collaborate on venue and campus access; program design and delivery are led by the YCB team.",
    },
    {
      question: "Do I need prior knowledge of coding or technology?",
      answer:
        "No prior knowledge is required. The program focuses on thinking, building, and problem-solving.",
    },
    {
      question: "What should I bring to the program?",
      answer:
        "A list of essentials will be shared after admission confirmation, including clothes, ID card, and personal care items.",
    },
    {
      question: "What happens after the program?",
      answer:
        "Students join the YCB alumni network, and continue building their ideas further. Top performers may get a fast-track entry into advanced programs like YCB.",
    },
  ],
};

export default function WeekendEditionPage() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);
  const [selectedFaqCategory, setSelectedFaqCategory] =
    useState<FaqCategory>("Application & Admission");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const heroSection = document.querySelector(
        ".hero-section-weekend"
      ) as HTMLElement | null;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowFloatingNav(window.scrollY > heroBottom + 100);
      }

      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero — aligned with home page */}
      <section
        className="hero-section-weekend relative min-h-screen overflow-hidden bg-[#050a30]"
        id="hero-section"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 opacity-100"
            style={{
              backgroundImage: `url(${weekendHero.src})`,
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] from-[0%] via-[#000000cc] via-[35%] to-[#00000066] to-[70%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-transparent to-[#00000040]" />

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex h-full min-h-screen items-center">
            <div className="w-full py-20 lg:py-32">
              <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-4 sm:ml-4 lg:ml-8 lg:max-w-3xl xl:max-w-4xl">
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[gold]/40 bg-[gold]/10 px-4 py-1.5 font-medium text-[gold] text-sm backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  New program
                </p>
                <h1 className="font-bold text-4xl text-white leading-tight md:text-5xl lg:text-7xl">
                  YCB{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
                    Weekend Edition
                  </span>
                </h1>
                <p className="font-medium text-lg text-[gold]/95 sm:text-xl">
                  From curiosity to clarity & ideas to execution.
                </p>
                <p className="max-w-xl text-base text-white/90 leading-relaxed sm:text-lg lg:max-w-2xl lg:text-xl">
                  A fast-paced, 3-day experience where students move from ideas
                  to action, identifying problems, building solutions, and
                  pitching them with guidance from mentors and experts.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    className="btn-gold-hover inline-flex h-12 items-center justify-center rounded-[12px] border-2 border-[gold] bg-[gold] px-8 font-bold text-[#050a30] transition-all duration-300 hover:border-[#FFD700] hover:bg-[#FFD700] hover:shadow-lg"
                    href={APPLY_FORM_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Apply Now
                  </a>
                  <Button
                    className="h-12 border-2 border-white/30 bg-white/10 px-8 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    onClick={() => scrollToSection("experience")}
                    type="button"
                    variant="ghost"
                  >
                    Explore Program
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-8 py-12 lg:px-16 lg:py-16 xl:px-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="flex-shrink-0 lg:w-64">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-[#050a30] text-lg">
                <BookOpen className="h-5 w-5 text-[#050a30]" />
                Explore YCB
              </h3>
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <button
                    className={`flex w-full items-center rounded-xl px-0 py-3 text-left font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-soft-dark px-4 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-50 hover:px-4 hover:text-[#050a30]"
                    }`}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-16">
            <section className="scroll-mt-32" id="about">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                  About YCB Weekend Edition
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    YCB Weekend Edition is designed as a fast-paced, immersive
                    experience where students actively work through the process
                    of solving real-world problems.
                  </p>
                  <p>
                    Over three days, participants move from observing challenges
                    around them to shaping ideas, building early solutions, and
                    presenting their thinking. The focus is not just on learning
                    concepts, but on applying them, through structured sprints,
                    hands-on activities, and continuous feedback.
                  </p>
                  <p>
                    Set within leading institutions of India, the program offers
                    a focused environment to think deeply, experiment, and take
                    your first step towards building something meaningful.
                  </p>
                  <div className="rounded-xl border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 text-center">
                    <p className="font-semibold text-[#050a30] text-lg">
                      Not a workshop. Not a seminar.
                    </p>
                    <p className="mt-2 text-[#050a30]/90">
                      A space to explore, build, and begin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="cities">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-2 font-bold text-3xl text-[#050a30]">
                  Multiple Cities. One Changemaking Experience.
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      place: "IIIT Delhi",
                      dates: "May 22-24",
                      blurb:
                        "Build solutions inside one of India’s leading tech-driven campuses",
                    },
                    // {
                    //   place: "IIIT Hyderabad",
                    //   dates: "May 29-31",
                    //   blurb:
                    //     "Explore ideas where deep tech and innovation come together",
                    // },
                    {
                      place: "IIT Kharagpur",
                      dates: "June 5-7",
                      blurb:
                        "Turn ideas into action where legacy meets innovation",
                    },
                    // {
                    //   place: "IIT Mandi",
                    //   dates: "June 12-14",
                    //   blurb:
                    //     "Think and build with purpose amidst the mountains",
                    // },
                  ].map((c) => (
                    <div
                      className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg"
                      key={c.place}
                    >
                      <div className="mb-3 flex items-start gap-3">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#050a30] to-[#1e3a5f] text-white shadow-md">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#050a30] text-xl">
                            {c.place}
                          </h3>
                          <p className="mt-1 inline-flex rounded-full bg-amber-100 px-3 py-0.5 font-medium text-amber-900 text-sm">
                            {c.dates}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {c.blurb}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="eligibility">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                  Eligibility
                </h2>
                <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                  Who Can Apply?
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                    <span>
                      Students from across India are eligible to apply.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                    <span>
                      Applicants should be in Grades 8-12 at the time of
                      attending the program.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                    <span>
                      The program will be conducted in English, so participants
                      should be comfortable with written and spoken communication.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                    <span>
                      To apply, students will fill out an online form reflecting
                      their passion, originality, and interest in exploring
                      real-world problems.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-32" id="experience">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-8 font-bold text-3xl text-[#050a30]">
                  How the Experience Unfolds
                </h2>

                {/* Day 0 */}
                <div className="mb-12">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-[#050a30]">
                        Day 0: Arrive • Connect • Explore
                      </h3>
                      <p className="text-gray-600">
                        Start your journey by stepping into a new environment and way of thinking.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="space-y-3">
                      {[
                        "Welcome and orientation",
                        "Meet mentors, peers, and your team",
                        "Introduction to changemaking through stories and real examples",
                        "Icebreaker: identifying problems around you",
                      ].map((item) => (
                        <div className="flex items-start gap-3 text-gray-600" key={item}>
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                          <span className="text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Day 1 */}
                <div className="mb-12">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                      <Search className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-[#050a30]">
                        Day 1: From Observation to Creation
                      </h3>
                      <p className="text-gray-600">
                        Move from noticing problems to building your first solution.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {[
                      {
                        title: "Understand & Discover",
                        items: [
                          "The future of AI, innovation, and real-world problem-solving",
                          "Real examples of young changemakers",
                          "Observation-based problem discovery",
                          "Frameworks to define and shortlist meaningful challenges",
                        ],
                      },
                      {
                        title: "Build & Prototype",
                        items: [
                          "Form teams around shared problems",
                          "Generate solution ideas using design thinking and AI tools",
                          "Develop an early-stage prototype (no-code, physical, or AI-assisted)",
                          "Work through guided build sprints with mentor feedback",
                        ],
                      },
                      {
                        title: "Reflect & Reset",
                        items: [
                          "Creative reflection sessions",
                          "Team bonding and storytelling",
                        ],
                      },
                    ].map((block) => (
                      <div
                        className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                        key={block.title}
                      >
                        <h4 className="mb-4 font-bold text-[#050a30] text-lg">
                          {block.title}
                        </h4>
                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                          {block.items.map((line) => (
                            <li className="flex gap-3" key={line}>
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day 2 */}
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-[#050a30]">
                        Day 2: From Idea to Impact
                      </h3>
                      <p className="text-gray-600">
                        Refine, validate, and present your solution.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {[
                      {
                        title: "Validate & Strengthen",
                        items: [
                          "Understand users and feedback loops",
                          "Test and refine your solution",
                          "Build clarity on value and impact",
                        ],
                      },
                      {
                        title: "Structure Your Thinking",
                        items: [
                          "Basics of value creation and problem-solution fit",
                          "Simple business and impact models",
                          "Turn your idea into a structured concept",
                        ],
                      },
                      {
                        title: "Pitch & Present",
                        items: [
                          "Learn storytelling and pitch structure",
                          "Practice and refine your delivery",
                          "Present your solution to a panel of experts and receive feedback",
                        ],
                      },
                    ].map((block) => (
                      <div
                        className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                        key={block.title}
                      >
                        <h4 className="mb-4 font-bold text-[#050a30] text-lg">
                          {block.title}
                        </h4>
                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                          {block.items.map((line) => (
                            <li className="flex gap-3" key={line}>
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="sets-apart">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                  What Sets Us Apart
                </h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  More than just activities, this is a space where you actively
                  build, experiment, and bring your ideas to life through guided,
                  real-world processes.
                </p>
                <div className="mb-8 rounded-xl border border-[#FFD700]/25 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                  <p className="text-gray-800 leading-relaxed">
                    Top performers will earn a fast-track entry into YCB Season 7
                    at IIT Madras campus, taking their journey to the next level.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "High-Energy Build Sprints",
                      body: "Fast-paced, hands-on building experiences that take you from problem to prototype.",
                    },
                    {
                      title: "Using AI as a Solving Tool",
                      body: "Use AI tools to accelerate your thinking, ideation, and execution.",
                    },
                    {
                      title: "Design Thinking in Action",
                      body: "Apply structured frameworks to understand and solve real-world challenges.",
                    },
                    {
                      title: "The Big Pitch",
                      body: "Present your ideas in a real-world format and receive expert feedback.",
                    },
                  ].map((item) => (
                    <div
                      className="rounded-xl border border-gray-100 bg-white p-6 transition-all hover:shadow-md"
                      key={item.title}
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#050a30]/90 text-[gold]">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-bold text-[#050a30]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="fee">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                  Fee & Financial Aid
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Program Fee
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-blue-50 p-4">
                        <div className="font-bold text-2xl text-[#050a30]">
                          ₹5,000
                        </div>
                        <div className="text-gray-600 text-sm">
                          If applying individually
                        </div>
                      </div>
                      <div className="rounded-lg bg-indigo-50 p-4">
                        <div className="font-bold text-[#050a30] text-xl">
                          Group Offer - ₹4,200
                        </div>
                        <div className="text-gray-600 text-sm">
                          Students applying in a group can avail a discount of
                          ₹800 per participant
                        </div>
                      </div>
                      <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                        <span className="mb-1 inline-flex items-center rounded-full bg-green-200 px-2 py-0.5 font-semibold text-green-900 text-xs uppercase">
                          Optional
                        </span>
                        <div className="font-bold text-2xl text-[#050a30]">
                          ₹5,000
                        </div>
                        <div className="text-gray-600 text-sm">
                          Residence Fee (optional, includes stay & additional
                          services)
                        </div>
                      </div>
                      <div className="text-gray-800 text-sm">
                        <strong>Deadline to apply:</strong> May 15, 2026
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Program Fee includes
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Program sessions, workshops & lab visits",
                        "Meals for all participants (day-care & residential)",
                        "Mentorship & guidance from experts",
                        "Learning resources & material",
                      ].map((line) => (
                        <li className="flex items-start gap-3" key={line}>
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]" />
                          <span className="text-gray-700 text-sm">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:col-span-2">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Scholarships & Accessibility
                    </h3>
                    <p className="mb-4 font-medium text-gray-600 italic">
                      Our commitment is inclusion.
                    </p>
                    <div className="rounded-lg bg-yellow-50 p-4">
                      <div className="mb-2 font-semibold text-[#050a30]">
                        Need-based financial aid up to 100%
                      </div>
                      <div className="text-gray-600 text-sm">
                        for students from underprivileged backgrounds
                      </div>
                    </div>
                    <p className="mt-4 font-medium text-gray-700 text-sm">
                      Requires supporting documents:
                    </p>
                    <ul className="mt-2 text-gray-600 text-sm">
                      <li>• Income certificate + short statement of need</li>
                    </ul>
                    <p className="mt-4 text-gray-600 text-sm">
                      <strong>Deadline to reach out for scholarship:</strong> May
                      12, 2026
                    </p>
                    <p className="mt-4 text-gray-700 text-sm">
                      If you are looking for a scholarship, reach out to us at{" "}
                      <a
                        className="font-medium text-[#050a30] underline underline-offset-2 hover:text-[gold]"
                        href="mailto:ycbootcamp@taleofhumankind.org"
                      >
                        ycbootcamp@taleofhumankind.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32" id="faq">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                  FAQs
                </h2>
                <p className="mb-8 text-gray-600">
                  Got questions? Tap a category, then expand any question.
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  {faqCategories.map((category) => (
                    <button
                      className={`rounded-lg px-4 py-2 font-medium text-sm transition-all duration-200 ${
                        selectedFaqCategory === category
                          ? "bg-[#050a30] text-white shadow-lg"
                          : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-[#050a30]"
                      }`}
                      key={category}
                      onClick={() => {
                        setSelectedFaqCategory(category);
                        setExpandedFaq(null);
                      }}
                      type="button"
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {faqData[selectedFaqCategory]?.map((faq, index) => (
                    <div
                      className="overflow-hidden rounded-xl border border-gray-100 bg-white"
                      key={faq.question}
                    >
                      <button
                        className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        type="button"
                      >
                        <h3 className="pr-4 font-semibold text-[#050a30]">
                          {faq.question}
                        </h3>
                        {expandedFaq === index ? (
                          <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-500" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6">
                          <div className="mb-4 h-px w-full bg-gray-100" />
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 text-center">
                  <h3 className="mb-2 font-bold text-[#050a30]">
                    Still have questions?
                  </h3>
                  <p className="mb-4 text-gray-600">
                    We are here to help — reach out anytime.
                  </p>
                    <Link
                      className="inline-flex items-center gap-2 rounded-xl bg-soft-dark px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105"
                      href="/contact"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Contact Us
                    </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-gradient-to-b from-transparent to-blue-50/40 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#050a30] to-[#1e3a5f] shadow-lg">
            <Calendar className="h-8 w-8 text-[gold]" />
          </div>
          <h3 className="mb-4 font-bold text-3xl text-[#050a30] lg:text-4xl">
            Ready to Begin Your Changemaking Journey?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-[#718096] text-lg leading-relaxed">
            Applications are open! Don&apos;t miss your chance to be part of YCB
            Weekend Edition 2026.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="btn-gold-hover group inline-flex h-14 items-center justify-center gap-3 rounded-[12px] border-2 border-[gold] bg-[gold] px-10 font-bold text-[#050a30] transition-all duration-500 hover:border-[#FFD700] hover:bg-[#FFD700] hover:shadow-lg"
              href={APPLY_FORM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Application Form</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
            {/*<span className="text-gray-500 text-sm">
              Or visit:{" "}
              <span className="break-all font-mono text-xs sm:text-sm">
                {APPLY_FORM_URL}
              </span>
            </span>*/}
          </div>
        </div>
      </section>

      <div className="h-8" />

      {showFloatingNav && (
        <>
          {isFloatingNavOpen && (
            <button
              aria-label="Close section menu"
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setIsFloatingNavOpen(false)}
              type="button"
            />
          )}
          <div className="-translate-x-1/2 fixed bottom-6 left-1/2 z-50 transform lg:hidden">
            <div className="relative">
              {isFloatingNavOpen && (
                <div className="-translate-x-1/2 absolute bottom-full left-1/2 mb-3 max-h-80 w-64 transform overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationItems.map((item) => (
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
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
              <button
                className="flex items-center gap-2 rounded-full bg-soft-dark px-5 py-3 font-medium text-sm text-white shadow-lg transition-all duration-200 hover:bg-opacity-90"
                onClick={() => setIsFloatingNavOpen(!isFloatingNavOpen)}
                type="button"
              >
                {navigationItems.find((i) => i.id === activeSection)?.label ||
                  "Explore"}
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
