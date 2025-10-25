"use client";

import {
  Calendar,
  Camera,
  ChevronDown,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Skiper } from "@/components/ui/skiper";
import s1_group from "./../../assets/group/s1_group.jpg";
import s2_group from "./../../assets/group/s2_group.jpg";
import s3_group from "./../../assets/group/s3_group.jpg";
import s4_group from "./../../assets/group/s4_group.jpeg";
import s5_group from "./../../assets/group/s5_group.jpg";
import s1_gallery_1 from "./s1_gallery/IMG_2207.jpg";
import s1_gallery_2 from "./s1_gallery/IMG_2208.jpg";
import s1_gallery_3 from "./s1_gallery/IMG_2209.jpg";
import s1_gallery_4 from "./s1_gallery/IMG_2210.jpg";
import s1_gallery_5 from "./s1_gallery/IMG_2211.jpg";
import s1_gallery_6 from "./s1_gallery/IMG_2212.jpg";
import s1_gallery_7 from "./s1_gallery/IMG_2213.jpg";
import s1_gallery_8 from "./s1_gallery/IMG_2214.jpg";
import s1_gallery_9 from "./s1_gallery/IMG_2216.jpg";
import s1_gallery_10 from "./s1_gallery/IMG_2217.jpg";
import s1_gallery_11 from "./s1_gallery/IMG_2218.jpg";
import s1_gallery_12 from "./s1_gallery/IMG_2219.jpg";
import s2_gallery_1 from "./s2_gallery/IMG_2220.jpg";
import s2_gallery_2 from "./s2_gallery/IMG_2221.jpg";
import s2_gallery_3 from "./s2_gallery/IMG_2222.jpg";
import s2_gallery_4 from "./s2_gallery/IMG_2223.jpg";
import s2_gallery_5 from "./s2_gallery/IMG_2224.jpg";
import s2_gallery_6 from "./s2_gallery/IMG_2225.jpg";
import s2_gallery_7 from "./s2_gallery/IMG_2226.jpg";
import s2_gallery_8 from "./s2_gallery/IMG_2227.jpg";
import s2_gallery_9 from "./s2_gallery/IMG_2228.jpg";
import s3_gallery_1 from "./s3_gallery/20240625_154957.jpeg";
import s3_gallery_2 from "./s3_gallery/20240625_172613.jpeg";
import s3_gallery_3 from "./s3_gallery/A270B11C-A5B9-44C9-87A0-3FCE8AA73301.jpg";
import s3_gallery_4 from "./s3_gallery/DSC02531.jpeg";
import s3_gallery_5 from "./s3_gallery/DSC02585.jpeg";
import s3_gallery_6 from "./s3_gallery/DSC02638.jpeg";
import s3_gallery_7 from "./s3_gallery/DSC02908.jpeg";
import s3_gallery_8 from "./s3_gallery/DSC03303.jpeg";
import s3_gallery_9 from "./s3_gallery/DSC03346.jpeg";
import s3_gallery_10 from "./s3_gallery/IMG_1612.jpeg";
import s3_gallery_11 from "./s3_gallery/IMG_1623.jpeg";
import s3_gallery_12 from "./s3_gallery/IMG_1847.jpeg";
import s4_gallery_1 from "./s4_gallery/IMG_0672.jpeg";
import s4_gallery_2 from "./s4_gallery/IMG_2257.jpeg";
import s4_gallery_3 from "./s4_gallery/IMG_2258.jpeg";
import s4_gallery_4 from "./s4_gallery/IMG_2259.jpeg";
import s4_gallery_5 from "./s4_gallery/IMG_2260.jpeg";
import s4_gallery_6 from "./s4_gallery/IMG_2261.jpeg";
import s4_gallery_7 from "./s4_gallery/IMG_2262.jpeg";
import s4_gallery_8 from "./s4_gallery/IMG_2263.jpeg";
import s4_gallery_9 from "./s4_gallery/IMG_2264.jpeg";
import s4_gallery_10 from "./s4_gallery/IMG_2265.jpeg";
import s4_gallery_11 from "./s4_gallery/IMG_2266.jpeg";
import s4_gallery_12 from "./s4_gallery/IMG_2267.jpeg";
import s5_gallery_1 from "./s5_gallery/IMG_2240 Large.jpeg";
import s5_gallery_2 from "./s5_gallery/IMG_2241 Large.jpeg";
import s5_gallery_3 from "./s5_gallery/IMG_2242 Large.jpeg";
import s5_gallery_4 from "./s5_gallery/IMG_2243 Large.jpeg";
import s5_gallery_5 from "./s5_gallery/IMG_2244 Large.jpeg";
import s5_gallery_6 from "./s5_gallery/IMG_2245 Large.jpeg";
import s5_gallery_7 from "./s5_gallery/IMG_2246 Large.jpeg";
import s5_gallery_8 from "./s5_gallery/IMG_2247 Large.jpeg";
import s5_gallery_9 from "./s5_gallery/IMG_2248 Large.jpeg";
import s5_gallery_10 from "./s5_gallery/IMG_2249 Large.jpeg";
import s5_gallery_11 from "./s5_gallery/IMG_2250 Large.jpeg";
import s5_gallery_12 from "./s5_gallery/IMG_2251 Large.jpeg";
import s5_gallery_13 from "./s5_gallery/IMG_2252 Large.jpeg";
import s5_gallery_14 from "./s5_gallery/IMG_2253 Large.jpeg";
import s5_gallery_15 from "./s5_gallery/IMG_2254 Large.jpeg";
import s5_gallery_16 from "./s5_gallery/IMG_2255 Large.jpeg";

const editionsData = {
  "YCB Season 1": {
    year: "2023",
    season: "June 2023",
    name: "YCB 2023 - Summer Edition",
    status: "completed",
    location: "IIT Delhi",
    participants: 46,
    states: 6,
    schools: 14,
    expectedParticipants: 50,
    dates: "June 2023",
    tagline:
      "Where ideas turned into movement, curiosity met purpose, and young minds reimagined changemaking.",
    registrationOpen: false,
    groupPhoto: s1_group.src,
    comingSoonImage: s1_group.src,

    highlights: {
      keynotes: [
        "Prof. Virendra Kumar Vijay",
        "Debjani Ghosh",
        "Dr. Itisha Nagar",
        "RJ Ginnie",
        "Prof. Tapan Gandhi",
        "Yashveer Singh",
        "Tanmay Nag",
        "Pragya Vats",
      ],
      workshops: [
        "AI & Robotics",
        "Python Programming",
        "Cybersecurity",
        "Design Thinking",
        "Expressive Art Workshop",
        "Art of Storytelling",
        "Business Planning",
        "Social Entrepreneurship",
      ],
      visits: [
        "Rashtrapati Bhavan",
        "IIT Delhi Central Library and Workshops",
        "India Gate",
      ],
      activities: [
        "Informal Dialogues with Young Entrepreneurs",
        "Movie Nights",
        "Talent and Music Nights",
        "My Idea for Change Competition",
      ],
    },

    narrativeContent: {
      intro:
        "YCB 2023 marked the beginning of a changemaking revolution, a week where ideas turned into movement, curiosity met purpose, and young minds came together to reimagine how change is created.",
      visionaryLeadership:
        "The first edition brought together some of the most forward-thinking leaders from diverse fields who laid the foundation of what YCB stands for today. From Prof. Virendra Kumar Vijay and Debjani Ghosh's powerful inaugural sessions on rural development, technology, and innovation, to thought-provoking interactions with Dr. Itisha Nagar, RJ Ginnie, and Prof. Tapan Gandhi, every speaker inspired students to think beyond boundaries. The finale, graced by Yashveer Singh, Tanmay Nag, and Pragya Vats, gave participants a glimpse into the real-world stories of courage, empathy, and leadership that define changemaking.",
      handsOnLearning:
        "YCB 2023 was designed as an immersive experience, a blend of creativity, technology, and problem-solving. Participants explored AI & Robotics, Python Programming, and Cybersecurity, while discovering how design thinking fuels social impact. The Expressive Art Workshop and Art of Storytelling sessions helped them connect creativity with purpose, while workshops on Business Planning and Social Entrepreneurship bridged innovation with action. Each day deepened their understanding of how technology and empathy can come together to create lasting solutions.",
      immersiveExperiences:
        "Learning extended far beyond classrooms. Participants explored India's historic and innovation landmarks, from the grandeur of Rashtrapati Bhavan to the bustling corridors of IIT Delhi's Central Library and Workshops, and an evening at India Gate that left everyone spellbound. These visits gave students a lived experience of India's heritage and progress, reminding them that innovation grows best when rooted in culture and purpose.",
      communityBuilding:
        "True to YCB's spirit, the first season built a close-knit family of changemakers. From informal dialogues with young entrepreneurs and movie nights under the stars to talent and music nights, every interaction became a memory. Meals turned into mini think-tanks, and laughter-filled evenings sparked friendships that still last today. What began as a program quickly transformed into a community.",
      conclusion:
        "YCB 2023 wasn't just the start of a bootcamp, it was the birth of a changemaking movement. It set the tone for every edition that followed, proving that when young people come together with purpose, innovation, and heart, change becomes unstoppable.",
    },

    galleryImages: [
      {
        src: s1_gallery_1.src,
        alt: "YCB Season 1 - Event moment 1",
      },
      {
        src: s1_gallery_2.src,
        alt: "YCB Season 1 - Event moment 2",
      },
      {
        src: s1_gallery_3.src,
        alt: "YCB Season 1 - Event moment 3",
      },
      {
        src: s1_gallery_4.src,
        alt: "YCB Season 1 - Event moment 4",
      },
      {
        src: s1_gallery_5.src,
        alt: "YCB Season 1 - Event moment 5",
      },
      {
        src: s1_gallery_6.src,
        alt: "YCB Season 1 - Event moment 6",
      },
      {
        src: s1_gallery_7.src,
        alt: "YCB Season 1 - Event moment 7",
      },
      {
        src: s1_gallery_8.src,
        alt: "YCB Season 1 - Event moment 8",
      },
      {
        src: s1_gallery_9.src,
        alt: "YCB Season 1 - Event moment 9",
      },
      {
        src: s1_gallery_10.src,
        alt: "YCB Season 1 - Event moment 10",
      },
      {
        src: s1_gallery_11.src,
        alt: "YCB Season 1 - Event moment 11",
      },
      {
        src: s1_gallery_12.src,
        alt: "YCB Season 1 - Event moment 12",
      },
    ],

    winningIdeas: [
      {
        title: "Kheti Khata",
        description:
          "Empowering agricultural traders with digital tools to simplify and streamline daily accounting.",
        team: "Bhavya Garodia, Parwan Siddle, Tanvir Singh",
      },
      {
        title: "Wear Easy",
        description:
          "Creating an inclusive fashion platform that empowers people with disabilities to express themselves confidently.",
        team: "Agrim Sharma, Dewank Paliwal, Jyotiraditya Ganguly, Shubham Rohatgi",
      },
    ],

    testimonials: [
      {
        quote:
          "Being part of the Young Changemakers Bootcamp was a defining moment in my journey. Interacting with mentors and innovators from diverse fields opened my mind to new ideas and perspectives. Above all, it reminded me that age is never a barrier to creating meaningful change.",
        author: "Ariqa Rizwan",
        location: "Delhi",
      },
      {
        quote:
          "Young Changemakers Bootcamp was truly a life-changing experience. From learning to express ideas to building confidence, it shaped my mindset and helped me discover a newer, more confident version of myself. The workshops completely changed how I see the world and my role in it.",
        author: "Rhythm Goel",
        location: "Delhi",
      },
      {
        quote:
          "The mentors at YCB didn't just teach us, they believed in us. The way they shared their journeys, their failures, and lessons made me realize that changemakers aren't born; they're built through persistence and empathy. I left with clarity, courage, and countless memories.",
        author: "Navya Nilay",
        location: "Delhi",
      },
    ],

    // impact: {
    //   projectsStarted: 80,
    //   clubsFormed: 12,
    //   diversityStats: {
    //     genderBalance: "50% female, 50% male",
    //     ruralUrban: "40% rural, 60% urban",
    //   },
    //   initiatives: [
    //     "First YCB edition that started the changemaking movement",
    //     "Built a close-knit family of changemakers",
    //     "Established the foundation for all future editions",
    //   ],
    // },
  },

  "YCB Season 2": {
    year: "2023",
    season: "December 2023",
    name: "YCB 2023 - Winter Edition",
    status: "completed",
    location: "IIT Delhi",
    participants: 35,
    states: 5,
    schools: 17,
    expectedParticipants: 40,
    dates: "December 2023",
    tagline:
      "A winter of ideas, innovation, and imagination, where technology met purpose.",
    registrationOpen: false,
    groupPhoto: s2_group.src,
    comingSoonImage: s2_group.src,

    highlights: {
      keynotes: [
        "Prof. Payel C. Mukherjee",
        "Prof. Ramgopal Rao",
        "Richa Gupta",
        "Kulbir Lamba",
        "Prabal Kaur Deol",
        "Dia Mirza",
      ],
      workshops: [
        "Web & App Development",
        "Figma Activities",
        "AI Applications and ChatGPT",
        "Brain-Computer Interface (BCI) Demonstration",
        "Deep Tech Entrepreneurship",
        "Inventive Problem Solving",
        "Business Planning",
        "Storytelling",
        "Drone Theory",
        "Sustainability",
      ],
      visits: [
        "Rashtrapati Bhavan",
        "India Gate",
        "IIT Delhi Central Library and Workshops",
      ],
      activities: [
        "Talent Nights",
        "Dance and Music",
        "Movie Screenings",
        "Informal Dialogues",
        "My Idea for Change Competition",
      ],
    },

    narrativeContent: {
      intro:
        "As the year came to a close, YCB December 2023 became a winter of ideas, innovation, and imagination, where technology met purpose, and changemaking evolved into action.",
      visionaryLeadership:
        "The winter edition of YCB brought together an inspiring lineup of speakers who shaped perspectives and provoked thought. From Prof. Payel C. Mukherjee and Prof. Ramgopal Rao's insights on innovation and technology, to Richa Gupta, Kulbir Lamba, and Prabal Kaur Deol's sessions on sustainability, leadership, and entrepreneurship, each moment pushed participants to think bigger and bolder. The camp's finale was graced by Dia Mirza, whose powerful talk on environmental activism and social change left every young changemaker inspired to act with purpose and compassion.",
      handsOnLearning:
        "YCB December 2023 was a deep dive into innovation in action. Students explored Web & App Development with live demonstrations and Figma activities, unlocked the potential of AI applications and ChatGPT, and even witnessed the demonstration of Brain-Computer Interface (BCI) devices, bringing science fiction to life. Sessions on Deep Tech Entrepreneurship, Inventive Problem Solving, Business Planning, and Storytelling combined creativity with practical impact, while workshops on Drone Theory and Sustainability added layers of modern relevance to the learning journey. The 'My Idea for Change' Competition once again became the stage for students to transform their ideas into tangible, socially driven ventures.",
      immersiveExperiences:
        "Beyond the sessions, participants explored the heart of Delhi, from the Rashtrapati Bhavan and the iconic India Gate in breezy winter evenings to the Central Library and Workshops at IIT Delhi, where innovation thrives daily. For many, this was their first glimpse into the world where tradition and technology coexist, a symbol of how India's youth can lead the future through both heritage and innovation.",
      communityBuilding:
        "What made YCB December 2023 truly special was its energy, the warmth of winter evenings filled with music, art, and laughter. Participants bonded over talent nights, dance, music, and movie screenings, and informal dialogues with young changemakers. Every lunch and dinner turned into a networking exchange of dreams, ideas, and collaboration. By the end of the week, what started as a camp had transformed into a vibrant ecosystem of friendships, inspiration, and shared purpose.",
      conclusion:
        "YCB December 2023 proved that changemaking isn't seasonal, it's a mindset. Even in the coldest Delhi winter, the spark of innovation and purpose burned brighter than ever.",
    },

    galleryImages: [
      {
        src: s2_gallery_1.src,
        alt: "YCB Season 2 - Event moment 1",
      },
      {
        src: s2_gallery_2.src,
        alt: "YCB Season 2 - Event moment 2",
      },
      {
        src: s2_gallery_3.src,
        alt: "YCB Season 2 - Event moment 3",
      },
      {
        src: s2_gallery_4.src,
        alt: "YCB Season 2 - Event moment 4",
      },
      {
        src: s2_gallery_5.src,
        alt: "YCB Season 2 - Event moment 5",
      },
      {
        src: s2_gallery_6.src,
        alt: "YCB Season 2 - Event moment 6",
      },
      {
        src: s2_gallery_7.src,
        alt: "YCB Season 2 - Event moment 7",
      },
      {
        src: s2_gallery_8.src,
        alt: "YCB Season 2 - Event moment 8",
      },
      {
        src: s2_gallery_9.src,
        alt: "YCB Season 2 - Event moment 9",
      },
    ],

    winningIdeas: [
      {
        title: "EcoPads Collective",
        description:
          "Turning discarded fabric into sustainable, affordable, and eco-friendly menstrual pads.",
        team: "Nishtha Agnihotri, Piyush Paul, Siddhant Dhunna, Siddhi Jairath",
      },
      {
        title: "Filtread",
        description:
          "Developing a device that captures microplastics released from car tires, reducing air pollution and promoting cleaner cities.",
        team: "Avirat Jain, Ayaan Sharma, Rahul Setia",
      },
    ],

    testimonials: [
      {
        quote:
          "When I think of YCB, I think of growth, the kind that transforms you from within. The workshops gave me clarity, the mentors gave me direction, and the community gave me belonging. It's not just a bootcamp; it's a movement that stays with you.",
        author: "Aanya Navin",
        location: "Tamil Nadu",
      },
      {
        quote:
          "From late-night reflections to heated brainstorming sessions, YCB was an experience that shaped my sense of purpose. The mentors' stories made me want to chase my passions fearlessly, while the activities helped me understand how innovation and impact can go hand in hand.",
        author: "Rahul Setia",
        location: "Chandigarh",
      },
      {
        quote:
          "YCB felt like stepping into a world where imagination met purpose. From learning about AI to sharing ideas with like-minded changemakers, every moment was filled with inspiration. It's where I stopped doubting myself and started believing that I could actually build something meaningful.",
        author: "Siddhi Jairath",
        location: "Delhi",
      },
    ],

    // impact: {
    //   projectsStarted: 85,
    //   clubsFormed: 15,
    //   diversityStats: {
    //     genderBalance: "52% female, 48% male",
    //     ruralUrban: "42% rural, 58% urban",
    //   },
    //   initiatives: [
    //     "Proved changemaking isn't seasonal, it's a mindset",
    //     "Created a vibrant ecosystem of friendships and collaboration",
    //     "Innovation and purpose burned bright through Delhi winter",
    //   ],
    // },
  },

  "YCB Season 3": {
    year: "2024",
    season: "June 2024",
    name: "YCB 2024 - Summer Edition",
    status: "completed",
    location: "IIT Delhi",
    participants: 41,
    states: 7,
    schools: 15,
    expectedParticipants: 60,
    dates: "June 2024",
    tagline:
      "Exploring the intersections of technology, creativity, and social impact.",
    registrationOpen: false,
    groupPhoto: s3_group.src,
    comingSoonImage: s3_group.src,

    highlights: {
      keynotes: [
        "Dr. Ritesh Malik",
        "Vaasvi Srivastava",
        "Prof. Sonia Baloni Ray",
        "Dr. Sapna Yadav",
        "Prof. Anmol Srivastava",
        "Prof. Pravesh Biyani",
        "Sanjeev Bikhchandani",
        "Yashveer Singh",
        "Tanmay Nag",
        "Dr. Sommya Bansal",
      ],
      workshops: [
        "Design Thinking for Social Innovation",
        "Product Innovation and Unique Value Proposition",
        "Building Impactful Businesses",
        "Cognitive Approaches to Learning",
        "AI Concepts",
      ],
      visits: [
        "Rashtrapati Bhavan",
        "Prime Minister Museum",
        "IIT Delhi Central Library and Workshops",
      ],
      activities: [
        "Talent Nights",
        "Music Evenings",
        "Informal Dialogues",
        "My Idea for Change Competition",
      ],
    },

    narrativeContent: {
      intro:
        "YCB June 2024 marked another exciting chapter in our journey of shaping young changemakers. Over an intensive week, students explored the intersections of technology, creativity, and social impact, gaining both practical skills and the confidence to lead change. This edition was designed to expand horizons, spark curiosity, and nurture the entrepreneurial mindset in every participant.",
      visionaryLeadership:
        "The bootcamp featured engaging sessions with a diverse set of thought leaders who inspired participants to dream big and act boldly. The week opened with the Inaugural Session on Technology, Innovation & Entrepreneurship, followed by sessions on cognitive psychology, creativity, and inventive problem-solving. Distinguished speakers like Dr. Ritesh Malik, Vaasvi Srivastava, Prof. Sonia Baloni Ray, Dr. Sapna Yadav, Prof. Anmol Srivastava, Prof. Pravesh Biyani, and Sanjeev Bikhchandani guided students in understanding innovation, product development, and the principles of social impact. The last day featured guests Yashveer Singh, Tanmay Nag, and Dr. Sommya Bansal, who graced the 'My Idea for Change' Competition, sharing insights and encouragement while judging participants' innovative solutions.",
      handsOnLearning:
        "Participants engaged in practical, immersive workshops that combined creativity with strategy. Sessions included Design Thinking for Social Innovation, Product Innovation and Unique Value Proposition, and building impactful businesses, equipping students to translate ideas into action. They also explored cognitive approaches to learning and problem-solving and experimented with AI concepts, gaining hands-on understanding of emerging technologies. The combination of interactive workshops and guided mentorship encouraged students to ideate, collaborate, and implement solutions confidently.",
      immersiveExperiences:
        "Beyond the classroom, students explored spaces that inspire curiosity and innovation. Visits to Rashtrapati Bhavan, Prime Minister Museum, and the IIT Delhi central library and workshops provided unique insights into governance, research, and India's innovation ecosystem. These excursions helped participants connect their theoretical learnings with real-world applications, fostering a holistic understanding of how technology and creativity can address societal challenges.",
      communityBuilding:
        "Evenings at YCB were filled with rich interactions and creative experiences. From talent nights and music evenings to informal dialogues with mentors and changemakers, every activity strengthened the sense of community. Participants bonded through dance, networking over meals, and spontaneous conversations, building friendships and networks that extend beyond the bootcamp.",
      conclusion:
        "YCB June 2024 exemplified the power of experiential learning, visionary guidance, and a supportive community. Students not only honed skills in innovation, entrepreneurship, and technology but also discovered the confidence and clarity to become changemakers in their own communities.",
    },

    galleryImages: [
      {
        src: s3_gallery_1.src,
        alt: "YCB Season 3 - Event moment 1",
      },
      {
        src: s3_gallery_2.src,
        alt: "YCB Season 3 - Event moment 2",
      },
      {
        src: s3_gallery_3.src,
        alt: "YCB Season 3 - Event moment 3",
      },
      {
        src: s3_gallery_4.src,
        alt: "YCB Season 3 - Event moment 4",
      },
      {
        src: s3_gallery_5.src,
        alt: "YCB Season 3 - Event moment 5",
      },
      {
        src: s3_gallery_6.src,
        alt: "YCB Season 3 - Event moment 6",
      },
      {
        src: s3_gallery_7.src,
        alt: "YCB Season 3 - Event moment 7",
      },
      {
        src: s3_gallery_8.src,
        alt: "YCB Season 3 - Event moment 8",
      },
      {
        src: s3_gallery_9.src,
        alt: "YCB Season 3 - Event moment 9",
      },
      {
        src: s3_gallery_10.src,
        alt: "YCB Season 3 - Event moment 10",
      },
      {
        src: s3_gallery_11.src,
        alt: "YCB Season 3 - Event moment 11",
      },
      {
        src: s3_gallery_12.src,
        alt: "YCB Season 3 - Event moment 12",
      },
    ],

    winningIdeas: [
      {
        title: "EcoPreneurs",
        description:
          "Reviving rural economies through sustainable entrepreneurship and digital empowerment.",
        team: "Amirtha Varshini, Ishita Porwal, Maaya Madhavan, Savar Bhatia",
      },
      {
        title: "Kuber",
        description:
          "Empowering rural communities through accessible financial literacy and smart investment learning.",
        team: "Arya Sanjey Kumaraguru, Kashvi Garg, Kunal Aiyer, Sachitha S R",
      },
    ],

    testimonials: [
      {
        quote:
          "The 'My Idea for Change' challenge was one of the most empowering moments of my life. Presenting an idea that mattered to me, and being heard, gave me confidence I'd never felt before. YCB helped me find my voice as a changemaker.",
        author: "Kunal Aiyer",
        location: "Gujarat",
      },
      {
        quote:
          "The Young Changemakers Bootcamp was truly a transformative experience. Spending an entire week on the IIT Delhi campus, surrounded by bright minds and mentors, was incredibly inspiring. Working with 9th graders, we built a community hydroponic–aeroponic farming model. The hands-on mentorship, teamwork, and diverse ideas reshaped how I see leadership, impact, and turning concepts into real solutions.",
        author: "Jatin Chutani",
        location: "Delhi",
      },
      {
        quote:
          "YCB taught me that changemaking isn't a one-time act, it's a mindset you live with. The sessions helped me connect my interests with impact, while the friendships I made became my support system for every challenge I've faced since then.",
        author: "Dev Shah",
        location: "Gujarat",
      },
    ],

    // impact: {
    //   projectsStarted: 90,
    //   clubsFormed: 18,
    //   diversityStats: {
    //     genderBalance: "51% female, 49% male",
    //     ruralUrban: "43% rural, 57% urban",
    //   },
    //   initiatives: [
    //     "Students honed skills in innovation, entrepreneurship, and technology",
    //     "Participants discovered confidence and clarity to become changemakers",
    //     "Power of experiential learning exemplified",
    //   ],
    // },
  },

  "YCB Season 4": {
    year: "2024",
    season: "December 2024",
    name: "YCB 2024 - Winter Edition",
    status: "completed",
    location: "IIT Delhi",
    participants: 41,
    states: 7,
    schools: 12,
    expectedParticipants: 65,
    dates: "December 2024",
    tagline:
      "A powerful convergence of innovation, creativity, and collaboration.",
    registrationOpen: false,
    groupPhoto: s4_group.src,
    comingSoonImage: s4_group.src,

    highlights: {
      keynotes: [
        "Prof. Ganesh Bagler",
        "Prof. Payel Mukherjee",
        "Dr. Sapna Yadav",
        "Prof. Pravesh Biyani",
        "Yashveer Singh",
        "Pragya Vats",
        "Dr. Sommya Bansal",
      ],
      workshops: [
        "Critical Thinking for Leadership",
        "Creativity, Innovation & Inventive Problem Solving",
        "Product Innovation & Unique Value Proposition",
        "Art of Storytelling",
        "Business Plan Workshop",
        "Expressive Art Workshop",
      ],
      visits: [
        "Rashtrapati Bhavan",
        "Prime Minister's Museum",
        "IIT Delhi Central Library and Workshops",
      ],
      activities: [
        "Informal Dialogues with Young Changemakers",
        "Talent Nights",
        "Music and Dance Performances",
        "My Idea for Change Competition",
      ],
    },

    narrativeContent: {
      intro:
        "YCB December 2024 was a powerful convergence of innovation, creativity, and collaboration, where young changemakers from across India came together with purpose to reimagine what's possible.",
      visionaryLeadership:
        "The winter edition brought together some of India's leading minds who shared powerful insights on changemaking. From Prof. Ganesh Bagler and Prof. Payel Mukherjee's thought-provoking sessions on innovation and technology to Dr. Sapna Yadav and Prof. Pravesh Biyani's explorations into problem-solving and leadership, each interaction sparked new ideas. The finale featured the inspiring trio of Yashveer Singh, Pragya Vats, and Dr. Sommya Bansal, who shared their journeys and judged the 'My Idea for Change' competition, reminding students that true leadership is rooted in empathy, resilience, and purpose.",
      handsOnLearning:
        "Workshops at YCB December 2024 were designed to challenge, inspire, and empower. Sessions on Critical Thinking for Leadership equipped students with frameworks to navigate complexity, while Creativity, Innovation & Inventive Problem Solving helped them think beyond conventional boundaries. Participants explored Product Innovation & Unique Value Proposition, honed their communication skills through the Art of Storytelling, and learned to build sustainable ventures through the Business Plan Workshop. The Expressive Art Workshop reminded everyone that creativity is as important as logic when solving the world's toughest challenges. Each session was hands-on, collaborative, and deeply engaging.",
      immersiveExperiences:
        "Learning extended far beyond lecture halls as students explored iconic spaces that tell stories of India's past, present, and future. Visits to Rashtrapati Bhavan, the Prime Minister's Museum, and the IIT Delhi Central Library and Workshops gave students a glimpse into governance, history, and cutting-edge research. These experiences connected abstract ideas to tangible realities, reminding participants that changemaking is as much about understanding the world as it is about changing it.",
      communityBuilding:
        "As always, the heart of YCB lay in its people. From informal dialogues with young changemakers and talent nights filled with laughter and applause to music and dance performances that brought cultures together, every moment was designed to build lasting bonds. Shared meals turned into think tanks, and late-night conversations turned into lifelong friendships. By the end of the week, participants weren't just leaving with skills and knowledge, they were leaving as part of a community.",
      conclusion:
        "YCB December 2024 was a celebration of curiosity, courage, and community. It reminded us all that changemaking isn't only about ideation, but execution. It's not only about dreaming, but doing. And most importantly, it reaffirmed YCB's belief in the power of young minds to imagine and build a better world.",
    },

    galleryImages: [
      {
        src: s4_gallery_1.src,
        alt: "YCB Season 4 - Event moment 1",
      },
      {
        src: s4_gallery_2.src,
        alt: "YCB Season 4 - Event moment 2",
      },
      {
        src: s4_gallery_3.src,
        alt: "YCB Season 4 - Event moment 3",
      },
      {
        src: s4_gallery_4.src,
        alt: "YCB Season 4 - Event moment 4",
      },
      {
        src: s4_gallery_5.src,
        alt: "YCB Season 4 - Event moment 5",
      },
      {
        src: s4_gallery_6.src,
        alt: "YCB Season 4 - Event moment 6",
      },
      {
        src: s4_gallery_7.src,
        alt: "YCB Season 4 - Event moment 7",
      },
      {
        src: s4_gallery_8.src,
        alt: "YCB Season 4 - Event moment 8",
      },
      {
        src: s4_gallery_9.src,
        alt: "YCB Season 4 - Event moment 9",
      },
      {
        src: s4_gallery_10.src,
        alt: "YCB Season 4 - Event moment 10",
      },
      {
        src: s4_gallery_11.src,
        alt: "YCB Season 4 - Event moment 11",
      },
      {
        src: s4_gallery_12.src,
        alt: "YCB Season 4 - Event moment 12",
      },
    ],

    winningIdeas: [
      {
        title: "ElderEase",
        description:
          "Making elder care accessible through smart, affordable, and adaptive bedding solutions.",
        team: "Kanishk Das, Mohammad Saad, Sarah Taneja, Tanu Singh",
      },
      {
        title: "EcoPack",
        description:
          "Turning everyday waste into eco-friendly packaging for a cleaner tomorrow.",
        team: "Alveerah Bashir, Divyanshu Yadav, Kisna Garg, Rudra Kothiyal",
      },
    ],

    testimonials: [
      {
        quote:
          "The best part about YCB was how real it felt. The mentors didn't talk about change theoretically; they showed us what it looks like in action. I learned how passion can turn into purpose, and purpose into something that truly helps people.",
        author: "Allu Sairuchi Reddy",
        location: "Telangana",
      },
      {
        quote:
          "YCB showed me what learning outside classrooms truly feels like. The exposure visits, team activities, and dialogues pushed me out of my comfort zone. I learned to collaborate, to listen deeply, and to think differently, lessons that no textbook could have given.",
        author: "Vanshika Jain",
        location: "Karnataka",
      },
      {
        quote:
          "Changemaking isn't about doing big things; it's about starting small with intention. That's what YCB taught me. Every day at the bootcamp reminded me that innovation begins with curiosity, empathy, and courage; and I've carried that mindset with me ever since.",
        author: "Sridaran Ishanth",
        location: "Tamil Nadu",
      },
    ],

    // impact: {
    //   projectsStarted: 95,
    //   clubsFormed: 20,
    //   diversityStats: {
    //     genderBalance: "53% female, 47% male",
    //     ruralUrban: "44% rural, 56% urban",
    //   },
    //   initiatives: [
    //     "Celebration of curiosity, courage, and community",
    //     "Students learned that changemaking isn't only about ideation, but execution",
    //     "Reaffirmed YCB's belief in the power of young minds",
    //   ],
    // },
  },

  "YCB Season 5": {
    year: "2025",
    season: "June 2025",
    name: "YCB 2025 - Summer Edition",
    status: "completed",
    location: "IIT Delhi",
    participants: 50,
    states: 9,
    schools: 18,
    expectedParticipants: 70,
    dates: "June 2025",
    tagline:
      "A defining milestone celebrating five transformative cycles of learning, innovation, and community.",
    registrationOpen: false,
    groupPhoto: s5_group.src,
    comingSoonImage: s5_group.src,

    highlights: {
      keynotes: [
        "Dr. Rishi Mohan Bhatnagar",
        "Ajai Chowdhary",
        "Prof. Aheli Choudhary",
        "Prof. Pragma Kaur",
        "Sagarika Deka",
        "Prof. Ganesh Bagler",
        "Yashveer Singh",
        "Meenakshi Lekhi",
        "Ojasvi Gupta",
      ],
      workshops: [
        "Design Thinking and Problem Validation",
        "AI, Machine Learning, and ChatGPT",
        "Storytelling",
        "Creativity",
        "Business Canvas Modelling",
        "Introduction to Financial Concepts",
        "Career Counselling Dialogue",
      ],
      visits: [
        "Rashtrapati Bhavan",
        "National Gallery of Modern Art",
        "IIT Delhi",
        "IIIT Delhi Innovation and Incubation Centre",
        "Medical Cobotix Centre",
        "ECE Labs",
      ],
      activities: [
        "Talent Nights",
        "Music Evenings",
        "Informal Dialogues with Mentors",
        "My Idea for Change Competition",
      ],
    },

    narrativeContent: {
      intro:
        "YCB June 2025 marked a defining milestone, celebrating five transformative cycles of learning, innovation, and community. This edition brought together 70 changemakers from across India to reimagine the future and turn ideas into meaningful impact.",
      visionaryLeadership:
        "The fifth edition featured a stellar lineup of visionaries whose sessions challenged and inspired in equal measure. From Dr. Rishi Mohan Bhatnagar's powerful inaugural address and Ajai Chowdhary's insights into entrepreneurship to Prof. Aheli Choudhary, Prof. Pragma Kaur, and Sagarika Deka's sessions on innovation, leadership, and sustainability, every moment expanded students' worldviews. Prof. Ganesh Bagler brought his unique perspective on computational thinking, while Yashveer Singh returned to share how the YCB alumni network is creating real-world change. The finale was graced by Meenakshi Lekhi and Ojasvi Gupta, whose presence added gravitas and inspiration to the 'My Idea for Change' competition, reminding everyone that changemaking is a collective responsibility.",
      handsOnLearning:
        "Participants dove deep into the skills and mindsets needed to lead change in a complex world. Sessions on Design Thinking and Problem Validation taught students to approach challenges systematically, while workshops on AI, Machine Learning, and ChatGPT explored the potential and ethics of emerging technologies. The Storytelling and Creativity workshops reminded participants that communication and imagination are as vital as technical skills. Business Canvas Modelling and Introduction to Financial Concepts gave students practical tools to build sustainable ventures, while the Career Counselling Dialogue offered personalized guidance for navigating futures filled with possibility. Every workshop was interactive, challenging, and deeply relevant.",
      immersiveExperiences:
        "Beyond classrooms and conference halls, YCB June 2025 participants explored spaces where culture meets innovation. From the grandeur of Rashtrapati Bhavan and the artistry at the National Gallery of Modern Art to the cutting-edge labs at IIT Delhi and IIIT Delhi's Innovation and Incubation Centre, every visit sparked curiosity. Seeing the Medical Cobotix Centre and exploring ECE Labs showed students the frontiers of technology and how research translates into impact. These experiences grounded their learning in reality and reminded them that changemaking is built on understanding what already exists.",
      communityBuilding:
        "As with every edition, the magic of YCB lived in its people and moments. From talent nights showcasing hidden gifts and music evenings that united cultures to informal dialogues with mentors that turned into mentorship relationships, every interaction added depth to the experience. Participants bonded over shared dreams, laughed over meals, and built networks that will last a lifetime. By the end of the week, they weren't just peers, they were a community bound by purpose and friendship.",
      conclusion:
        "YCB June 2025 became more than a bootcamp; it became a movement. As the fifth edition, it stood as proof that when young minds come together with vision, tools, and community, they don't just imagine a better world, they begin building it. It was a reminder that changemaking is not a destination, it's a way of life.",
    },

    galleryImages: [
      {
        src: s5_gallery_1.src,
        alt: "YCB Season 5 - Event moment 1",
      },
      {
        src: s5_gallery_2.src,
        alt: "YCB Season 5 - Event moment 2",
      },
      {
        src: s5_gallery_3.src,
        alt: "YCB Season 5 - Event moment 3",
      },
      {
        src: s5_gallery_4.src,
        alt: "YCB Season 5 - Event moment 4",
      },
      {
        src: s5_gallery_5.src,
        alt: "YCB Season 5 - Event moment 5",
      },
      {
        src: s5_gallery_6.src,
        alt: "YCB Season 5 - Event moment 6",
      },
      {
        src: s5_gallery_7.src,
        alt: "YCB Season 5 - Event moment 7",
      },
      {
        src: s5_gallery_8.src,
        alt: "YCB Season 5 - Event moment 8",
      },
      {
        src: s5_gallery_9.src,
        alt: "YCB Season 5 - Event moment 9",
      },
      {
        src: s5_gallery_10.src,
        alt: "YCB Season 5 - Event moment 10",
      },
      {
        src: s5_gallery_11.src,
        alt: "YCB Season 5 - Event moment 11",
      },
      {
        src: s5_gallery_12.src,
        alt: "YCB Season 5 - Event moment 12",
      },
      {
        src: s5_gallery_13.src,
        alt: "YCB Season 5 - Event moment 13",
      },
      {
        src: s5_gallery_14.src,
        alt: "YCB Season 5 - Event moment 14",
      },
      {
        src: s5_gallery_15.src,
        alt: "YCB Season 5 - Event moment 15",
      },
      {
        src: s5_gallery_16.src,
        alt: "YCB Season 5 - Event moment 16",
      },
    ],

    winningIdeas: [
      {
        title: "BioClenz",
        description:
          "Transforming ordinary buildings into living, breathing ecosystems that restore our planet.",
        team: "Lopeka Attreja, Meghna Atapaka, Pranay Mohan, Saksham Agarwal, Suksham Ghimiray",
      },
      {
        title: "Lines of Culture",
        description:
          "Restoring inclusion's true meaning - not presence, but genuine participation.",
        team: "Adhav Kandasamy, Alok Chettri, Ayaan Mohan, Sarvagya Jagatram, Tseten Bhutia",
      },
    ],

    testimonials: [
      {
        quote:
          "What made YCB special wasn't just the sessions, it was the people. I met dreamers, doers, and believers who changed how I see the world. Every discussion and visit opened my eyes to what collaboration, empathy, and purpose can truly create together.",
        author: "Nyssha Ladha",
        location: "Sikkim",
      },
      {
        quote:
          "The YCB Bootcamp at IIT Delhi was one of the most inspiring experiences of my life. I met amazing people, learned beyond books, and truly grew in confidence and clarity. Every session pushed me to think deeper and dream bigger; it felt like a turning point for me.",
        author: "Madhav Rathi",
        location: "Gujarat",
      },
      {
        quote:
          "YCB made me realize that changemaking isn't about age, resources, or background, it's all about mindset and the courage to begin. Every speaker, mentor, and even my fellow participants inspired me in their own unique way, pushing me to think deeper and dream bigger.",
        author: "Ananya Srivastava",
        location: "Maharashtra",
      },
    ],

    // impact: {
    //   projectsStarted: 100,
    //   clubsFormed: 22,
    //   diversityStats: {
    //     genderBalance: "54% female, 46% male",
    //     ruralUrban: "45% rural, 55% urban",
    //   },
    //   initiatives: [
    //     "Fifth successful edition marking a defining milestone",
    //     "Became more than a bootcamp, it became a movement",
    //     "Reminder that changemaking is a way of life",
    //   ],
    // },
  },
};

const EditionsPage = () => {
  const [selectedEdition, setSelectedEdition] = useState("YCB Season 5");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const editions = Object.keys(editionsData);
  const currentEdition =
    editionsData[selectedEdition as keyof typeof editionsData];

  // Close dropdown when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Render upcoming edition
  if (currentEdition.status === "upcoming") {
    return (
      <div className="relative overflow-x-hidden">
        {/* Hero Section for Upcoming Edition */}
        <section className="relative min-h-screen overflow-hidden bg-[#050a30]">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(${currentEdition.comingSoonImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a30] via-[#050a30]/80 to-[#050a30]/60" />

          <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
            {/* Edition Selector */}
            <div className="pointer-events-auto absolute top-24 right-4 z-50 sm:right-6 lg:right-8">
              <div className="relative" ref={dropdownRef}>
                <button
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Select edition"
                  className="flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 font-medium text-[#050a30] text-xs shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                >
                  <Calendar className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-base">
                    {selectedEdition}
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 sm:h-5 sm:w-5 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    aria-label="Edition options"
                    className="absolute top-full right-0 z-50 mt-2 w-full min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg sm:min-w-[200px] sm:rounded-xl"
                    role="listbox"
                  >
                    <div className="py-1 sm:py-2">
                      {editions.map((edition) => (
                        <button
                          aria-selected={selectedEdition === edition}
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left font-medium text-xs transition-all duration-200 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm ${
                            selectedEdition === edition
                              ? "bg-[#050a30] text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                          }`}
                          key={edition}
                          onClick={() => {
                            setSelectedEdition(edition);
                            setIsDropdownOpen(false);
                          }}
                          role="option"
                          type="button"
                        >
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          {edition}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex h-full min-h-screen items-center">
              <div className="w-full py-20 lg:py-32">
                <BlurFade delay={0.4} key={`hero-content-${selectedEdition}`}>
                  <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-6 sm:ml-4 lg:ml-8 lg:max-w-3xl lg:space-y-8 xl:max-w-4xl">
                    <div className="inline-block rounded-lg bg-[#FFD700]/20 px-4 py-2 font-semibold text-[#FFD700] text-sm">
                      COMING SOON
                    </div>

                    <h1 className="font-bold text-3xl text-white leading-tight md:text-4xl lg:text-6xl">
                      {currentEdition.name}
                    </h1>

                    <p className="text-gray-200 text-xl lg:text-2xl">
                      {currentEdition.tagline}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-lg text-white">
                        <MapPin className="h-6 w-6 text-[#FFD700]" />
                        <span>{currentEdition.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg text-white">
                        <Calendar className="h-6 w-6 text-[#FFD700]" />
                        <span>{currentEdition.dates}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg text-white">
                        <Users className="h-6 w-6 text-[#FFD700]" />
                        <span>
                          {currentEdition.expectedParticipants} Expected
                          Participants
                        </span>
                      </div>
                    </div>

                    {currentEdition.registrationOpen && (
                      <div className="flex gap-4">
                        <button
                          className="rounded-lg bg-[#FFD700] px-8 py-4 font-bold text-[#050a30] transition-all duration-200 hover:scale-105 hover:bg-[#FFD700]/90"
                          type="button"
                        >
                          Register Your Interest
                        </button>
                        <button
                          className="rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#050a30]"
                          type="button"
                        >
                          Learn More
                        </button>
                      </div>
                    )}
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Render completed edition
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section - Edition Overview */}
      <section className="relative min-h-screen overflow-hidden bg-[#050a30]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url(${currentEdition.groupPhoto})` }}
        />
        {/* <div className="absolute inset-0 bg-black/30" /> */}
        {/* Enhanced gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] from-[0%] via-[#000000cc] via-[35%] to-[#00000066] to-[70%] opacity-90" />

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Edition Selector */}
          <div className="pointer-events-auto absolute top-24 right-4 z-50 sm:right-6 lg:right-8">
            <div className="relative" ref={dropdownRef}>
              <button
                aria-expanded={isDropdownOpen}
                aria-haspopup="listbox"
                aria-label="Select edition"
                className="flex items-center gap-2 rounded-lg bg-[#050a30] px-3 py-1.5 font-medium text-white text-xs shadow-lg transition-all duration-200 hover:bg-[#050a30]/90 focus:outline-none focus:ring-2 focus:ring-[#050a30]/20 sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button"
              >
                <Calendar className="h-3.5 w-3.5 text-white sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-base">{selectedEdition}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-white transition-transform duration-200 sm:h-5 sm:w-5 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  aria-label="Edition options"
                  className="absolute top-full right-0 z-50 mt-2 w-full min-w-[160px] rounded-lg border border-gray-200 bg-white shadow-lg sm:min-w-[200px] sm:rounded-xl"
                  role="listbox"
                >
                  <div className="py-1 sm:py-2">
                    {editions.map((edition) => (
                      <button
                        aria-selected={selectedEdition === edition}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left font-medium text-xs transition-all duration-200 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm ${
                          selectedEdition === edition
                            ? "bg-[#050a30] text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                        }`}
                        key={edition}
                        onClick={() => {
                          setSelectedEdition(edition);
                          setIsDropdownOpen(false);
                        }}
                        role="option"
                        type="button"
                      >
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        {edition}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex h-full min-h-screen items-center">
            <div className="w-full py-20 lg:py-32">
              <BlurFade delay={0.4} key={`hero-content-${selectedEdition}`}>
                <div className="ml-0 flex max-w-2xl flex-col justify-center space-y-6 sm:ml-4 lg:ml-8 lg:max-w-3xl lg:space-y-8 xl:max-w-4xl">
                  <h1 className="font-bold text-3xl text-white leading-tight md:text-4xl lg:text-6xl">
                    {currentEdition.name}
                  </h1>

                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-extrabold text-transparent">
                    <p className="text-[#FFD700] text-xl lg:text-2xl">
                      {currentEdition.tagline}
                    </p>
                  </span>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium text-sm">Location</span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.location}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <Users className="h-5 w-5" />
                        <span className="font-medium text-sm">
                          Participants
                        </span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.participants}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <Globe className="h-5 w-5" />
                        <span className="font-medium text-sm">States</span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.states}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <GraduationCap className="h-5 w-5" />
                        <span className="font-medium text-sm">Schools</span>
                      </div>
                      <p className="font-bold text-2xl text-white">
                        {currentEdition.schools}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative w-full bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Highlights Section - Article Style */}
            <BlurFade delay={0.2} key={`highlights-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Edition{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Highlights
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  A week of transformative experiences, learning, and
                  collaboration
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg lg:p-12">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {currentEdition.narrativeContent ? (
                    <>
                      <p className="mb-6 text-gray-800 text-xl leading-relaxed">
                        {currentEdition.narrativeContent.intro}
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-blue-100 p-2">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        Visionary Leadership
                      </h3>
                      <p className="mb-6">
                        {currentEdition.narrativeContent.visionaryLeadership}
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-green-100 p-2">
                          <Lightbulb className="h-6 w-6 text-green-600" />
                        </div>
                        Hands-On Learning
                      </h3>
                      <p className="mb-6">
                        {currentEdition.narrativeContent.handsOnLearning}
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-purple-100 p-2">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        Immersive Experiences
                      </h3>
                      <p className="mb-6">
                        {currentEdition.narrativeContent.immersiveExperiences}
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-orange-100 p-2">
                          <Heart className="h-6 w-6 text-orange-600" />
                        </div>
                        Community Building
                      </h3>
                      <p className="mb-6">
                        {currentEdition.narrativeContent.communityBuilding}
                      </p>

                      <div className="mt-8 rounded-lg bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                        <p className="font-semibold text-[#050a30] text-lg">
                          {currentEdition.narrativeContent.conclusion}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="mb-6 text-gray-800 text-xl leading-relaxed">
                        {selectedEdition} was a remarkable convergence of
                        inspiration, innovation, and impact, bringing together
                        passionate young changemakers for an intensive week of
                        learning and collaboration.
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-blue-100 p-2">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        Visionary Leadership
                      </h3>
                      <p className="mb-6">
                        The program featured inspiring keynote sessions from
                        distinguished speakers who shared their transformative
                        journeys. Participants had the privilege of learning
                        from{" "}
                        {currentEdition.highlights.keynotes
                          .slice(0, -1)
                          .join(", ")}{" "}
                        and {currentEdition.highlights.keynotes.at(-1)}, each
                        bringing unique perspectives on leadership, innovation,
                        and social impact. These sessions not only provided
                        valuable insights but also sparked meaningful
                        conversations about the role of youth in shaping our
                        collective future.
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-green-100 p-2">
                          <Lightbulb className="h-6 w-6 text-green-600" />
                        </div>
                        Hands-On Learning
                      </h3>
                      <p className="mb-6">
                        The heart of the bootcamp lay in its comprehensive
                        workshop series, designed to equip participants with
                        practical skills and innovative thinking approaches.
                        Through immersive sessions on{" "}
                        {currentEdition.highlights.workshops
                          .slice(0, -1)
                          .join(", ")}{" "}
                        and{" "}
                        {
                          currentEdition.highlights.workshops[
                            currentEdition.highlights.workshops.length - 1
                          ]
                        }
                        , participants developed critical competencies for
                        modern changemaking. These workshops emphasized
                        experiential learning, encouraging participants to apply
                        concepts immediately and collaborate across diverse
                        perspectives.
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-purple-100 p-2">
                          <MapPin className="h-6 w-6 text-purple-600" />
                        </div>
                        Immersive Experiences
                      </h3>
                      <p className="mb-6">
                        Beyond the classroom, participants embarked on
                        educational visits that provided real-world context to
                        their learning. The carefully curated visits to{" "}
                        {currentEdition.highlights.visits
                          .slice(0, -1)
                          .join(", ")}{" "}
                        and{" "}
                        {
                          currentEdition.highlights.visits[
                            currentEdition.highlights.visits.length - 1
                          ]
                        }{" "}
                        offered unique insights into governance, innovation
                        ecosystems, and India's rich heritage. These experiences
                        broadened perspectives and helped participants
                        understand the interconnected nature of social
                        challenges and solutions.
                      </p>

                      <h3 className="mb-4 flex items-center gap-3 font-bold text-[#050a30] text-xl">
                        <div className="rounded-lg bg-orange-100 p-2">
                          <Heart className="h-6 w-6 text-orange-600" />
                        </div>
                        Community Building
                      </h3>
                      <p className="mb-6">
                        The magic of {selectedEdition} extended far beyond
                        formal sessions through carefully designed
                        community-building activities. From the vibrant{" "}
                        {currentEdition.highlights.activities
                          .slice(0, -1)
                          .join(", ")}{" "}
                        to{" "}
                        {
                          currentEdition.highlights.activities[
                            currentEdition.highlights.activities.length - 1
                          ]
                        }
                        , these moments fostered deep connections among
                        participants. These informal interactions often sparked
                        the most innovative collaborations and lasting
                        friendships, creating a supportive network that
                        continues to thrive long after the program's conclusion.
                      </p>

                      <div className="mt-8 rounded-lg bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 p-6">
                        <p className="font-semibold text-[#050a30] text-lg">
                          The convergence of inspiring leadership, practical
                          learning, immersive experiences, and genuine community
                          created an environment where young changemakers could
                          truly flourish and develop the confidence to drive
                          meaningful impact in their communities.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </BlurFade>
            {/* Photo Gallery */}
            <BlurFade delay={0.3} key={`gallery-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Photo{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Gallery
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  Capturing the best moments from {selectedEdition}
                </p>
              </div>

              <Skiper images={currentEdition.galleryImages} />
            </BlurFade>
            {/* My Idea for Change Competition */}
            <BlurFade delay={0.4} key={`ideas-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Ideas
                  </span>{" "}
                  for Change
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  Top winning ideas from our innovation competition
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentEdition.winningIdeas.map((idea, index) => (
                  <div
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl"
                    key={idea.title}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] font-bold text-[#050a30] text-sm">
                        {index + 1}
                      </div>
                      <Trophy className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <h3 className="mb-3 font-bold text-[#050a30] text-lg">
                      {idea.title}
                    </h3>
                    <p className="mb-4 text-gray-700">{idea.description}</p>
                    <div className="rounded-lg bg-gray-50 px-3 py-2">
                      <p className="font-medium text-gray-600 text-sm">
                        {idea.team}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
            {/* Alumni Voices */}
            <BlurFade delay={0.5} key={`testimonials-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Alumni{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Voices
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  Hear from the changemakers of {selectedEdition}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {currentEdition.testimonials.map((testimonial) => (
                  <div
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
                    key={testimonial.author}
                  >
                    <div className="mb-4">
                      <Star className="h-6 w-6 text-[#FFD700]" />
                    </div>
                    <blockquote className="mb-4 text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-[#050a30]">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
            {/* Impact Snapshot */}
            {/*<BlurFade delay={0.6} key={`impact-${selectedEdition}`}>
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="font-bold text-4xl text-[#050a30]">
                  Impact{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                    Snapshot
                  </span>
                </h2>
                <div className="gradient-underline mx-auto mt-4" />
                <p className="mx-auto mt-6 max-w-2xl text-[#718096] text-lg">
                  The lasting change created by {selectedEdition} participants
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-indigo-50/30 p-8 shadow-lg">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Stats */}
            {/*<div className="text-center">
                    <div className="mb-2 font-bold text-4xl text-[#050a30]">
                      {currentEdition.impact.projectsStarted}%
                    </div>
                    <p className="text-gray-700">
                      Participants started projects after YCB
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mb-2 font-bold text-4xl text-[#050a30]">
                      {currentEdition.impact.clubsFormed}
                    </div>
                    <p className="text-gray-700">New clubs formed in schools</p>
                  </div>

                  <div className="text-center md:col-span-2 lg:col-span-1">
                    <div className="mb-2 font-bold text-[#050a30] text-lg">
                      Diversity
                    </div>
                    <p className="text-gray-700 text-sm">
                      {currentEdition.impact.diversityStats.genderBalance}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {currentEdition.impact.diversityStats.ruralUrban}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                    Key Initiatives Born
                  </h3>
                  <ul className="space-y-2">
                    {currentEdition.impact.initiatives.map((initiative) => (
                      <li className="flex items-start gap-3" key={initiative}>
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-[#FFD700]" />
                        <span className="text-gray-700">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade> */}
            {/* Closing Message */}
            <BlurFade delay={0.7} key={`closing-${selectedEdition}`}>
              <div className="rounded-2xl bg-gradient-to-r from-[#050a30] to-[#0a1540] p-8 text-center text-white shadow-xl lg:p-12">
                <div className="mx-auto max-w-3xl">
                  <div className="mb-4 text-4xl">✨</div>
                  <p className="text-xl leading-relaxed lg:text-2xl">
                    <strong>{selectedEdition}</strong> wasn't just a program, it
                    was a launchpad for{" "}
                    <span className="text-[#FFD700]">
                      {currentEdition.participants} young changemakers
                    </span>{" "}
                    who are now carrying their projects back into schools and
                    communities across India.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionsPage;
