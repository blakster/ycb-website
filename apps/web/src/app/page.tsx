"use client";

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Lightbulb,
  Mic,
  Pause,
  Play,
  Search,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import {
  type ElementType,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Quotation from "@/assets/quotations.png";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import WorldMap from "@/components/ui/world-map";
import alumniAbhijay from "./featured/alumni_story/Abhijay.jpg";
import alumniManan from "./featured/alumni_story/Manan.jpg";
import alumniNandini from "./featured/alumni_story/Nandini.jpg";
import alumniNishtha from "./featured/alumni_story/Nishtha.jpg";
import alumniTseten from "./featured/alumni_story/Tseten.jpg";
import img_2226 from "./hero_images/IMG_2226.jpg";
import img_2243 from "./hero_images/IMG_2243.jpg";
import img_2247 from "./hero_images/IMG_2247.jpg";
import img_2264 from "./hero_images/IMG_2264.jpg";
import img_7940 from "./hero_images/IMG_7940.jpg";
import ajaiAvatar from "./testi/Ajai.avif";
import ariqaAvatar from "./testi/Ariqa.jpeg";
import yashveerAvatar from "./testi/Yashveer.jpg";
import praveshAvatar from "./testi/Pravesh.jpg";
import vishalAvatar from "./testi/Vishal.jpg";

// Notification Banner Component
const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Animation duration
  }, []);

  useEffect(() => {
    // Only show if it hasn't been shown in this session
    if (!hasShown) {
      // Show notification after a short delay
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 1000);

      // Auto-hide after 15 seconds
      const hideTimer = setTimeout(() => {
        handleClose();
      }, 16_000); // 1 second delay + 15 seconds = 16 seconds total

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [hasShown, handleClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm transition-all duration-300 sm:max-w-md lg:max-w-lg ${
        isClosing ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl border border-black/5 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
        {/* Close button */}
        <button
          aria-label="Close notification"
          className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#050a30]/20"
          onClick={handleClose}
          type="button"
        >
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="16"
          >
            <title>Close</title>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-3 pr-6">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[gold]" />
            <h3 className="font-semibold text-[#050a30] text-sm sm:text-base">
              YCB Season-6
            </h3>
          </div>
          <p className="text-gray-700 text-xs leading-relaxed sm:text-sm">
            Applications for the 6th edition of YCB are live until November 22, 2025.
          </p>
          <div className="flex items-center gap-2">
            <button
              className="btn-gold-gradient smooth-hover hover:-translate-y-0.5 rounded-md px-3 py-1.5 font-semibold text-[#050a30] text-xs shadow-sm transition-all duration-200 sm:text-sm"
              onClick={() => {
                window.open("https://docs.google.com/forms/d/1EArNLQpDdzHXXbT8y8xk3q7ZPGy0ZgmG0SI6cAV8ZEA/edit?usp=drivesdk", "_blank", "noopener,noreferrer");
                handleClose();
              }}
              type="button"
            >
              Register
            </button>
            <button
              className="rounded-md border border-gray/10 px-3 py-1.5 font-medium text-gray-700 text-xs transition-colors duration-200 hover:bg-gray-50 sm:text-sm"
              onClick={handleClose}
              type="button"
            >
              Dismiss
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-100">
          <div
            className="h-full w-full origin-left scale-x-0 bg-[gold] transition-transform duration-[15000ms] ease-linear"
            style={{
              transform: isVisible && !isClosing ? "scaleX(1)" : "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const startTime = Date.now();
    const _endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - (1 - progress) ** 4;
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef}>
      <h3 className="mb-1 font-bold text-[gold] text-lg transition-all duration-300 sm:mb-2 sm:text-3xl lg:text-4xl">
        {count}
        {suffix}
      </h3>
    </div>
  );
};

// Hero slider images (local)
const heroImages = [
  img_7940.src,
  img_2243.src,
  img_2247.src,
  img_2264.src,
  img_2226.src,
];

// Testimonial data (updated)
type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string | StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ajai Chowdhry",
    role: "Co-founder, HCL",
    avatar: ajaiAvatar,
    quote:
      "The Young Changemakers Bootcamp is shaping the next generation of thinkers, innovators, and leaders. I was truly inspired to see how these young minds approached real-world problems with empathy, creativity, and purpose. Programs like YCB are building the foundation for a new India - one driven by curiosity, courage, and changemaking spirit.",
  },
  {
    id: 2,
    name: "Ariqa Rizwan",
    role: "Participant, Summer 2023 Edition",
    avatar: ariqaAvatar,
    quote:
      "Being part of the Young Changemakers Bootcamp was a defining moment in my journey. Interacting with mentors and innovators from diverse fields opened my mind to new ideas and perspectives. Above all, it reminded me that age is never a barrier to creating meaningful change.",
  },
  {
    id: 3,
    name: "Yashveer Singh",
    role: "Global Director, Ashoka Young Changemakers",
    avatar: yashveerAvatar,
    quote:
      "When I met the students at YCB, I saw a spark, the same one that drives every changemaker who starts young. Every participant I met carried a deep sense of purpose, and that’s the true success of this initiative. What Tale of Humankind is doing through YCB is remarkable: helping young people realize that they don’t need to wait to make a difference.",
  },
  {
    id: 4,
    name: "Pravesh Biyani",
    role: "Professor, IIIT Delhi",
    avatar: praveshAvatar,
    quote:
      "Hosting the YCB sessions was a delight. The students’ energy, curiosity, and willingness to engage with complex ideas were remarkable. It’s rare to see such integration of empathy and innovation in early education - YCB achieves that beautifully.",
  },
  {
    id: 5,
    name: "Vishal Pal Singh",
    role: "IRS Officer, Parent of Participant",
    avatar: vishalAvatar,
    quote:
      "Having spent years in public service, I’ve seen how crucial early leadership and empathy are. YCB helps young people build those values beautifully. My child came back more self-assured and socially aware — it was heartwarming to see such transformation at that age.",
  },
];

// Testimonial Card Component
const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar?: string | StaticImageData;
}) => {
  const initials = name
    .split(" ")
    .filter((n) => n.length > 0)
    .slice(0, 3)
    .map((part, idx, arr) =>
      arr.length > 1
        ? idx === 0 || idx === arr.length - 1
          ? part[0]
          : ""
        : part[0]
    )
    .join("")
    .toUpperCase()
    .trim();

  return (
    <div className="card-hover relative mx-2 h-[260px] w-[320px] flex-shrink-0 overflow-clip sm:h-[320px] sm:w-[480px] md:h-[380px] md:w-[620px]">
      {/* Card Background with gradient */}
      <div className="card-gradient-testimonial absolute inset-0 rounded-[12px] transition-all duration-300" />

      {/* Avatar (image if provided; otherwise initials) */}
      <div
        aria-label={avatar ? `${name}` : `Avatar initials for ${name}`}
        className="hover-scale absolute top-4 left-4 flex size-[50px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[gold] bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] font-semibold text-[#1a365d] transition-all duration-300 sm:top-5 sm:left-5 sm:size-[60px] md:top-8 md:left-8 md:size-[74px]"
        role="img"
      >
        {avatar ? (
          <Image alt={name} className="object-cover" fill src={avatar} />
        ) : (
          <span aria-hidden="true" className="text-sm sm:text-base md:text-lg">
            {initials}
          </span>
        )}
      </div>

      {/* Name and Role Container */}
      <div className="absolute top-[22px] left-[75px] text-left sm:top-[32px] sm:left-[85px] md:top-[45px] md:left-[130px]">
        <h4 className="mb-1 font-bold text-[#1a365d] text-[14px] leading-[16px] transition-colors duration-300 sm:text-[16px] sm:leading-[20px] md:text-[20px] md:leading-[24px]">
          {name}
        </h4>
        <p className="font-normal text-[#718096] text-[12px] leading-[14px] transition-colors duration-300 sm:text-[14px] sm:leading-[18px] md:text-[16px] md:leading-[20px]">
          {role}
        </p>
      </div>

      {/* Quote Container */}
      <div className="relative mx-auto mt-[95px] max-w-[270px] px-4 pb-5 sm:mt-[115px] sm:max-w-[350px] sm:px-5 sm:pb-6 md:mt-[150px] md:max-w-[455px] md:px-8 md:pb-8">
        {/* Opening Quotation Mark */}
        <div className="-left-[18px] -top-[12px] sm:-left-[22px] sm:-top-[16px] md:-left-[35px] md:-top-[28px] absolute">
          <Image
            alt=""
            className="h-[28px] w-[28px] sm:h-[36px] sm:w-[36px] md:h-[58px] md:w-[58px]"
            height={62}
            src={Quotation}
            width={62}
          />
        </div>

        {/* Quote Text */}
        <p className="text-left font-normal text-[#2d3748] text-[12px] leading-[17px] sm:text-[14px] sm:leading-[21px] md:text-[16px] md:leading-[25px]">
          {quote}
        </p>

        {/* Closing Quotation Mark */}
        <div className="-right-[18px] -bottom-[8px] sm:-right-[22px] sm:-bottom-[12px] md:-right-[35px] md:-bottom-[20px] absolute scale-x-[-1] scale-y-[-1]">
          <Image
            alt=""
            className="h-[28px] w-[28px] sm:h-[36px] sm:w-[36px] md:h-[58px] md:w-[58px]"
            height={62}
            src={Quotation}
            width={62}
          />
        </div>
      </div>
    </div>
  );
};

const HERO_IMAGE_SLIDE_DURATION = 5000;

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [_isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Summary points data used in About YCB section
  const summaryPoints = [
    {
      Icon: Search,
      title: "Problem-Solving in Action",
      desc: "Spot challenges around you and learn how to break them down into opportunities for change.",
    },
    {
      Icon: Lightbulb,
      title: "Innovation & Creativity",
      desc: "Use design thinking to turn bold ideas into solutions that can make a real difference.",
    },
    {
      Icon: Wrench,
      title: "Hands-On Prototyping",
      desc: "Don't just talk about ideas — build them, test them, and see them come alive.",
    },
    {
      Icon: Mic,
      title: "Communication & Pitching",
      desc: "Find your voice and pitch your ideas with confidence to mentors, experts, and peers.",
    },
    {
      Icon: Users,
      title: "Collaboration & Leadership",
      desc: "Work in diverse teams, share responsibilities, and practice leading with empathy and impact.",
    },
    {
      Icon: Heart,
      title: "Community & Friendships",
      desc: "Connect with students from across India, celebrate diversity, and build friendships that last a lifetime.",
    },
  ] as const;

  // Reusable summary card component (compact style for mobile carousel)
  const SummaryCard = ({
    Icon,
    title,
    desc,
    compact = false,
  }: {
    Icon: ElementType;
    title: string;
    desc: string;
    compact?: boolean;
  }) => (
    <div
      className={`group flex h-full flex-col items-center justify-start rounded-xl bg-white/5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 ${compact ? "p-4" : "p-4 sm:p-6"}`}
    >
      <div
        className={`mb-3 rounded-xl bg-[gold]/20 transition-all duration-300 group-hover:bg-[gold]/30 ${compact ? "p-3" : "p-3 sm:p-4"}`}
      >
        <Icon
          className={`${compact ? "h-6 w-6" : "h-6 w-6 sm:h-8 sm:w-8"} transform text-[gold] transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]`}
        />
      </div>
      <h4
        className={`${compact ? "text-base" : "text-lg sm:text-xl"} mb-2 font-semibold text-white`}
      >
        {title}
      </h4>
      <p
        className={`${compact ? "text-sm" : "text-sm sm:text-base"} text-gray-300 leading-relaxed`}
      >
        {desc}
      </p>
    </div>
  );

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, HERO_IMAGE_SLIDE_DURATION); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Notification Banner */}
      <NotificationBanner />

      {/* Skip to main content */}
      <div className="sr-only absolute top-4 left-4 z-50 rounded bg-white px-4 py-2 text-black focus:not-sr-only">
        Skip to main content
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden bg-[#050a30]"
        id="hero-section"
      >
        {/* Background image slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition:
                  index === 1 || index === 2 ? "center 35%" : "center",
              }}
            />
          ))}
        </div>

        {/* Enhanced gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] from-[0%] via-[#000000cc] via-[35%] to-[#00000066] to-[70%] opacity-90" />

        {/* Additional overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000040] via-transparent to-[#00000040]" />

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Navigation Arrows - top-right (all screens), offset below fixed header on md+ */}
          <div className="pointer-events-auto absolute top-3 right-4 z-50 flex gap-2 sm:top-4 sm:right-6 md:top-24 lg:top-28 lg:right-8">
            <button
              aria-label="Previous image"
              className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[gold] sm:p-3"
              onClick={goToPrevious}
              type="button"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              aria-label="Next image"
              className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-[gold] sm:p-3"
              onClick={goToNext}
              type="button"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="flex h-full min-h-screen items-center">
            <div className="w-full py-20 lg:py-32">
              {/* Left Content - moved slightly left to avoid button overlap */}
              <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-4 sm:ml-4 sm:space-y-6 lg:ml-8 lg:max-w-3xl lg:space-y-8 xl:max-w-4xl">
                {/* Youth Changemaker Bootcamp Badge */}
                {/* <div className="w-fit rounded-full bg-[gold] px-4 py-2 sm:px-6 sm:py-3 lg:px-9 lg:py-4">
                  <span className="font-bold text-[#1a365d] text-sm sm:text-base lg:text-lg">
                    Young Changemaker Bootcamp
                  </span>
                </div> */}

                {/* Main Heading */}
                <h1 className="font-bold text-4xl leading-tight md:text-5xl lg:text-7xl">
                  <span className="text-white">Dream it.</span>{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
                    Build it. Change it.
                  </span>
                </h1>

                {/* Short description */}
                <p className="max-w-xl text-base text-white/90 leading-relaxed tracking-[0.005em] sm:text-lg lg:max-w-2xl lg:text-xl xl:max-w-3xl">
                  A one-week residential program where high schoolers learn to
                  spot real-world problems, design bold solutions, build
                  prototypes, and pitch their ideas - all while making memories
                  and friends that last a lifetime, guided by mentors and
                  changemakers
                </p>
              </div>

              {/* Mobile: bottom controls (arrows + dots) */}
              <div className="absolute right-0 bottom-4 left-0 z-30 flex items-center justify-center gap-3 md:hidden">
                <button
                  aria-label="Previous image"
                  className="rounded-full bg-white/25 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-[gold]"
                  onClick={goToPrevious}
                  type="button"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "scale-110 bg-[gold]"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                      key={`hero-mobile-dot-${index}`}
                      onClick={() => setCurrentImageIndex(index)}
                      type="button"
                    />
                  ))}
                </div>
                <button
                  aria-label="Next image"
                  className="rounded-full bg-white/25 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-[gold]"
                  onClick={goToNext}
                  type="button"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Desktop: top/center dots only */}
              <div className="-translate-x-1/2 absolute bottom-8 left-1/2 z-20 hidden transform space-x-2 lg:flex">
                {heroImages.map((_, index) => (
                  <button
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-[gold] shadow-lg"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    key={`hero-image-indicator-${index}`}
                    onClick={() => setCurrentImageIndex(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About YCB Section */}
      <section
        className="relative w-full overflow-hidden bg-soft-dark py-12 sm:py-16 lg:py-20"
        id="about"
      >
        {/* Optional subtle overlay pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
                About YCB
              </h2>
              <div className="gradient-underline mx-auto mt-4" />
            </div>

            {/* Full Width Video */}
            <div className="mb-12 sm:mb-16">
              <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 z-20 h-full w-full rounded-2xl"
                  frameBorder="0"
                  onMouseEnter={() => setIsVideoPlaying(true)}
                  onMouseLeave={() => setIsVideoPlaying(false)}
                  src="https://www.youtube.com/embed/cvCbVCOm8Ow?enablejsapi=1"
                  title="YCB Program Overview"
                />

                {/* Darker overlay for video thumbnail - behind iframe with pointer-events-none */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-black/50 transition-opacity duration-300 group-hover:opacity-30" />
              </div>
            </div>

            {/* Video Summary Section */}
            <div className="mb-12 sm:mb-16">
              {/* Summary Title (centered) + mobile pause/play below to the right */}
              <div className="mb-8 sm:mb-10">
                <div className="mx-auto max-w-6xl px-2 sm:px-0">
                  <div className="text-center">
                    <h3 className="mb-3 font-bold text-2xl text-white sm:mb-4 sm:text-3xl lg:text-4xl">
                      What You'll Discover
                    </h3>
                    <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg lg:text-xl">
                      More than a bootcamp — it's a journey that blends skills,
                      community, and unforgettable experiences.
                    </p>
                  </div>
                  {/* Pause/Play visible on mobile where marquee is used (icon-only) */}
                  <div className="mt-8 flex justify-end md:hidden">
                    <MobileSummaryControls iconOnly />
                  </div>
                </div>
              </div>

              {/* Mobile (phones): auto-sliding marquee with pause/play */}
              <MobileSummaryMarquee summaryPoints={summaryPoints} />

              {/* Tablets and up: consistent-height grid (better on iPad mini and desktop) */}
              <div className="mx-auto hidden max-w-6xl grid-cols-2 items-stretch gap-6 md:grid lg:grid-cols-3 lg:gap-8">
                {summaryPoints.map(({ Icon, title, desc }, idx) => (
                  <SummaryCard
                    desc={desc}
                    Icon={Icon}
                    key={`summary-grid-${idx}`}
                    title={title}
                  />
                ))}
              </div>
            </div>

            {/* Centered Read More Button */}
            <div className="flex justify-center">
              <Button
                asChild
                className="group hover:-translate-y-1 hover-glow flex h-12 w-fit items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg"
                size="lg"
              >
                <Link href="/about">
                  <span className="hidden sm:inline">Read More About YCB</span>
                  <span className="sm:hidden">Read More</span>
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
                    <title>Read More</title>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network / Impact across India Section */}
      <section
        className="section-gradient-light relative w-full py-8 sm:py-16 lg:py-20"
        id="network"
      >
        {/* Sentinel used by header to know when to flip to navy */}
        <div
          aria-hidden
          className="-top-20 absolute h-1 w-1"
          id="impact-sentinel"
        />
        {/* Optional radial spots overlay */}
        <div className="radial-spots-light" />

        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl bg-transparent px-4 text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              Impact across <span className="gradient-text-gold">India</span>
            </h2>
            <div className="gradient-underline mx-auto mb-4" />
            <p className="mx-auto mb-1 max-w-4xl text-[#718096] text-lg sm:mb-12 lg:mb-16">
              Over the past five editions, the Young Changemakers Bootcamp has
              brought together over 210+ alumni from 12+ states — from the hills
              of Sikkim to the deserts of Rajasthan, from Delhi's classrooms to
              the coasts of Tamil Nadu. These students didn't just attend a
              program — they built libraries in rural villages, started
              eco-clubs, improved sanitation facilities, and even pitched ideas
              that secured funding. What began as a bootcamp is now a growing
              nationwide network of young innovators, leaders, and changemakers.
            </p>

            {/* Stats Grid */}
            <div className="mx-auto mt-4 mb-12 grid max-w-5xl grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mb-16 lg:grid-cols-4 lg:gap-8">
              {/* Editions */}
              <div className="hover-lift hover-glow smooth-hover relative w-full overflow-hidden rounded-lg bg-[#050a30] p-3 shadow-lg sm:rounded-xl sm:p-4 lg:p-6">
                <div className="relative z-10 text-center">
                  <AnimatedCounter duration={1500} suffix="" target={5} />
                  <p className="text-white text-xs sm:text-sm">Editions</p>
                </div>
              </div>

              {/* Alumni */}
              <div className="hover-lift hover-glow smooth-hover relative w-full overflow-hidden rounded-lg bg-[#050a30] p-3 shadow-lg sm:rounded-xl sm:p-4 lg:p-6">
                <div className="relative z-10 text-center">
                  <AnimatedCounter duration={1750} suffix="+" target={210} />
                  <p className="text-white text-xs sm:text-sm">Alumni</p>
                </div>
              </div>

              {/* Student Projects */}
              <div className="hover-lift hover-glow smooth-hover relative w-full overflow-hidden rounded-lg bg-[#050a30] p-3 shadow-lg sm:rounded-xl sm:p-4 lg:p-6">
                <div className="relative z-10 text-center">
                  <AnimatedCounter duration={2000} suffix="+" target={60} />
                  <p className="text-white text-xs sm:text-sm">
                    Student Projects
                  </p>
                </div>
              </div>

              {/* Lives Impacted */}
              <div className="hover-lift hover-glow smooth-hover relative w-full overflow-hidden rounded-lg bg-[#050a30] p-3 shadow-lg sm:rounded-xl sm:p-4 lg:p-6">
                <div className="relative z-10 text-center">
                  <AnimatedCounter duration={2500} suffix="+" target={75_000} />
                  <p className="text-white text-xs sm:text-sm">
                    Lives Impacted
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <WorldMap />
            </div>

            {/* View Our Network Button */}
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                className="group hover:-translate-y-1 hover-glow flex h-12 w-fit items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg"
                size="lg"
              >
                <Link href="/network">
                  View Our Network
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
                    <title>View Our Network</title>
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section-gradient-alt relative w-full py-20"
        id="editions"
      >
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
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-4 font-bold text-4xl text-[#050a30]">
              What They Say About YCB
            </h2>
            <div className="gradient-underline mx-auto mb-4" />
            <p className="mx-auto mb-6 max-w-2xl text-[#718096] text-lg sm:mb-8 lg:mb-10">
              Hear from mentors, leaders, and participants who have experienced
              the energy of the Young Changemakers Bootcamp.
            </p>
            {/* Pause/Play below heading, aligned to viewport right with small margin - only visible on mobile */}
            <div className="-ml-[50vw] -mr-[50vw] relative right-[50%] left-[50%] mt-4 mb-8 flex w-[100vw] justify-end pr-4 sm:pr-6 md:hidden lg:pr-10">
              <TestimonialsControls />
            </div>

            {/* Testimonial Cards with Marquee */}
            <div className="-ml-[50vw] -mr-[50vw] relative right-[50%] left-[50%] w-[100vw]">
              <TestimonialsMarquee className="[--duration:20s]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative w-full bg-[#f7fafc] py-20" id="featured">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4">
            {/* Section Title */}
            <div className="mb-12 text-center">
              <h2 className="font-bold text-4xl text-[#050a30]">
                Alumni Stories
              </h2>
              <div className="gradient-underline mx-auto mt-4" />
              <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                Discover the projects, blogs, and voices of YCB alumni making a
                difference across India.
              </p>
            </div>

            {/* Featured Grid - Mosaic: first card spans 2 cols on large */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 (featured larger) - Nandini */}
              <div className="lg:col-span-2">
                <div
                  className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  {/* white overlay behind image + content */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-white"
                    style={{ zIndex: 0 }}
                  />
                  <div className="relative z-10 h-[220px] overflow-hidden md:h-[240px] lg:h-[300px]">
                    <Image
                      alt="Nandini Nithyanandh"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      fill
                      src={alumniNandini}
                    />
                  </div>
                  <div className="relative z-20 flex flex-1 flex-col p-6">
                    <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                      My Journey at YCB Winter 2023
                    </h3>
                    <p className="mb-2 font-semibold text-[#D4A574] text-sm">
                      Nandini Nithyanandh, Tamil Nadu • Season 2
                    </p>
                    <p className="mb-4 text-[#718096]">
                      A transformative week of learning, laughter, and lifelong
                      connections that nurtured confidence, creativity, and
                      courage.
                    </p>
                    <div className="mt-auto">
                      <Link
                        className="link-hover group flex items-center gap-1 font-semibold text-[#D4A574] transition-all duration-300 hover:text-[#B8935F]"
                        href="/featured/nandini-nithyanandh-winter-2023"
                      >
                        Read more{" "}
                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Manan */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden md:h-[220px]">
                  <Image
                    alt="Manan Sangtani"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src={alumniManan}
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    From Ideas to Impact
                  </h3>
                  <p className="mb-2 font-semibold text-[#D4A574] text-sm">
                    Manan Sangtani, BITS Goa • Mentor
                  </p>
                  <p className="mb-4 text-[#718096]">
                    A mentor's journey through YCB, where ideas came to life and
                    community connections grew stronger.
                  </p>
                  <div className="mt-auto">
                    <Link
                      className="link-hover group flex items-center gap-1 font-semibold text-[#D4A574] transition-all duration-300 hover:text-[#B8935F]"
                      href="/featured/manan-sangtani-mentor"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 - Tseten */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden md:h-[220px]">
                  <Image
                    alt="Tseten Lhamu Bhutia"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src={alumniTseten}
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    Lines of Culture and Lessons of Change
                  </h3>
                  <p className="mb-2 font-semibold text-[#D4A574] text-sm">
                    Tseten Lhamu Bhutia, Sikkim • Season 5
                  </p>
                  <p className="mb-4 text-[#718096]">
                    Learning that real change begins when we listen, empathize,
                    and work together for our communities.
                  </p>
                  <div className="mt-auto">
                    <Link
                      className="link-hover group flex items-center gap-1 font-semibold text-[#D4A574] transition-all duration-300 hover:text-[#B8935F]"
                      href="/featured/tseten-lhamu-bhutia-season-5"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 4 - Abhijay */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden md:h-[220px]">
                  <Image
                    alt="Abhijay Srivastava"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src={alumniAbhijay}
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    100x Learning
                  </h3>
                  <p className="mb-2 font-semibold text-[#D4A574] text-sm">
                    Abhijay Srivastava, Tamil Nadu • Season 1
                  </p>
                  <p className="mb-4 text-[#718096]">
                    An intense week that changed perspectives on innovation,
                    design thinking, and building for tomorrow.
                  </p>
                  <div className="mt-auto">
                    <Link
                      className="link-hover group flex items-center gap-1 font-semibold text-[#D4A574] transition-all duration-300 hover:text-[#B8935F]"
                      href="/featured/abhijay-srivastava-season-1"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 5 - Nishtha */}
              <div
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10 h-[200px] overflow-hidden md:h-[220px]">
                  <Image
                    alt="Nishtha Agnihotri"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    src={alumniNishtha}
                  />
                </div>
                <div className="relative z-20 flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-bold text-[#050a30] text-xl">
                    A Week That Changed How I See the World
                  </h3>
                  <p className="mb-2 font-semibold text-[#D4A574] text-sm">
                    Nishtha Agnihotri, Uttar Pradesh • Season 2
                  </p>
                  <p className="mb-4 text-[#718096]">
                    Discovering that anyone, no matter how young, can make a
                    difference through creativity and collaboration.
                  </p>
                  <div className="mt-auto">
                    <Link
                      className="link-hover group flex items-center gap-1 font-semibold text-[#D4A574] transition-all duration-300 hover:text-[#B8935F]"
                      href="/featured/nishtha-agnihotri-season-2"
                    >
                      Read more{" "}
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered View More Button */}
            <div className="relative z-30 mt-16 flex justify-center pt-2">
              <Button
                asChild
                className="group hover:-translate-y-1 hover-glow flex h-12 w-fit items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg"
                size="lg"
              >
                <Link href="/featured">
                  <span className="hidden sm:inline">View More</span>
                  <span className="sm:hidden">View More</span>
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
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// These small components are declared after Home but used within it via closure of state setters
function MobileSummaryMarquee({
  summaryPoints,
}: {
  summaryPoints: ReadonlyArray<{
    Icon: ElementType;
    title: string;
    desc: string;
  }>;
}) {
  // Access global window state via a custom event to avoid prop drilling; fall back to paused=false
  // We'll dispatch and listen to a custom event emitted by MobileSummaryControls to sync pause state.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ paused: boolean }>).detail;
      if (detail) {
        setPaused(detail.paused);
      }
    };
    window.addEventListener(
      "ycb:toggle-summary-pause",
      handler as EventListener
    );
    return () =>
      window.removeEventListener(
        "ycb:toggle-summary-pause",
        handler as EventListener
      );
  }, []);
  return (
    <div className="-mx-4 md:hidden">
      <Marquee
        className="px-2 [--duration:20s]"
        paused={paused}
        pauseOnHover={false}
      >
        {summaryPoints.map(({ Icon, title, desc }, idx) => (
          <div
            className="mx-2 w-[82vw] max-w-[360px]"
            key={`summary-marquee-${idx}`}
          >
            <div className="rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="mb-3 inline-flex rounded-xl bg-[gold]/20 p-3">
                <Icon className="h-6 w-6 text-[gold]" />
              </div>
              <h4 className="mb-2 font-semibold text-base text-white">
                {title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

function MobileSummaryControls({ iconOnly = false }: { iconOnly?: boolean }) {
  const [paused, setPaused] = useState(false);
  const toggle = () => {
    const next = !paused;
    setPaused(next);
    // Broadcast to the marquee to update its state
    window.dispatchEvent(
      new CustomEvent("ycb:toggle-summary-pause", { detail: { paused: next } })
    );
  };
  return (
    <button
      aria-label={paused ? "Play summary carousel" : "Pause summary carousel"}
      aria-pressed={paused}
      className={`inline-flex items-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur transition-all duration-200 hover:bg-white/20 md:hidden ${iconOnly ? "p-2" : "gap-2 px-3 py-2"}`}
      onClick={toggle}
      type="button"
    >
      {paused ? (
        <>
          <Play className="h-4 w-4" />
          {!iconOnly && <span className="text-xs">Play</span>}
        </>
      ) : (
        <>
          <Pause className="h-4 w-4" />
          {!iconOnly && <span className="text-xs">Pause</span>}
        </>
      )}
    </button>
  );
}

const MD_BREAKPOINT = 768;

function TestimonialsMarquee({ className = "" }: { className?: string }) {
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= MD_BREAKPOINT); // md breakpoint
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ paused: boolean }>).detail;
      if (detail) {
        setPaused(detail.paused);
      }
    };
    window.addEventListener(
      "ycb:toggle-testimonials-pause",
      handler as EventListener
    );

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener(
        "ycb:toggle-testimonials-pause",
        handler as EventListener
      );
    };
  }, []);

  return (
    <Marquee
      className={className}
      paused={isDesktop ? false : paused}
      pauseOnHover={isDesktop}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          quote={testimonial.quote}
          role={testimonial.role}
          avatar={(testimonial as any).avatar}
        />
      ))}
    </Marquee>
  );
}

function TestimonialsControls({ iconOnly = false }: { iconOnly?: boolean }) {
  const [paused, setPaused] = useState(false);
  const toggle = () => {
    const next = !paused;
    setPaused(next);
    window.dispatchEvent(
      new CustomEvent("ycb:toggle-testimonials-pause", {
        detail: { paused: next },
      })
    );
  };
  return (
    <button
      aria-label={
        paused ? "Play testimonials carousel" : "Pause testimonials carousel"
      }
      aria-pressed={paused}
      className={`group hover:-translate-y-0.5 inline-flex transform items-center rounded-full border border-[#050a30]/10 bg-white/80 text-[#050a30] shadow-md backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#050a30]/10 ${iconOnly ? "p-2.5" : "gap-2.5 px-4 py-2.5 text-sm"}`}
      onClick={toggle}
      type="button"
    >
      {paused ? (
        <Play className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      ) : (
        <Pause className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      )}
      {!iconOnly && (
        <span className="text-xs">{paused ? "Play" : "Pause"}</span>
      )}
    </button>
  );
}
