"use client";

import { Users } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import AarushiKhare from "./assets_speakers/Aarushi Khare.jpeg";
import AbhiirBhalla from "./assets_speakers/Abhiir Bhalla.jpeg";
import AchintyaGhoshal from "./assets_speakers/Achintya Ghoshal.jpg";
import AdvikSingh from "./assets_speakers/Advik Singh.jpeg";
import AjaiChowdhary from "./assets_speakers/Ajai Chowdhary.jpg";
import AnugrehSehtya from "./assets_speakers/Anugreh Sehtya.webp";
import AryanJain from "./assets_speakers/Aryan Jain.jpeg";
// Static imports for mentor images
import DebjaniGhosh from "./assets_speakers/Debjani Ghosh.jpg";
import DiaMirza from "./assets_speakers/Dia Mirza.jpg";
import DrItishaNagar from "./assets_speakers/Dr. Itisha Nagar.jpeg";
import DrSapnaYadav from "./assets_speakers/Dr. Sapna Yadav.jpeg";
import HeemankVerma from "./assets_speakers/Heemank Verma.jpeg";
import JublieePatgiri from "./assets_speakers/Jubliee Patgiri.jpeg";
import JyotiSharma from "./assets_speakers/Jyoti Sharma.jpg";
import KeshavSuyal from "./assets_speakers/Keshav Suyal.jpeg";
import KulbirLamba from "./assets_speakers/Kulbir Lamba.webp";
import MalvikaMudgal from "./assets_speakers/Malvika Mudgal.jpg";
import MdAnas from "./assets_speakers/Md. Anas.png";
import MeenakshiLekhi from "./assets_speakers/Meenakshi Lekhi.jpeg";
import NehaJain from "./assets_speakers/Neha Jain.jpeg";
import OjasviGupta from "./assets_speakers/Ojasvi Gupta.jpeg";
import PawanPagaria from "./assets_speakers/Pawan Pagaria.jpg";
import PoojaKaul from "./assets_speakers/Pooja Kaul.png";
import PrabalKaurDeol from "./assets_speakers/Prabal Kaur Deol.jpeg";
import PragyaSikka from "./assets_speakers/Pragya Sikka.jpeg";
import PragyaVats from "./assets_speakers/Pragya Vats.jpeg";
import PriyanshuRatnakar from "./assets_speakers/Priyanshu Ratnakar.jpg";
import PriyaswaraBharti from "./assets_speakers/Priyaswara Bharti.jpg";
import ProfAheliChoudhary from "./assets_speakers/Prof. Aheli Choudhary.jpg";
import ProfAlokSrivastava from "./assets_speakers/Prof. Alok Srivastava.jpeg";
import ProfAnmolSrivastava from "./assets_speakers/Prof. Anmol Srivastava.jpg";
import ProfAnujGrover from "./assets_speakers/Prof. Anuj Grover.jpg";
import ProfGaneshBagler from "./assets_speakers/Prof. Ganesh Bagler.jpg";
import ProfPayelCMukherjee from "./assets_speakers/Prof. Payel C Mukherjee.jpg";
import ProfPragmaKaur from "./assets_speakers/Prof. Pragma Kaur.jpeg";
import ProfPraveshBiyani from "./assets_speakers/Prof. Pravesh Biyani.jpg";
import ProfRamgopalRao from "./assets_speakers/Prof. Ramgopal Rao.webp";
import ProfSoniaBaloniRay from "./assets_speakers/Prof. Sonia Baloni Ray.jpeg";
import ProfTapanGandhi from "./assets_speakers/Prof. Tapan Gandhi.webp";
import ProfVirendraKumarVijay from "./assets_speakers/Prof. Virendra Kumar Vijay.jpg";
import RichaGupta from "./assets_speakers/Richa Gupta.jpg";
import RishiMohanBhatnagar from "./assets_speakers/Rishi Mohan Bhatnagar.jpeg";
import RiteshMalik from "./assets_speakers/Ritesh Malik.avif";
import RJGinnie from "./assets_speakers/RJ Ginnie.jpg";
import SagarikaDeka from "./assets_speakers/Sagarika Deka.jpg";
import SangramjitMaity from "./assets_speakers/Sangramjit Maity.jpeg";
import SanjeevBikchandani from "./assets_speakers/Sanjeev Bikchandani.jpeg";
import SaurabhChaubey from "./assets_speakers/Saurabh Chaubey.jpeg";
import TanmayNag from "./assets_speakers/Tanmay Nag.jpg";
import UpasanaRavikannan from "./assets_speakers/Upasana Ravikannan.jpg";
import VaasviSrivastava from "./assets_speakers/Vaasvi Srivastava.jpg";
import YashveerSingh from "./assets_speakers/Yashveer Singh.jpeg";

// Map mentor display names to their imported images
const mentorImages: Record<string, StaticImageData> = {
  "Debjani Ghosh": DebjaniGhosh,
  "Sanjeev Bikhchandani": SanjeevBikchandani,
  "Ajai Chowdhary": AjaiChowdhary,
  "Dia Mirza": DiaMirza,
  "Meenakshi Lekhi": MeenakshiLekhi,
  "Dr. Rishi Mohan Bhatnagar": RishiMohanBhatnagar,
  "Yashveer Singh": YashveerSingh,
  "Pragya Vats": PragyaVats,
  "Dr. Ritesh Malik": RiteshMalik,
  "Malvika Mudgal": MalvikaMudgal,
  "RJ Ginnie": RJGinnie,
  "Tanmay Nag": TanmayNag,
  "Dr. Itisha Nagar": DrItishaNagar,
  "Dr. Sapna Yadav": DrSapnaYadav,
  "Prof. Sonia Baloni Ray": ProfSoniaBaloniRay,
  "Vaasvi Srivastava": VaasviSrivastava,
  "Aarushi Khare": AarushiKhare,
  "Abhiir Bhalla": AbhiirBhalla,
  "Achintya Ghoshal": AchintyaGhoshal,
  "Advik Singh": AdvikSingh,
  "Anugreh Sehtya": AnugrehSehtya,
  "Aryan Jain": AryanJain,
  "Heemank Verma": HeemankVerma,
  "Jubliee Patgiri": JublieePatgiri,
  "Prof. Jyoti Sharma": JyotiSharma,
  "Keshav Suyal": KeshavSuyal,
  "Kulbir Lamba": KulbirLamba,
  "Md. Anas": MdAnas,
  "Neha Jain": NehaJain,
  "Ojasvi Gupta": OjasviGupta,
  "Pawan Pagaria": PawanPagaria,
  "Pooja Kaul": PoojaKaul,
  "Prabal Kaur Deol": PrabalKaurDeol,
  "Pragya Sikka": PragyaSikka,
  "Priyanshu Ratnakar": PriyanshuRatnakar,
  "Priyaswara Bharti": PriyaswaraBharti,
  "Prof. Aheli Choudhary": ProfAheliChoudhary,
  "Prof. Alok Srivastava": ProfAlokSrivastava,
  "Prof. Anmol Srivastava": ProfAnmolSrivastava,
  "Prof. Anuj Grover": ProfAnujGrover,
  "Prof. Ganesh Bagler": ProfGaneshBagler,
  "Prof. Payel C Mukherjee": ProfPayelCMukherjee,
  "Prof. Pragma Kaur": ProfPragmaKaur,
  "Prof. Pravesh Biyani": ProfPraveshBiyani,
  "Prof. Ramgopal Rao": ProfRamgopalRao,
  "Prof. Tapan Gandhi": ProfTapanGandhi,
  "Prof. Virendra Kumar Vijay": ProfVirendraKumarVijay,
  "Richa Gupta": RichaGupta,
  "Sagarika Deka": SagarikaDeka,
  "Sangramjit Maity": SangramjitMaity,
  "Saurabh Chaubey": SaurabhChaubey,
  "Upasana Ravikannan": UpasanaRavikannan,
};

// Past Mentors Data (actual YCB mentors and speakers)
const speakersData = [
  {
    id: 1,
    name: "Debjani Ghosh",
    position: "Former President",
    organization: "NASSCOM",
    linkedin: "https://linkedin.com/in/debjani-ghosh",
    image: "/api/placeholder/200/200",
  },
  {
    id: 2,
    name: "Sanjeev Bikhchandani",
    position: "Founder",
    organization: "InfoEdge",
    linkedin: "https://linkedin.com/in/sanjeev-bikhchandani",
    image: "/api/placeholder/200/200",
  },
  {
    id: 3,
    name: "Ajai Chowdhary",
    position: "Co-Founder",
    organization: "HCL",
    linkedin: "https://linkedin.com/in/ajai-chowdhary",
    image: "/api/placeholder/200/200",
  },
  {
    id: 4,
    name: "Dia Mirza",
    position: "Actor",
    organization: "Environmental Activist",
    linkedin: "https://linkedin.com/in/dia-mirza",
    image: "/api/placeholder/200/200",
  },
  {
    id: 5,
    name: "Meenakshi Lekhi",
    position: "Former Union Minister",
    organization: "Member of Parliament",
    linkedin: "https://linkedin.com/in/meenakshi-lekhi",
    image: "/api/placeholder/200/200",
  },
  {
    id: 6,
    name: "Dr. Rishi Mohan Bhatnagar",
    position: "Former President",
    organization: "Lava India",
    linkedin: "https://linkedin.com/in/rishi-bhatnagar",
    image: "/api/placeholder/200/200",
  },
  {
    id: 7,
    name: "Yashveer Singh",
    position: "Global Director & Co-Founder",
    organization: "Ashoka Young Changemakers",
    linkedin: "https://linkedin.com/in/yashveer-singh",
    image: "/api/placeholder/200/200",
  },
  {
    id: 8,
    name: "Pragya Vats",
    position: "Head of Campaigns",
    organization: "Save the Children India",
    linkedin: "https://linkedin.com/in/pragya-vats",
    image: "/api/placeholder/200/200",
  },
  {
    id: 9,
    name: "Dr. Ritesh Malik",
    position: "Founder",
    organization: "Innov8",
    linkedin: "https://linkedin.com/in/ritesh-malik",
    image: "/api/placeholder/200/200",
  },
  {
    id: 10,
    name: "Malvika Mudgal",
    position: "Founder",
    organization: "Jagan Sankalp Innovation Foundation",
    linkedin: "https://linkedin.com/in/malvika-mudgal",
    image: "/api/placeholder/200/200",
  },
  {
    id: 11,
    name: "RJ Ginnie",
    position: "RJ",
    organization: "Radio City India",
    linkedin: "https://linkedin.com/in/rj-ginnie",
    image: "/api/placeholder/200/200",
  },
  {
    id: 12,
    name: "Tanmay Nag",
    position: "Founder & CEO",
    organization: "Enveave",
    linkedin: "https://linkedin.com/in/tanmay-nag",
    image: "/api/placeholder/200/200",
  },
  {
    id: 13,
    name: "Dr. Itisha Nagar",
    position: "Psychologist and Assistant Professor",
    organization: "DU",
    linkedin: "https://linkedin.com/in/itisha-nagar",
    image: "/api/placeholder/200/200",
  },
  {
    id: 14,
    name: "Dr. Sapna Yadav",
    position: "Project Director",
    organization: "SCERT Delhi",
    linkedin: "https://linkedin.com/in/sapna-yadav",
    image: "/api/placeholder/200/200",
  },
  {
    id: 15,
    name: "Prof. Sonia Baloni Ray",
    position: "SSH Department",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/sonia-baloni-ray",
    image: "/api/placeholder/200/200",
  },
  {
    id: 16,
    name: "Vaasvi Srivastava",
    position: "Co-Founder",
    organization: "Abhyantar Healing Arts",
    linkedin: "https://linkedin.com/in/vaasvi-srivastava",
    image: "/api/placeholder/200/200",
  },
  {
    id: 17,
    name: "Aarushi Khare",
    position: "Career & Wellness Coach",
    organization: "Independent",
    linkedin: "https://linkedin.com/in/aarushi-khare",
    image: "/api/placeholder/200/200",
  },
  {
    id: 18,
    name: "Abhiir Bhalla",
    position: "Environmentalist & Senior Consultant",
    organization: "PwC",
    linkedin: "https://linkedin.com/in/abhiir-bhalla",
    image: "/api/placeholder/200/200",
  },
  {
    id: 19,
    name: "Achintya Ghoshal",
    position: "Youth Environmentalist",
    organization: "Environmental Advocate",
    linkedin: "https://linkedin.com/in/achintya-ghoshal",
    image: "/api/placeholder/200/200",
  },
  {
    id: 20,
    name: "Advik Singh",
    position: "Founder",
    organization: "Chhalaang Foundation",
    linkedin: "https://linkedin.com/in/advik-singh",
    image: "/api/placeholder/200/200",
  },
  {
    id: 21,
    name: "Anugreh Sehtya",
    position: "Founder",
    organization: "Serenico Labs",
    linkedin: "https://linkedin.com/in/anugreh-sehtya",
    image: "/api/placeholder/200/200",
  },
  {
    id: 22,
    name: "Aryan Jain",
    position: "Founder",
    organization: "Robify",
    linkedin: "https://linkedin.com/in/aryan-jain",
    image: "/api/placeholder/200/200",
  },
  {
    id: 23,
    name: "Dr. Sommya Bansal",
    position: "Doctor & Senior Advisor",
    organization: "TOH",
    linkedin: "https://linkedin.com/in/sommya-bansal",
    image: "/api/placeholder/200/200",
  },
  {
    id: 24,
    name: "Heemank Verma",
    position: "Entrepreneur",
    organization: "Independent",
    linkedin: "https://linkedin.com/in/heemank-verma",
    image: "/api/placeholder/200/200",
  },
  {
    id: 25,
    name: "Jubliee Patgiri",
    position: "Marketing Leader",
    organization: "Independent",
    linkedin: "https://linkedin.com/in/jubliee-patgiri",
    image: "/api/placeholder/200/200",
  },
  {
    id: 27,
    name: "Keshav Suyal",
    position: "Member",
    organization: "Enactus Ramjas College",
    linkedin: "https://linkedin.com/in/keshav-suyal",
    image: "/api/placeholder/200/200",
  },
  {
    id: 28,
    name: "Kulbir Lamba",
    position: "Director of Business Development",
    organization: "Ennovent",
    linkedin: "https://linkedin.com/in/kulbir-lamba",
    image: "/api/placeholder/200/200",
  },
  {
    id: 29,
    name: "Md. Anas",
    position: "Co-Founder & CEO",
    organization: "Enord",
    linkedin: "https://linkedin.com/in/md-anas",
    image: "/api/placeholder/200/200",
  },
  {
    id: 30,
    name: "Neha Jain",
    position: "Founder",
    organization: "Project Meraki",
    linkedin: "https://linkedin.com/in/neha-jain",
    image: "/api/placeholder/200/200",
  },
  {
    id: 31,
    name: "Ojasvi Gupta",
    position: "Journalist",
    organization: "Financial Express",
    linkedin: "https://linkedin.com/in/ojasvi-gupta",
    image: "/api/placeholder/200/200",
  },
  {
    id: 32,
    name: "Pawan Pagaria",
    position: "Co-Founder",
    organization: "Karman Studio",
    linkedin: "https://linkedin.com/in/pawan-pagaria",
    image: "/api/placeholder/200/200",
  },
  {
    id: 33,
    name: "Pooja Kaul",
    position: "Founder",
    organization: "Organiko",
    linkedin: "https://linkedin.com/in/pooja-kaul",
    image: "/api/placeholder/200/200",
  },
  {
    id: 34,
    name: "Prabal Kaur Deol",
    position: "Executive",
    organization: "IIT Delhi Incubation Centre",
    linkedin: "https://linkedin.com/in/prabal-kaur-deol",
    image: "/api/placeholder/200/200",
  },
  {
    id: 35,
    name: "Pragya Sikka",
    position: "Founder",
    organization: "Friends of Toto",
    linkedin: "https://linkedin.com/in/pragya-sikka",
    image: "/api/placeholder/200/200",
  },
  {
    id: 36,
    name: "Priyanshu Ratnakar",
    position: "Entrepreneur",
    organization: "Independent",
    linkedin: "https://linkedin.com/in/priyanshu-ratnakar",
    image: "/api/placeholder/200/200",
  },
  {
    id: 37,
    name: "Priyaswara Bharti",
    position: "Founder",
    organization: "Bihar Youth for Child Rights",
    linkedin: "https://linkedin.com/in/priyaswara-bharti",
    image: "/api/placeholder/200/200",
  },
  {
    id: 38,
    name: "Prof. Aheli Choudhary",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/aheli-choudhary",
    image: "/api/placeholder/200/200",
  },
  {
    id: 39,
    name: "Prof. Alok Srivastava",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/alok-srivastava",
    image: "/api/placeholder/200/200",
  },
  {
    id: 40,
    name: "Prof. Anmol Srivastava",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/anmol-srivastava",
    image: "/api/placeholder/200/200",
  },
  {
    id: 41,
    name: "Prof. Anuj Grover",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/anuj-grover",
    image: "/api/placeholder/200/200",
  },
  {
    id: 42,
    name: "Prof. Ganesh Bagler",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/ganesh-bagler",
    image: "/api/placeholder/200/200",
  },
  {
    id: 43,
    name: "Prof. Jyoti Sharma",
    position: "Founder",
    organization: "FORCE",
    linkedin: "https://linkedin.com/in/jyoti-sharma",
    image: "/api/placeholder/200/200",
  },
  {
    id: 44,
    name: "Prof. Payel C Mukherjee",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/payel-mukherjee",
    image: "/api/placeholder/200/200",
  },
  {
    id: 45,
    name: "Prof. Pragma Kaur",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/pragma-kaur",
    image: "/api/placeholder/200/200",
  },
  {
    id: 46,
    name: "Prof. Pravesh Biyani",
    position: "Faculty",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/pravesh-biyani",
    image: "/api/placeholder/200/200",
  },
  {
    id: 47,
    name: "Prof. Ramgopal Rao",
    position: "Former Director, IIT Delhi",
    organization: "Vice Chancellor, BITS Pilani",
    linkedin: "https://linkedin.com/in/ramgopal-rao",
    image: "/api/placeholder/200/200",
  },
  {
    id: 48,
    name: "Prof. Tapan Gandhi",
    position: "Faculty",
    organization: "IIT Delhi",
    linkedin: "https://linkedin.com/in/tapan-gandhi",
    image: "/api/placeholder/200/200",
  },
  {
    id: 49,
    name: "Prof. Virendra Kumar Vijay",
    position: "IREDA Chair Professor",
    organization: "IIT Delhi",
    linkedin: "https://linkedin.com/in/virendra-vijay",
    image: "/api/placeholder/200/200",
  },
  {
    id: 50,
    name: "Richa Gupta",
    position: "Co-Founder",
    organization: "Labhya",
    linkedin: "https://linkedin.com/in/richa-gupta",
    image: "/api/placeholder/200/200",
  },
  {
    id: 51,
    name: "Sagarika Deka",
    position: "Founder",
    organization: "Maan ki Umeed",
    linkedin: "https://linkedin.com/in/sagarika-deka",
    image: "/api/placeholder/200/200",
  },
  {
    id: 52,
    name: "Sangramjit Maity",
    position: "PhD Researcher in Psychology",
    organization: "IIIT Delhi",
    linkedin: "https://linkedin.com/in/sangramjit-maity",
    image: "/api/placeholder/200/200",
  },
  {
    id: 53,
    name: "Saurabh Chaubey",
    position: "CEO",
    organization: "iHub Anubhuti Foundation, IIIT Delhi",
    linkedin: "https://linkedin.com/in/saurabh-chaubey",
    image: "/api/placeholder/200/200",
  },
  {
    id: 54,
    name: "Srikant Sharma",
    position: "Senior Physics Faculty",
    organization: "JEE",
    linkedin: "https://linkedin.com/in/srikant-sharma",
    image: "/api/placeholder/200/200",
  },
  {
    id: 55,
    name: "Upasana Ravikannan",
    position: "Founder",
    organization: "Gopaadhai",
    linkedin: "https://linkedin.com/in/upasana-ravikannan",
    image: "/api/placeholder/200/200",
  },
];

// YCB Workshop/Edition Data
const workshopData = {
  "Summer 2025": [
    { id: 1, name: "Aarav Jain", grade: "11", city: "Delhi" },
    { id: 2, name: "Aarav Tyagi", grade: "12", city: "Uttar Pradesh" },
    { id: 3, name: "Aariv Gulshan", grade: "9", city: "Haryana" },
    { id: 4, name: "Adhav Kandasamy", grade: "11", city: "Tamil Nadu" },
    { id: 5, name: "Advitiya Yadav", grade: "10", city: "Chandigarh" },
    { id: 6, name: "Adwikaa Kanodia", grade: "9", city: "Delhi" },
    { id: 7, name: "Alok Chettri", grade: "12", city: "Sikkim" },
    { id: 8, name: "Ananya Srivastava", grade: "12", city: "Maharashtra" },
    { id: 9, name: "Archana Chettri", grade: "12", city: "Sikkim" },
    { id: 10, name: "Ari Norbu", grade: "12", city: "Sikkim" },
    { id: 11, name: "Armaan Uppal", grade: "12", city: "Chandigarh" },
    { id: 12, name: "Avni Gupta", grade: "11", city: "Haryana" },
    { id: 13, name: "Ayaan Mohan", grade: "9", city: "Haryana" },
    { id: 14, name: "Derek Sachdeva", grade: "9", city: "Chandigarh" },
    { id: 15, name: "Divyank Sarda", grade: "12", city: "Sikkim" },
    { id: 16, name: "Gauransh Khurana", grade: "11", city: "New Delhi" },
    { id: 17, name: "Guhan Senthil Kumaran", grade: "9", city: "Tamil Nadu" },
    { id: 18, name: "Kalsang Barfungpa", grade: "12", city: "Sikkim" },
    { id: 19, name: "Karma Kazi", grade: "12", city: "Sikkim" },
    { id: 20, name: "Keshav Singh", grade: "10", city: "Delhi" },
    { id: 21, name: "Kiyansh Garg", grade: "11", city: "Delhi" },
    { id: 22, name: "Ladi Uttej", grade: "Others", city: "Orrisa" },
    { id: 23, name: "Lakshit Mishra", grade: "12", city: "Delhi" },
    { id: 24, name: "Lopeka Attreja", grade: "Others", city: "Haryana" },
    { id: 25, name: "Madhav Rathi", grade: "Others", city: "Gujarat" },
    { id: 26, name: "Meghna Atapaka", grade: "9", city: "Tamilnadu" },
    { id: 27, name: "Namsella Lachenpa", grade: "12", city: "Sikkim" },
    { id: 28, name: "Norbu Bhutia", grade: "12", city: "Sikkim" },
    { id: 29, name: "Nyssha Ladha", grade: "12", city: "Sikkim" },
    { id: 30, name: "Pranay Mohan", grade: "9", city: "Haryana" },
    { id: 31, name: "Pravin Naidu", grade: "12", city: "Sikkim" },
    { id: 32, name: "Ranveer Kamboj", grade: "10", city: "Delhi" },
    { id: 33, name: "Reedam Dahal", grade: "12", city: "Sikkim" },
    { id: 34, name: "Rigsel Nadik", grade: "11", city: "Sikkim" },
    { id: 35, name: "Rohan Sundas", grade: "12", city: "Sikkim" },
    { id: 36, name: "Saksham Agarwal", grade: "11", city: "Delhi" },
    { id: 37, name: "Sarvagya Jagatram", grade: "11", city: "Uttar Pradesh" },
    { id: 38, name: "Shambhavi Sharma", grade: "11", city: "Haryana" },
    { id: 39, name: "Shivaansh Sharma", grade: "10", city: "Haryana" },
    { id: 40, name: "Shrivathsan Parthasarathy", grade: "11", city: "Tamil Nadu" },
    { id: 41, name: "Siddhant Chatterjee", grade: "11", city: "Uttar Pradesh" },
    { id: 42, name: "Sohana Rizal", grade: "12", city: "Sikkim" },
    { id: 43, name: "Suksham Ghimiray", grade: "12", city: "Sikkim" },
    { id: 44, name: "Tenzing Bhutia", grade: "12", city: "Sikkim" },
    { id: 45, name: "Tseten Bhutia", grade: "12", city: "Sikkim" },
    { id: 46, name: "VARSITA V.P", grade: "9", city: "Tamil Nadu" },
    { id: 47, name: "Vir Chowdhry", grade: "11", city: "Haryana" },
    { id: 48, name: "Vitharaya Aggarwal", grade: "Others", city: "Chandigarh" },
    { id: 49, name: "Wangchuk Bhutia", grade: "12", city: "Sikkim" },
  ],
  "Winter 2024": [
    { id: 1, name: "Aarav Mallick", grade: "11", city: "Maharashtra" },
    { id: 2, name: "Aarya Rampuria", grade: "9", city: "Uttar Pradesh" },
    { id: 3, name: "Abhay Pandey", grade: "9", city: "Delhi" },
    { id: 4, name: "Allu Sairuchi Reddy", grade: "11", city: "Telangana" },
    { id: 5, name: "Alveerah Bashir", grade: "11", city: "Uttar Pradesh" },
    { id: 6, name: "Ananya Saraogi", grade: "11", city: "Delhi" },
    { id: 7, name: "Ansh Goyal", grade: "9", city: "Delhi" },
    { id: 8, name: "Arav Shinghal", grade: "9", city: "Delhi" },
    { id: 9, name: "Archisha Verma", grade: "12", city: "Gujarat" },
    { id: 10, name: "Auroneel Das", grade: "11", city: "Delhi" },
    { id: 11, name: "Bipin Gupta", grade: "11", city: "Uttar Pradesh" },
    { id: 12, name: "Chirag Kapoor", grade: "12", city: "Delhi" },
    { id: 13, name: "Devansh Bajpai", grade: "9", city: "Uttar Pradesh" },
    { id: 14, name: "Dhruv Gandhi", grade: "11", city: "Delhi" },
    { id: 15, name: "Divit Haldia", grade: "9", city: "Uttar Pradesh" },
    { id: 16, name: "Divyanshu Yadav", grade: "11", city: "Uttar Pradesh" },
    { id: 17, name: "Ishaan Sharma", grade: "9", city: "Delhi" },
    { id: 18, name: "Jeetesh Vasisth", grade: "11", city: "Delhi" },
    { id: 19, name: "Kanishk Das", grade: "9", city: "Delhi" },
    { id: 20, name: "Keshika Verma", grade: "11", city: "Delhi" },
    { id: 21, name: "Kisna Garg", grade: "9", city: "Delhi" },
    { id: 22, name: "Lakshya Tiwari", grade: "11", city: "Uttar Pradesh" },
    { id: 23, name: "Mohammad Saifi", grade: "11", city: "Delhi" },
    { id: 24, name: "Pasham Yadav", grade: "11", city: "Telangana" },
    { id: 25, name: "Ranveer Singh", grade: "9", city: "Haryana" },
    { id: 26, name: "Raunak Pahwa", grade: "9", city: "Delhi" },
    { id: 27, name: "Rudra Kothiyal", grade: "11", city: "Karnataka" },
    { id: 28, name: "Samarth Kaila", grade: "11", city: "Delhi" },
    { id: 29, name: "Sarah Taneja", grade: "11", city: "Delhi" },
    { id: 30, name: "Shaurya Maan", grade: "9", city: "Uttar Pradesh" },
    { id: 31, name: "Shloak Gupta", grade: "11", city: "Uttar Pradesh" },
    { id: 32, name: "Shivam Yadav", grade: "11", city: "Uttar Pradesh" },
    { id: 33, name: "Simranpreet Singh", grade: "11", city: "Tamil Nadu" },
    { id: 34, name: "Sourya Kusuma", grade: "9", city: "Delhi" },
    { id: 35, name: "Sridaran Ishanth", grade: "11", city: "Tamil Nadu" },
    { id: 36, name: "Syed Ahmed Husaini", grade: "11", city: "Delhi" },
    { id: 37, name: "Tanish Sharma", grade: "11", city: "Delhi" },
    { id: 38, name: "Tanu Singh", grade: "11", city: "Uttar Pradesh" },
    { id: 39, name: "Tejas Jain", grade: "11", city: "Uttar Pradesh" },
    { id: 40, name: "Vaidehi Vats", grade: "9", city: "Delhi" },
    { id: 41, name: "Vanshika Jain", grade: "10", city: "Karnataka" },
  ],
  "Summer 2024": [
    { id: 1, name: "Aathmika Suresh Kumar", grade: "9", city: "Tamil Nadu" },
    { id: 2, name: "Aarush Aggarwal", grade: "11", city: "Uttar Pradesh" },
    { id: 3, name: "Adyanth Naveenkumar", grade: "9", city: "Tamil Nadu" },
    { id: 4, name: "Akshara Ramji", grade: "9", city: "Tamil Nadu" },
    { id: 5, name: "Amirtha Manchari", grade: "10", city: "Tamil Nadu" },
    { id: 6, name: "Amirtha Varshini", grade: "10", city: "Tamil Nadu" },
    { id: 7, name: "Anshika Agrawal", grade: "12", city: "Delhi" },
    { id: 8, name: "Arsh Goyal", grade: "9", city: "Delhi" },
    { id: 9, name: "Arya Sanjey Kumaraguru", grade: "9", city: "Tamil Nadu" },
    { id: 10, name: "Ayush Chauhan", grade: "11", city: "Delhi" },
    { id: 11, name: "Bhuvi Gupta", grade: "11", city: "Delhi" },
    { id: 12, name: "Dev Shah", grade: "12+", city: "Gujarat" },
    { id: 13, name: "Hiral Kothari", grade: "9", city: "Tamil Nadu" },
    { id: 14, name: "Ishita Porwal", grade: "9", city: "Tamil Nadu" },
    { id: 15, name: "Jatin Chutani", grade: "12+", city: "Haryana" },
    { id: 16, name: "Kanishkaa R", grade: "9", city: "Tamil Nadu" },
    { id: 17, name: "Kashvi Garg", grade: "10", city: "Uttar Pradesh" },
    { id: 18, name: "Kunal Aiyer", grade: "12", city: "Gujarat" },
    { id: 19, name: "Maaya Madhavan", grade: "9", city: "Tamil Nadu" },
    { id: 20, name: "Manaswin Nagpal", grade: "9", city: "Rajasthan" },
    { id: 21, name: "Meghmalhar Bhowmick", grade: "9", city: "West Bengal" },
    { id: 22, name: "Mehreen Khanuja", grade: "12", city: "Delhi" },
    { id: 23, name: "Naisha Choudhary", grade: "11", city: "Uttar Pradesh" },
    { id: 24, name: "Navya Gopinathan", grade: "9", city: "Tamil Nadu" },
    { id: 25, name: "Navya Kautish", grade: "12+", city: "Haryana" },
    { id: 26, name: "Niyanthri Vidhyaprakash", grade: "10", city: "Tamil Nadu" },
    { id: 27, name: "Pradakshana.Kumar", grade: "9", city: "Tamil Nadu" },
    { id: 28, name: "Riddhi Balasubramaniam", grade: "11", city: "Tamil Nadu" },
    { id: 29, name: "Sachitha S R", grade: "10", city: "Tamil Nadu" },
    { id: 30, name: "Samrat Basak", grade: "10", city: "Haryana" },
    { id: 31, name: "Sanchita Dhamotharan", grade: "9", city: "Tamil Nadu" },
    { id: 32, name: "Savar Bhatia", grade: "10", city: "Haryana" },
    { id: 33, name: "Shivangi Saravanan", grade: "9", city: "Tamil Nadu" },
    { id: 34, name: "Srimathivathani B", grade: "10", city: "Tamil Nadu" },
    { id: 35, name: "Srishti Senthil Kumar", grade: "9", city: "Tamil Nadu" },
    { id: 36, name: "Tanmay Shah", grade: "9", city: "Tamil Nadu" },
    { id: 37, name: "Tarun Venkatesh", grade: "9", city: "Tamil Nadu" },
    { id: 38, name: "Tisya Gupta", grade: "11", city: "Delhi" },
    { id: 39, name: "Vidula B", grade: "9", city: "Tamil Nadu" },
    { id: 40, name: "Vijay Srinesh Kalidass", grade: "9", city: "Tamil Nadu" },
    { id: 41, name: "Vineet Desai", grade: "9", city: "Tamil Nadu" },
  ],
  "Winter 2023": [
    { id: 1, name: "Aanya Navin", grade: "11", city: "Tamil Nadu" },
    { id: 2, name: "Aasmaa Garg", grade: "9", city: "Chandigarh" },
    { id: 3, name: "Amogh Grover", grade: "10", city: "Delhi" },
    { id: 4, name: "Anurag SIngh", grade: "10", city: "Uttar Pradesh" },
    { id: 5, name: "Arav Choudhry", grade: "9", city: "Delhi" },
    { id: 6, name: "Arnav Goel", grade: "9", city: "Delhi" },
    { id: 7, name: "Arnav Nagpal", grade: "9", city: "Delhi" },
    { id: 8, name: "Avirat Jain", grade: "11", city: "Delhi" },
    { id: 9, name: "Ayaan Sharma", grade: "9", city: "Delhi" },
    { id: 10, name: "Dheeraj Sutram", grade: "12", city: "Tamil Nadu" },
    { id: 11, name: "Garvit Rustagi", grade: "9", city: "Delhi" },
    { id: 12, name: "Ghulam Qadir", grade: "10", city: "Uttar Pradesh" },
    { id: 13, name: "Kapeesh Ahuja", grade: "9", city: "Delhi" },
    { id: 14, name: "Krishang Choudhary", grade: "11", city: "Assam" },
    { id: 15, name: "Lakshay Goyal", grade: "9", city: "Chandigarh" },
    { id: 16, name: "Lakshya Yadav", grade: "11", city: "Chandigarh" },
    { id: 17, name: "Maira Singhal", grade: "10", city: "Delhi" },
    { id: 18, name: "Naman Soin", grade: "9", city: "Delhi" },
    { id: 19, name: "Nandini Nithyanandh", grade: "11", city: "Tamil Nadu" },
    { id: 20, name: "Nishtha Agnihotri", grade: "11", city: "Uttar Pradesh" },
    { id: 21, name: "Piyush Paul", grade: "11", city: "Assam" },
    { id: 22, name: "Rahul Setia", grade: "11", city: "Chandigarh" },
    { id: 23, name: "Rajjyoti Talukdar", grade: "11", city: "Assam" },
    { id: 24, name: "Reyansh Juneja", grade: "12", city: "Delhi" },
    { id: 25, name: "Ronak Jain", grade: "9", city: "Delhi" },
    { id: 26, name: "Saksham Zutshi", grade: "11", city: "Delhi" },
    { id: 27, name: "Sarthak Agarwal", grade: "11", city: "Delhi" },
    { id: 28, name: "Siddhi Jairath", grade: "10", city: "Delhi" },
    { id: 29, name: "Siddhant Dhunna", grade: "11", city: "Chandigarh" },
    { id: 30, name: "Stuti Runda", grade: "9", city: "Delhi" },
    { id: 31, name: "Suhaan Khurana", grade: "11", city: "Delhi" },
    { id: 32, name: "Sumanyu Singhal", grade: "9", city: "Delhi" },
    { id: 33, name: "Tanisha Singla", grade: "10", city: "Delhi" },
    { id: 34, name: "Vaasvi Kuthiala", grade: "9", city: "Chandigarh" },
    { id: 35, name: "Vanya Gupta", grade: "10", city: "Maharashtra" },
  ],
  "Summer 2023": [
    { id: 1, name: "Aarav Srivastava", grade: "9", city: "Delhi" },
    { id: 2, name: "Abhijay Srivastava", grade: "12", city: "Tamil Nadu" },
    { id: 3, name: "Abhyuday Mangla", grade: "11", city: "Delhi" },
    { id: 4, name: "Aditya Jain", grade: "10", city: "Delhi" },
    { id: 5, name: "Agrim Sharma", grade: "10", city: "Delhi" },
    { id: 6, name: "Anish Vasu", grade: "9", city: "Tamil Nadu" },
    { id: 7, name: "Antriksh Kaushik", grade: "12", city: "Haryana" },
    { id: 8, name: "Anubhav Dogra", grade: "9", city: "Chandigarh" },
    { id: 9, name: "Ariqa Rizwan", grade: "12", city: "Delhi" },
    { id: 10, name: "Bhavya Garodia", grade: "11", city: "Rajasthan" },
    { id: 11, name: "Chitrakshi Gupta", grade: "9", city: "Delhi" },
    { id: 12, name: "Cris Dantham Joseph", grade: "12", city: "Tamil Nadu" },
    { id: 13, name: "Devika Chopra", grade: "12", city: "Delhi" },
    { id: 14, name: "Dewank Paliwal", grade: "10", city: "Rajasthan" },
    { id: 15, name: "Diwanshu Gupta", grade: "11", city: "Delhi" },
    { id: 16, name: "Durvish Khanduja", grade: "10", city: "Haryana" },
    { id: 17, name: "Ekansh Wadhwa", grade: "11", city: "Delhi" },
    { id: 18, name: "Gaurav Kumar", grade: "10", city: "Rajasthan" },
    { id: 19, name: "Ishmeet Wadhwa", grade: "11", city: "Delhi" },
    { id: 20, name: "Jyotiraditya Ganguly", grade: "12", city: "Delhi" },
    { id: 21, name: "Kanav Gupta", grade: "11", city: "Delhi" },
    { id: 22, name: "Kavyansh Batra", grade: "9", city: "Delhi" },
    { id: 23, name: "Lakshitha Satish Kumar", grade: "12", city: "Tamil Nadu" },
    { id: 24, name: "Manasvi Paweria", grade: "12", city: "Delhi" },
    { id: 25, name: "Manvi Khurana", grade: "9", city: "Delhi" },
    { id: 26, name: "Mrinal Anand", grade: "9", city: "Chandigarh" },
    { id: 27, name: "Naavya Ahuja", grade: "9", city: "Chandigarh" },
    { id: 28, name: "Navya Nilay", grade: "11", city: "Delhi" },
    { id: 29, name: "Nishant Latiyal", grade: "11", city: "Rajasthan" },
    { id: 30, name: "Parashkar Tanwar", grade: "11", city: "Rajasthan" },
    { id: 31, name: "Parwan Siddle", grade: "11", city: "Chandigarh" },
    { id: 32, name: "Pragati Baranwal", grade: "11", city: "Delhi" },
    { id: 33, name: "Pranay Arora", grade: "11", city: "Delhi" },
    { id: 34, name: "Rehaan Thukral", grade: "12+", city: "Delhi" },
    { id: 35, name: "Rhythm Goel", grade: "12", city: "Delhi" },
    { id: 36, name: "Samriddhi Keshri", grade: "12+", city: "Bihar" },
    { id: 37, name: "Shubham Rohatgi", grade: "12", city: "Rajasthan" },
    { id: 38, name: "Siddharth Garg", grade: "9", city: "Chandigarh" },
    { id: 39, name: "Tanmay Sati", grade: "11", city: "Uttar Pradesh" },
    { id: 40, name: "Tanveer Singh", grade: "12", city: "Uttar Pradesh" },
    { id: 41, name: "Udee Gupta", grade: "9", city: "Uttar Pradesh" },
    { id: 42, name: "Vihaan Kwatra", grade: "9", city: "Delhi" },
    { id: 43, name: "Vivaan Phogat", grade: "12", city: "Delhi" },
    { id: 44, name: "Vrinda Bedi", grade: "10", city: "Chandigarh" },
    { id: 45, name: "Vyom Garg", grade: "11", city: "Delhi" },
    { id: 46, name: "Yashmeet Kaur", grade: "9", city: "Haryana" },
  ],
};

const NetworkPage = () => {
  const [activeTab, setActiveTab] = useState<"speakers" | "participants">(
    "speakers"
  );
  const [selectedWorkshop, setSelectedWorkshop] = useState("Summer 2025");
  const [showAllMentors, setShowAllMentors] = useState(false);

  const workshopYears = Object.keys(workshopData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12">
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

        <div className="relative z-10 w-full px-4 text-center sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <h1 className="mb-6 font-bold text-5xl text-[#050a30] md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Network
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Meet our distinguished speakers and talented participants who make
            the Young Changemakers Bootcamp a transformative experience.
          </p>
        </div>
      </section>

      {/* Navigation Sidebar */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0 md:w-60 lg:w-64">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-bold text-[#050a30] text-lg">
                Browse Network
              </h3>
              <div className="space-y-3">
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                    activeTab === "speakers"
                      ? "bg-soft-dark text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                  }`}
                  onClick={() => setActiveTab("speakers")}
                >
                  <Users className="h-5 w-5" />
                  Past Mentors
                </button>
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-all duration-200 ${
                    activeTab === "participants"
                      ? "bg-soft-dark text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#050a30]"
                  }`}
                  onClick={() => setActiveTab("participants")}
                >
                  <Users className="h-5 w-5" />
                  Alumni
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "speakers" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-2 font-bold text-3xl text-[#050a30]">
                    Past Mentors
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Influential leaders, innovators, and changemakers inspiring
                    our community
                  </p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {(showAllMentors
                      ? speakersData
                      : speakersData.slice(0, 10)
                    ).map((speaker) => (
                      <div
                        className="group hover:-translate-y-1 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:border-[#FFD700]/30 hover:shadow-xl"
                        key={speaker.id}
                      >
                        <div className="relative mb-4">
                          {mentorImages[speaker.name] ? (
                            <Image
                              alt={`${speaker.name}`}
                              className={`mx-auto h-20 w-20 rounded-full object-cover shadow-sm ${speaker.name === "Dr. Itisha Nagar" ? "object-top" : ""} ${speaker.name === "Prof. Jyoti Sharma" ? "object-right-top" : ""}`}
                              height={80}
                              priority={false}
                              src={mentorImages[speaker.name]}
                              width={80}
                            />
                          ) : (
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-soft-dark font-bold text-white text-xl">
                              {speaker.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <h3 className="mb-1 font-bold text-[#050a30] transition-colors group-hover:text-[#1e40af]">
                            {speaker.name}
                          </h3>
                          <p className="mb-1 font-medium text-amber-500 text-sm">
                            {speaker.position}
                          </p>
                          <p className="mb-3 text-gray-500 text-xs">
                            {speaker.organization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View More Button */}
                  {!showAllMentors && speakersData.length > 10 && (
                    <div className="mt-8 flex justify-center">
                      <button
                        className="group hover:-translate-y-1 hover-glow flex h-12 w-fit items-center justify-center gap-2 rounded-[12px] border-2 border-[gold] bg-[gold] px-6 py-3 font-bold text-[#050a30] text-sm leading-[22.4px] transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050a30] hover:shadow-lg sm:h-14 sm:px-10 sm:py-4 sm:text-base lg:px-12 lg:py-5 lg:text-lg"
                        onClick={() => setShowAllMentors(true)}
                      >
                        View More
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
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "participants" && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 p-8 shadow-lg">
                  <h2 className="mb-2 font-bold text-3xl text-[#050a30]">
                    Alumni
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Former participants who have completed our bootcamp and are
                    now making impact in their communities
                  </p>

                  {/* Workshop Year Tabs */}
                  <div className="mb-8 flex flex-wrap gap-2 rounded-xl bg-gray-100 p-1">
                    {workshopYears.map((year) => (
                      <button
                        className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                          selectedWorkshop === year
                            ? "bg-soft-dark text-white shadow-md"
                            : "text-gray-600 hover:bg-white hover:text-[#050a30]"
                        }`}
                        key={year}
                        onClick={() => setSelectedWorkshop(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {/* Participants Grid */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {workshopData[
                      selectedWorkshop as keyof typeof workshopData
                    ].map((participant, _index) => (
                      <div
                        className="group rounded-xl border border-gray-100 bg-gradient-to-br from-white to-blue-50/30 p-4 transition-all duration-300 hover:border-[#FFD700]/30 hover:shadow-lg"
                        key={participant.id}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-dark font-bold text-sm text-white">
                            {participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate font-semibold text-[#050a30] transition-colors group-hover:text-[#1e40af]">
                              {participant.name}
                            </h4>
                            <p className="truncate text-gray-500 text-sm">
                              {"college" in participant
                                ? (participant as any).college
                                : `Grade ${(participant as any).grade}`}
                            </p>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="rounded bg-amber-100 px-2 py-0.5 font-medium text-amber-600 text-xs">
                                {participant.city}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20" />
    </div>
  );
};

export default NetworkPage;
