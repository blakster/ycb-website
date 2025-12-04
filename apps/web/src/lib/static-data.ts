/**
 * Static Data Fallbacks
 * This file contains fallback data used when CMS toggles are disabled
 * or when API calls fail. This ensures the website always has content to display.
 */

import type { StaticImageData } from "next/image";
import img_2226 from "../app/hero_images/IMG_2226.jpg";
import img_2243 from "../app/hero_images/IMG_2243.jpg";
import img_2247 from "../app/hero_images/IMG_2247.jpg";
import img_2264 from "../app/hero_images/IMG_2264.jpg";
import img_7940 from "../app/hero_images/IMG_7940.jpg";
import ajaiAvatar from "../app/testi/Ajai.avif";
import ariqaAvatar from "../app/testi/Ariqa.jpeg";
import praveshAvatar from "../app/testi/Pravesh.jpg";
import vishalAvatar from "../app/testi/Vishal.jpg";
import yashveerAvatar from "../app/testi/Yashveer.jpg";

// Hero Slider Fallback Data
export const FALLBACK_HERO_SLIDES = [
  {
    id: "static-1",
    imageUrl: img_7940.src,
    title: "Dream it. Build it. Change it.",
    subtitle:
      "A one-week residential program where high schoolers learn to spot real-world problems, design bold solutions, build prototypes, and pitch their ideas",
    ctaText: "Learn More",
    ctaLink: "/about",
    order: 0,
    isActive: true,
  },
  {
    id: "static-2",
    imageUrl: img_2243.src,
    title: "Dream it. Build it. Change it.",
    subtitle:
      "A one-week residential program where high schoolers learn to spot real-world problems, design bold solutions, build prototypes, and pitch their ideas",
    ctaText: "Learn More",
    ctaLink: "/about",
    order: 1,
    isActive: true,
  },
  {
    id: "static-3",
    imageUrl: img_2247.src,
    title: "Dream it. Build it. Change it.",
    subtitle:
      "A one-week residential program where high schoolers learn to spot real-world problems, design bold solutions, build prototypes, and pitch their ideas",
    ctaText: "Learn More",
    ctaLink: "/about",
    order: 2,
    isActive: true,
  },
  {
    id: "static-4",
    imageUrl: img_2264.src,
    title: "Dream it. Build it. Change it.",
    subtitle:
      "A one-week residential program where high schoolers learn to spot real-world problems, design bold solutions, build prototypes, and pitch their ideas",
    ctaText: "Learn More",
    ctaLink: "/about",
    order: 3,
    isActive: true,
  },
  {
    id: "static-5",
    imageUrl: img_2226.src,
    title: "Dream it. Build it. Change it.",
    subtitle:
      "A one-week residential program where high schoolers learn to spot real-world problems, design bold solutions, build prototypes, and pitch their ideas",
    ctaText: "Learn More",
    ctaLink: "/about",
    order: 4,
    isActive: true,
  },
];

// Testimonials Fallback Data
export type Testimonial = {
  id: number | string;
  name: string;
  role: string;
  quote: string;
  avatar?: string | StaticImageData;
  imageUrl?: string;
  status?: string;
  order?: number;
};

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ajai Chowdhry",
    role: "Co-founder, HCL",
    avatar: ajaiAvatar,
    imageUrl: ajaiAvatar.src,
    quote:
      "The Young Changemakers Bootcamp is shaping the next generation of thinkers, innovators, and leaders. I was truly inspired to see how these young minds approached real-world problems with empathy, creativity, and purpose. Programs like YCB are building the foundation for a new India - one driven by curiosity, courage, and changemaking spirit.",
    status: "active",
    order: 0,
  },
  {
    id: 2,
    name: "Ariqa Rizwan",
    role: "Participant, Summer 2023 Edition",
    avatar: ariqaAvatar,
    imageUrl: ariqaAvatar.src,
    quote:
      "Being part of the Young Changemakers Bootcamp was a defining moment in my journey. Interacting with mentors and innovators from diverse fields opened my mind to new ideas and perspectives. Above all, it reminded me that age is never a barrier to creating meaningful change.",
    status: "active",
    order: 1,
  },
  {
    id: 3,
    name: "Yashveer Singh",
    role: "Global Director, Ashoka Young Changemakers",
    avatar: yashveerAvatar,
    imageUrl: yashveerAvatar.src,
    quote:
      "When I met the students at YCB, I saw a spark, the same one that drives every changemaker who starts young. Every participant I met carried a deep sense of purpose, and that's the true success of this initiative. What Tale of Humankind is doing through YCB is remarkable: helping young people realize that they don't need to wait to make a difference.",
    status: "active",
    order: 2,
  },
  {
    id: 4,
    name: "Pravesh Biyani",
    role: "Professor, IIIT Delhi",
    avatar: praveshAvatar,
    imageUrl: praveshAvatar.src,
    quote:
      "Hosting the YCB sessions was a delight. The students' energy, curiosity, and willingness to engage with complex ideas were remarkable. It's rare to see such integration of empathy and innovation in early education - YCB achieves that beautifully.",
    status: "active",
    order: 3,
  },
  {
    id: 5,
    name: "Vishal Pal Singh",
    role: "IRS Officer, Parent of Participant",
    avatar: vishalAvatar,
    imageUrl: vishalAvatar.src,
    quote:
      "Having spent years in public service, I've seen how crucial early leadership and empathy are. YCB helps young people build those values beautifully. My child came back more self-assured and socially aware — it was heartwarming to see such transformation at that age.",
    status: "active",
    order: 4,
  },
];

// About Section Stats Fallback Data
export const FALLBACK_ABOUT_STATS = {
  editions: 5,
  alumni: 210,
  projects: 60,
  livesImpacted: 75000,
};

// About Section Features Fallback Data
export const FALLBACK_ABOUT_FEATURES = [
  {
    icon: "Search",
    title: "Problem-Solving in Action",
    description:
      "Spot challenges around you and learn how to break them down into opportunities for change.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation & Creativity",
    description:
      "Use design thinking to turn bold ideas into solutions that can make a real difference.",
  },
  {
    icon: "Wrench",
    title: "Hands-On Prototyping",
    description:
      "Don't just talk about ideas — build them, test them, and see them come alive.",
  },
  {
    icon: "Mic",
    title: "Communication & Pitching",
    description:
      "Find your voice and pitch your ideas with confidence to mentors, experts, and peers.",
  },
  {
    icon: "Users",
    title: "Collaboration & Leadership",
    description:
      "Work in diverse teams, share responsibilities, and practice leading with empathy and impact.",
  },
  {
    icon: "Heart",
    title: "Community & Friendships",
    description:
      "Connect with students from across India, celebrate diversity, and build friendships that last a lifetime.",
  },
];

// Video URL
export const FALLBACK_VIDEO_URL = "https://www.youtube.com/embed/cvCbVCOm8Ow";

export default {
  FALLBACK_HERO_SLIDES,
  FALLBACK_TESTIMONIALS,
  FALLBACK_ABOUT_STATS,
  FALLBACK_ABOUT_FEATURES,
  FALLBACK_VIDEO_URL,
};
