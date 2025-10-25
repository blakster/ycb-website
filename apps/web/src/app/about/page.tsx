"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  FileDown,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageCircle,
  Mic,
  Pin,
  Search,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import creativityIcon from "./icons/creativity.png";
import exploringInnovationIcon from "./icons/exploring_innovation.png";
import kickoffIcon from "./icons/kickoff.png";
import ventureIcon from "./icons/venture.png";
import ajaiChowdharyImg from "./inspiring_leaders/Ajai Chowdhary.jpg";
import debjaniGhoshImg from "./inspiring_leaders/Debjani Ghosh.jpg";
import diaMirzaImg from "./inspiring_leaders/Dia Mirza.jpg";
import ramgopalRaoImg from "./inspiring_leaders/Prof. Ramgopal Rao.webp";
// Snapshots images
import img2240 from "./snapshots_past/IMG_2240.jpg";
import img2242 from "./snapshots_past/IMG_2242.jpg";
import img2243 from "./snapshots_past/IMG_2243.jpg";
import img2244 from "./snapshots_past/IMG_2244.jpg";
import img2245 from "./snapshots_past/IMG_2245.jpg";
import img2247 from "./snapshots_past/IMG_2247.jpg";
import img2251 from "./snapshots_past/IMG_2251.jpg";
import img2253 from "./snapshots_past/IMG_2253.jpg";
import img2254 from "./snapshots_past/IMG_2254.jpg";
import img2259 from "./snapshots_past/IMG_2259.jpg";
import img2261 from "./snapshots_past/IMG_2261.jpg";
import img2263 from "./snapshots_past/IMG_2263.jpg";

// Snapshots Slider Component
const SnapshotsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCaptionIndex, setActiveCaptionIndex] = useState<number | null>(
    null
  );

  // Auto-slide timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  type Slide = { title: string; description: string; image: StaticImageData };
  const slides: Slide[] = [
    {
      title: "Workshop Session",
      image: img2240,
      description: "Interactive learning sessions with hands-on activities",
    },
    {
      title: "Team Collaboration",
      image: img2242,
      description: "Students working together on innovative solutions",
    },
    {
      title: "Prototype Building",
      image: img2243,
      description: "Creating tangible solutions to real-world problems",
    },
    {
      title: "Final Presentations",
      image: img2244,
      description: "Showcasing innovative ideas to mentors and judges",
    },
    {
      title: "Mentorship Sessions",
      image: img2245,
      description: "One-on-one guidance from industry experts",
    },
    {
      title: "Innovation Labs",
      image: img2247,
      description: "Exploring cutting-edge technologies and tools",
    },
    {
      title: "Hands-on Practice",
      image: img2251,
      description: "Applying concepts through practical activities",
    },
    {
      title: "Outdoor Learning",
      image: img2253,
      description: "Learning beyond the classroom walls",
    },
    {
      title: "Teamwork at Work",
      image: img2254,
      description: "Collaborating to solve real problems",
    },
    {
      title: "Focused Sessions",
      image: img2259,
      description: "Deep dives guided by mentors",
    },
    {
      title: "Exploration & Discovery",
      image: img2261,
      description: "Curiosity-led exploration",
    },
    {
      title: "Presentation & Sharing",
      image: img2263,
      description: "Sharing ideas and getting feedback",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mb-8">
      <h3 className="mb-6 text-center font-bold text-[#050a30] text-xl">
        Snapshots from Past Editions
      </h3>

      <div className="relative w-full">
        {/* Main Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <div
                  aria-label={`${slide.title} — ${slide.description}`}
                  className={`group relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] transition-all duration-300`}
                  onClick={() =>
                    setActiveCaptionIndex((prev) =>
                      prev === index ? null : index
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveCaptionIndex((prev) =>
                        prev === index ? null : index
                      );
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <Image
                    alt={slide.title}
                    className={`object-cover ${
                      slide.title === "Prototype Building" ? "object-[center_25%]" :
                      slide.title === "Hands-on Practice" ? "object-[center_75%]" :
                      slide.title === "Outdoor Learning" ? "object-[center_75%]" :
                      "object-center"
                    }`}
                    fill
                    src={slide.image}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      activeCaptionIndex === index
                        ? "bg-black/50"
                        : "bg-black/0 group-hover:bg-black/35"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-300 pointer-events-none ${
                      activeCaptionIndex === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <h4 className="mb-2 font-bold text-white text-xl md:text-2xl [text-shadow:_3px_3px_6px_rgb(0_0_0_/_90%)]">
                      {slide.title}
                    </h4>
                    <p className="max-w-md text-white text-sm md:text-base [text-shadow:_3px_3px_6px_rgb(0_0_0_/_90%)]">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full bg-white/80 p-3 text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
          onClick={prevSlide}
          type="button"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full bg-white/80 p-3 text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
          onClick={nextSlide}
          type="button"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "scale-125 bg-[#050a30]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              key={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedFaqCategory, setSelectedFaqCategory] =
    useState<FaqCategory>("Application & Admission");
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isFloatingNavOpen, setIsFloatingNavOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "eligibility",
        "curriculum",
        "beyond",
        "aid",
        "reviews",
        "faq",
      ];
      const scrollPosition = window.scrollY + 200; // Offset for header

      // Check if we should show floating nav (mobile only)
      const heroSection = document.querySelector(
        ".hero-section"
      ) as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowFloatingNav(window.scrollY > heroBottom + 100);
      }

      for (const section of sections) {
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
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Account for header
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigationItems = [
    { id: "about", label: "About YCB", icon: BookOpen },
    { id: "eligibility", label: "Eligibility & Dates", icon: Calendar },
    { id: "curriculum", label: "Inside the Bootcamp", icon: GraduationCap },
    { id: "beyond", label: "Beyond the Curriculum", icon: Lightbulb },
    { id: "aid", label: "Fee & Financial Aid", icon: DollarSign },
    { id: "reviews", label: "Alumni Reviews", icon: Star },
    { id: "faq", label: "FAQ's", icon: MessageCircle },
  ];

  const bootcampDays = [
    {
      day: "Day 0",
      title: "Kickoff & Orientation",
      description: [
        "Orientation",
        "Campus Walk",
        "Informal Interaction with Students, Team & Mentors"
      ],
      icon: (
        <Image
          alt="Kickoff"
          className="h-5 w-5 md:h-6 md:w-6"
          height={24}
          src={kickoffIcon}
          width={24}
        />
      ),
      color: "from-blue-400 to-blue-600",
    },
    {
      day: "Day 1",
      title: "Spotting Problems That Matter",
      description: [
        "Introduction to Science, Technology & Engineering",
        "Changemaking for a better world",
        "Identifying Problems through Observation",
        "Hands-on Robotics Workshop",
        "Local Trip to Delhi",
        "Icebreaker Games"
      ],
      icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      day: "Day 2",
      title: "Exploring Innovation",
      description: [
        "Introduction to AI/ML & Impacts on Society + Decoding ChatGPT",
        "Learning how we learn & think: Introduction to Cognitive Psychology",
        "Visit to Design & Innovation Lab + Demonstration of 3D Printer",
        "How to think like an entrepreneur?",
        "Expressive Art Therapy",
        "Web 3.0 & Blockchain",
        "Movie Screening"
      ],
      icon: (
        <Image
          alt="Exploring Innovation"
          className="h-5 w-5 md:h-6 md:w-6"
          height={24}
          src={exploringInnovationIcon}
          width={24}
        />
      ),
      color: "from-purple-400 to-purple-600",
    },
    {
      day: "Day 3",
      title: "Creativity & Design Thinking",
      description: [
        "Team Formation + Ideation with changemaker mentor",
        "Design Thinking + Problem Validation using DT Tools",
        "Creativity, Innovation & Inventive Problem Solving",
        "Introduction to Web & App Development",
        "Talent Night"
      ],
      icon: (
        <Image
          alt="Creativity"
          className="h-5 w-5 md:h-6 md:w-6"
          height={24}
          src={creativityIcon}
          width={24}
        />
      ),
      color: "from-orange-400 to-orange-600",
    },
    {
      day: "Day 4",
      title: "From Ideas to Ventures",
      description: [
        "Product Innovation using DT Tools",
        "Unique Value Proposition",
        "Introduction to Financial Concepts for Business",
        "How to Prepare a Business Plan?",
        "Preparation for Innovative Pitching Competition",
        "The Art of Storytelling & Photography"
      ],
      icon: (
        <Image
          alt="Venture"
          className="h-5 w-5 md:h-6 md:w-6"
          height={24}
          src={ventureIcon}
          width={24}
        />
      ),
      color: "from-red-400 to-red-600",
    },
    {
      day: "Day 5",
      title: "The Big Pitch",
      description: [
        "Business Pitching Competition",
        "Open-House Session for Career Guidance",
        "Valedictory Ceremony",
        "Mini-Farewell",
        "Desi Adda Sports Event",
        "Musical Night"
      ],
      icon: <Mic className="h-5 w-5 md:h-6 md:w-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      day: "Day 6",
      title: "Closing & Departure",
      description: [
        "Departure from IIT Delhi campus"
      ],
      icon: <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />,
      color: "from-pink-400 to-pink-600",
    },
  ];

  const _eligibilityData = [
    {
      title: "Age Requirement",
      description: "18-25 years old",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Education",
      description: "Currently enrolled in college or recent graduate",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Passion",
      description: "Strong interest in climate action and social change",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Commitment",
      description: "Available for 12-week intensive program",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const beyondCurriculumItems = [
    {
      title: "Opportunities & Resources",
      description: "Stay ahead even after camp",
      icon: <Star className="h-8 w-8" />,
      features: [
        "Alumni receive curated opportunities — from contests and hackathons to workshops and global programs.",
      ],
    },
    {
      title: "Seed Grants & Support",
      description: "Ideas deserve a push",
      icon: <Lightbulb className="h-8 w-8" />,
      features: [
        "Get access to micro-grants and resources to kickstart your changemaking projects in schools and communities.",
      ],
    },
    {
      title: "Mentorship & Internships",
      description: "Guidance from those who've done it",
      icon: <Award className="h-8 w-8" />,
      features: [
        "Personalized mentorship, expert advice, and connections to internships with NGOs, startups, and impact-driven ventures.",
      ],
    },
    {
      title: "National Alumni Network",
      description: "A tribe of changemakers for life",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "Join a growing nationwide community of peers from diverse states and backgrounds, collaborating and inspiring each other long after the bootcamp.",
      ],
    },
  ];

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
        question: "Who can apply for YCB?",
        answer:
          "High school students in classes 9–12 (or equivalent), including those who have just completed Class 12 board exams.",
      },
      {
        question: "How do I apply?",
        answer:
          "Students can apply directly through the 'Apply' button on our website, and complete the application process online.",
      },
      {
        question: "Is there an application fee?",
        answer:
          "Yes, there is a non-refundable application fee of ₹500, payable online.",
      },
      {
        question: "What is required in the application?",
        answer:
          "Applicants must complete the online form, provide details, and pay the application fee. Shortlisted candidates then move to the next round.",
      },
      {
        question: "What is the admission process?",
        answer:
          "Round 1: Application review and essay. Round 2: Group discussion via online video call. Selected students receive admission confirmation and further details.",
      },
      {
        question: "When will I know the result of my application?",
        answer:
          "The results are generally out within a week for the respective rounds.",
      },
      {
        question: "What qualities are you looking for in applicants?",
        answer:
          "Passion for innovation and entrepreneurship, intellectual curiosity, openness to collaboration, and a willingness to explore and solve real-world problems.",
      },
      {
        question: "Can international students apply?",
        answer:
          "Currently, YCB is open only to students across India. Any Indian student living abroad for studies is welcome to participate in YCB.",
      },
      {
        question: "How many students are selected each season?",
        answer:
          "Around 40-50 students are selected each season pan India. Seats are limited to ensure high-quality learning and personal attention.",
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
        question:
          "How should students arriving from outside Delhi plan their travel?",
        answer:
          "We provide free pick-up and drop services for students from Delhi airports, railway stations, and bus stops for outside Delhi participants. Parents will be informed in advance about travel arrangements.",
      },
      {
        question: "What should participants bring with them?",
        answer:
          "A list of essentials will be shared after admission confirmation, including clothes, ID card, and personal care items.",
      },
    ],
    "Program Experience": [
      {
        question:
          "Is YCB a partnered program or connected to the host institution?",
        answer:
          "No, YCB is a flagship program of the Tale of Humankind foundation. The host institute is not responsible for design, curriculum, or delivery.",
      },
      {
        question: "How intensive is the daily schedule?",
        answer:
          "The program is structured yet balanced, combining workshops, group projects, mentor sessions, and fun activities.",
      },
      {
        question: "Will students have access to mentors?",
        answer:
          "Yes, industry experts, entrepreneurs, and experienced facilitators guide students throughout the program.",
      },
      {
        question: "How will YCB support students after the program?",
        answer:
          "Students join the YCB alumni network, where they get continued mentorship, exposure, and opportunities to collaborate on changemaking initiatives.",
      },
    ],
  };

  const alumniReviews = [
    {
      name: "Ananya Srivastava",
      batch: "Season-5",
      role: "Maharashtra",
      review:
        "YCB made me realize that changemaking isn't about age, resources, or background, it's all about mindset and the courage to begin. Every speaker, mentor, and even my fellow participants inspired me in their own unique way, pushing me to think deeper and dream bigger.",
      image: "AS",
    },
    {
      name: "Vanshika Jain",
      batch: "Season-4",
      role: "Karnataka",
      review:
        "YCB showed me what learning outside classrooms truly feels like. The exposure visits, team activities, and dialogues pushed me out of my comfort zone. I learned to collaborate, to listen deeply, and to think differently, lessons that no textbook could have given.",
      image: "VJ",
    },
    {
      name: "Allu Sairuchi Reddy",
      batch: "Season-4",
      role: "Telangana",
      review:
        "The best part about YCB was how real it felt. The mentors didn't talk about change theoretically; they showed us what it looks like in action. I learned how passion can turn into purpose, and purpose into something that truly helps people.",
      image: "AR",
    },
    {
      name: "Siddhi Jairath",
      batch: "Season-2",
      role: "Delhi",
      review:
        "YCB felt like stepping into a world where imagination met purpose. From learning about AI to sharing ideas with like-minded changemakers, every moment was filled with inspiration. It's where I stopped doubting myself and started believing that I could actually build something meaningful.",
      image: "SJ",
    },
    {
      name: "Dev Shah",
      batch: "Season-3",
      role: "Gujarat",
      review:
        "YCB taught me that changemaking isn't a one-time act, it's a mindset you live with. The sessions helped me connect my interests with impact, while the friendships I made became my support system for every challenge I've faced since then.",
      image: "DS",
    },
    {
      name: "Rhythm Goel",
      batch: "Season-1",
      role: "Delhi",
      review:
        "Young Changemakers Bootcamp was truly a life-changing experience. From learning to express ideas to building confidence, it shaped my mindset and helped me discover a newer, more confident version of myself. The workshops completely changed how I see the world and my role in it.",
      image: "RG",
    },
  ];

  const _renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        className={`h-4 w-4 ${i < rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
        key={i}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden pt-32 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 w-full px-8 text-center lg:px-16 xl:px-24">
          <h1 className="mb-6 font-bold text-5xl text-[#050a30] md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              YCB
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Discover everything about the Young Changemakers Bootcamp - from
            curriculum to community, eligibility to impact.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="flex-shrink-0 lg:w-64">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                Explore YCB
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
            {/* About YCB */}
            <section className="scroll-mt-32" id="about">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    About Young Changemakers Bootcamp
                  </h2>

                  {/* Mission Statement */}
                  <div className="mb-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                    <h3 className="mb-3 font-bold text-[#050a30] text-xl">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our mission is to empower high school students with the
                      mindset, skills, and community to become changemakers —
                      solving real problems with empathy, creativity, and
                      teamwork.
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-8 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-6">
                    <p className="text-gray-700 leading-relaxed">
                      The Young Changemakers Bootcamp (YCB) is an intensive
                      one-week residential program for students of grades 9–12.
                      It exposes them to real-world problem solving,
                      engineering, and innovation. Through hands-on learning and
                      interdisciplinary coursework, students identify pressing
                      challenges, design solutions, build prototypes, and pitch
                      their ideas — guided by mentors, innovators, and
                      entrepreneurs. YCB transforms students' potential into
                      action, helping them discover their power to drive
                      meaningful change in their schools, communities, and
                      beyond.
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                        <BookOpen className="h-6 w-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Experiential Learning
                      </h4>
                      <p className="text-gray-600 text-sm">
                        A structured journey of problem-solving, design
                        thinking, and innovation.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200">
                        <Users className="h-6 w-6 text-green-600 transition-all duration-300 group-hover:text-green-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Diverse Peer Network
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Bringing together bright students from across India for
                        collaborative learning.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200">
                        <Target className="h-6 w-6 text-purple-600 transition-all duration-300 group-hover:text-purple-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Real-World Projects
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Students design practical solutions to pressing
                        challenges in society.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
                        <Award className="h-6 w-6 text-orange-600 transition-all duration-300 group-hover:text-orange-700" />
                      </div>
                      <h4 className="mb-2 font-bold text-[#050a30]">
                        Expert Mentorship
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Guidance from entrepreneurs, educators, and
                        professionals for lasting impact.
                      </p>
                    </div>
                  </div>

                  {/* Snapshots from past edition */}
                  <SnapshotsSlider />
                </div>
              </div>
            </section>

            {/* Eligibility & Dates */}
            <section className="scroll-mt-32" id="eligibility">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Eligibility & Dates
                  </h2>

                  {/* Eligibility Requirements */}
                  <div className="mb-8">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Who Can Apply?
                    </h3>
                    <div className="rounded-xl border border-gray-100 bg-white p-6">
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            High school students from anywhere in India.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            Must be in Grade 9, 10, 11, or 12 while attending in
                            June 2025.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            Students who have just finished Class 12 board exams
                            are also eligible.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            The program will be conducted in English, so
                            students should be comfortable with written & spoken
                            English.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span>
                            Applicants will fill an online form and write a
                            short essay to show curiosity, creativity, and
                            passion for solving problems.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Important Dates */}
                  <div>
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                      Important Dates
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <FileDown className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Applications Open
                          </div>
                          <div className="text-gray-600 text-sm">
                            October 25, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                          <Pin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Application Deadline
                          </div>
                          <div className="text-gray-600 text-sm">
                            November 23, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                          <Megaphone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Round 1 Results Announced
                          </div>
                          <div className="text-gray-600 text-sm">
                            November 28, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                          <Mic className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Group Discussion Slots
                          </div>
                          <div className="text-gray-600 text-sm">
                            Nov 30 – Dec 5, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Final Shortlist
                          </div>
                          <div className="text-gray-600 text-sm">
                            December 8, 2025
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                          <Calendar className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#050a30]">
                            Bootcamp Dates
                          </div>
                          <div className="text-gray-600 text-sm">
                            December 17–23, 2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section className="scroll-mt-32" id="curriculum">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Inside the Bootcamp
                  </h2>
                  <p className="mb-8 text-gray-600">
                    A transformative 7-day journey of discovery, innovation, and
                    impact.
                  </p>

                  {/* Bootcamp Days Flow */}
                  <div className="mb-12 space-y-4 md:space-y-6">
                    {bootcampDays.map((day, index) => (
                      <div className="relative" key={index}>
                        {/* Connection Line - Hidden on mobile */}
                        {index < bootcampDays.length - 1 && (
                          <div className="absolute top-16 left-6 hidden h-12 w-0.5 bg-gradient-to-b from-gray-300 to-transparent md:top-20 md:block md:h-16" />
                        )}

                        <div className="flex items-start gap-4 md:gap-6">
                          {/* Icon Circle */}
                          <div
                            className={`h-10 w-10 rounded-full bg-gradient-to-r md:h-12 md:w-12 ${day.color} flex flex-shrink-0 items-center justify-center font-bold text-sm text-white shadow-lg md:text-lg`}
                          >
                            {day.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-lg md:p-6">
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                              <h3 className="font-bold text-[#050a30] text-lg md:text-xl">
                                {day.title}
                              </h3>
                              <span className="self-start rounded-full bg-amber-100 px-2 py-1 font-medium text-amber-700 text-xs md:px-3 md:text-sm">
                                {day.day}
                              </span>
                            </div>
                            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed md:text-base">
                              {day.description.map((point, pointIndex) => (
                                <li
                                  className="flex items-start gap-2"
                                  key={pointIndex}
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn from Inspiring Leaders Section */}
                  <div className="rounded-xl border border-gray-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-6 md:p-8">
                    <h3 className="mb-4 font-bold text-[#050a30] text-xl md:text-2xl">
                      Learn from Inspiring Leaders
                    </h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Over the past editions, YCB participants have had the
                      chance to interact with and learn directly from leading
                      innovators, entrepreneurs, and changemakers.
                    </p>

                    <div className="mb-6">
                      <p className="mb-4 font-medium text-gray-700">
                        Past speakers and mentors have included:
                      </p>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <Image
                            alt="Ajai Chowdhry"
                            className="h-12 w-12 min-h-12 min-w-12 shrink-0 rounded-full object-cover"
                            height={48}
                            src={ajaiChowdharyImg}
                            width={48}
                          />
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Ajai Chowdhry
                            </div>
                            <div className="text-gray-600 text-sm">
                              Co-Founder of HCL
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <Image
                            alt="Debjani Ghosh"
                            className="h-12 w-12 min-h-12 min-w-12 shrink-0 rounded-full object-cover"
                            height={48}
                            src={debjaniGhoshImg}
                            width={48}
                          />
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Debjani Ghosh
                            </div>
                            <div className="text-gray-600 text-sm">
                              President, NASSCOM
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <Image
                            alt="Dia Mirza"
                            className="h-12 w-12 min-h-12 min-w-12 shrink-0 rounded-full object-cover"
                            height={48}
                            src={diaMirzaImg}
                            width={48}
                          />
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Dia Mirza
                            </div>
                            <div className="text-gray-600 text-sm">
                              Actor & UN Environment Goodwill Ambassador
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                          <Image
                            alt="Prof. Ramgopal Rao"
                            className="h-12 w-12 min-h-12 min-w-12 shrink-0 rounded-full object-cover"
                            height={48}
                            src={ramgopalRaoImg}
                            width={48}
                          />
                          <div>
                            <div className="font-semibold text-[#050a30]">
                              Prof. Ramgopal Rao
                            </div>
                            <div className="text-gray-600 text-sm">
                              Former Director, IIT Delhi
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center text-gray-600">
                        …and many more incredible leaders from diverse fields.
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <a
                        className="inline-flex items-center gap-2 rounded-lg bg-[#050a30] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#050a30]/90"
                        href="/network"
                      >
                        <span>See our complete mentor and speaker network</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Beyond the Curriculum */}
            <section className="scroll-mt-32" id="beyond">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Beyond the Curriculum
                  </h2>
                  <p className="mb-8 text-gray-600">
                    YCB doesn't end after one week - it's just the beginning of
                    your changemaking journey. We've built a support system to
                    help you keep growing, experimenting, and leading long after
                    the camp is over.
                  </p>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {beyondCurriculumItems.map((item, index) => (
                      <div
                        className="hover:-translate-y-1 rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                        key={index}
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 text-[#050a30]">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-[#050a30] text-xl">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mb-4 text-gray-600">{item.description}</p>
                        <div className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <div
                              className="flex items-center gap-2 text-gray-600 text-sm"
                              key={featureIndex}
                            >
                              <ArrowRight className="h-4 w-4 text-[#050a30]" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Fee & Financial Aid */}
            <section className="scroll-mt-32" id="aid">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Fee & Financial Aid
                  </h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Program Fee */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                      <div className="mb-4">
                        <h3 className="font-bold text-[#050a30] text-xl">
                          Program Fee
                        </h3>
                      </div>
                      <p className="mb-4 font-medium text-gray-600">
                        Contribution towards the program:
                      </p>

                      <div className="space-y-4">
                        <div className="rounded-lg bg-blue-50 p-4">
                          <div className="font-bold text-2xl text-[#050a30]">
                            ₹17,500
                          </div>
                          <div className="text-gray-600 text-sm">
                            Program Fee (includes meals during the program)
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="font-medium text-gray-500 text-lg">
                            +
                          </div>
                        </div>

                        <div className="rounded-lg bg-green-50 p-4">
                          <span className="mb-1 inline-flex items-center rounded-full bg-green-200 px-2 py-0.5 text-xs font-semibold uppercase text-green-800">Optional</span>
                          <div className="font-bold text-[#050a30] text-xl">
                            ₹12,000
                          </div>
                          <div className="text-gray-600 text-sm">
                            Residence Fee (optional, includes stay & additional
                            services)
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <div className="rounded-md border border-amber-200 bg-amber-50 p-3">
                            <span className="text-base font-semibold text-amber-900">
                              Application Fee: ₹500
                              <span className="font-normal"> (non-refundable)</span>
                            </span>
                          </div>
                          <div className="mt-3 text-sm text-gray-800">
                            <strong>Deadline to apply:</strong> November 15, 2025
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                      <h3 className="mb-4 font-bold text-[#050a30] text-xl">
                        What's Included
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700 text-sm">
                            Program sessions, workshops & lab visits
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700 text-sm">
                            Meals for all participants (day-care & residential)
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700 text-sm">
                            Accommodation (for residential participants)
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700 text-sm">
                            Mentorship & guidance from experts
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700 text-sm">
                            Learning resources & material
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-gray-700 text-sm">
                            Local transfers (airport/railway pickups at fixed
                            slots)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Scholarships & Accessibility */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:col-span-2">
                      <div className="mb-4">
                        <h3 className="font-bold text-[#050a30] text-xl">
                          Scholarships & Accessibility
                        </h3>
                      </div>
                      <p className="mb-4 font-medium text-gray-600 italic">
                        Our commitment is inclusion.
                      </p>

                      <div className="space-y-4">
                        <div className="rounded-lg bg-yellow-50 p-4">
                          <div className="mb-2 font-semibold text-[#050a30]">
                            Need-based financial aid up to 100%
                          </div>
                          <div className="text-gray-600 text-sm">
                            for students from underprivileged backgrounds
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="font-medium text-gray-700 text-sm">
                            Requires supporting documents:
                          </div>
                          <div className="pl-4 text-gray-600 text-sm">
                            • Income certificate + short statement of need
                          </div>
                        </div>

                        <div className="text-sm">
                          <span className="text-gray-600">
                            <strong>Deadline to apply:</strong> May 30, 2025
                          </span>
                        </div>

                        <div className="rounded-lg bg-purple-50 p-4">
                          <div className="text-sm">
                            <span className="font-medium text-gray-700">
                              In past editions, over 30% of participants
                              attended with partial or full scholarships.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Alumni Reviews */}
            <section className="scroll-mt-32" id="reviews">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    What Our Alumni Say, in their own words
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Hear from our alumni about how YCB shaped their journey and
                    sparked their changemaking spirit.
                  </p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {alumniReviews.map((review, index) => (
                      <div
                        className="hover:-translate-y-1 rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-xl"
                        key={index}
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-dark font-bold text-white">
                            {review.image}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#050a30]">
                              {review.name}
                            </h4>
                            <div className="text-gray-600 text-sm">
                              {review.role}
                            </div>
                            <div className="font-medium text-amber-500 text-xs">
                              {review.batch}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm italic">
                          "{review.review}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="scroll-mt-32" id="faq">
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-6 font-bold text-3xl text-[#050a30]">
                    Frequently Asked Questions
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Got questions? We've got answers. Click on any question to
                    expand.
                  </p>

                  {/* Category Filter Tabs */}
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
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* FAQ Content */}
                  <div>
                    <div className="space-y-4">
                      {faqData[selectedFaqCategory]?.map((faq, index) => (
                        <div
                          className="overflow-hidden rounded-xl border border-gray-100 bg-white"
                          key={index}
                        >
                          <button
                            className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                            onClick={() =>
                              setExpandedFaq(
                                expandedFaq === index ? null : index
                              )
                            }
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
                      )) || (
                        <div className="py-8 text-center text-gray-500">
                          No FAQs available for this category.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact for More Questions */}
                <div className="mt-8 rounded-xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6 text-center">
                  <h3 className="mb-2 font-bold text-[#050a30]">
                    Still have questions?
                  </h3>
                  <p className="mb-4 text-gray-600">
                    We're here to help! Reach out to our team for personalized
                    answers.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 rounded-xl bg-soft-dark px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105"
                    href="/contact"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="relative w-full py-8 lg:py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>

            {/* Heading */}
            <h3 className="mb-4 font-bold text-3xl text-[#050a30] lg:text-4xl">
              Ready to Begin Your Changemaking Journey?
            </h3>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-[#718096] text-lg leading-relaxed">
              Join the next cohort of young innovators and problem-solvers. Take
              the first step towards making a meaningful impact in your
              community and beyond.
            </p>
          </div>

          {/* Apply Now Button */}
          <div className="flex justify-center">
            <a
              className="group hover:-translate-y-1 hover-glow flex h-12 w-fit items-center justify-center gap-3 rounded-[12px] border-2 border-[gold] bg-[gold] px-8 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-12 sm:py-4 sm:text-base lg:px-16 lg:py-5 lg:text-lg"
              href="/how-to-apply"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Additional Info */}
          <p className="mt-6 text-gray-600 text-sm">
            Applications are open! Don't miss your chance to be part of YCB
            2025.
          </p>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-8" />

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
                  ?.label || "Explore YCB"}
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
};

export default AboutPage;
