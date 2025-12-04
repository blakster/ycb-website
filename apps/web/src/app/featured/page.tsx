"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Blog8 } from "@/components/blog";
import { Button } from "@/components/ui/button";
import { loadStories } from "@/lib/content-loader";
import Abhijay from "./alumni_story/Abhijay.jpg";
import Manan from "./alumni_story/Manan.jpg";
import Nandini from "./alumni_story/Nandini.jpg";
import NavyaTEDx from "./alumni_story/Navya.jpg";
import Nishtha from "./alumni_story/Nishtha.jpg";
import Reyansh from "./alumni_story/Reyansh.jpg";
import Tseten from "./alumni_story/Tseten.jpg";

// Constants
const POSTS_PER_PAGE = 4;

// Static fallback stories data
const staticBlogPosts = [
  {
    id: "nandini-nithyanandh-winter-2023",
    title:
      "My Journey at YCB Winter 2023: A Week of Learning, Friendship, and Inspiration",
    summary:
      "Seven days filled with learning, laughter, and lifelong connections. A transformative journey that nurtured confidence, creativity, and courage.",
    label: "Participant Story",
    author: "Nandini Nithyanandh",
    location: "Tamil Nadu, Season 2",
    published: "Winter 2023",
    url: "/featured/nandini-nithyanandh-winter-2023",
    image: Nandini.src,
    tags: ["Participant Journey", "Season 2", "Innovation"],
  },
  {
    id: "manan-sangtani-mentor",
    title: "From Ideas to Impact: My Journey as a YCB Mentor",
    summary:
      "Stepping into IIT Delhi as a mentor, working with inspiring changemakers, and discovering the true meaning of community and impact.",
    label: "Mentor Story",
    author: "Manan Sangtani",
    location: "BITS Goa",
    published: "2023",
    url: "/featured/manan-sangtani-mentor",
    image: Manan.src,
    tags: ["Mentor Journey", "IIT Delhi", "Community"],
  },
  {
    id: "tseten-lhamu-bhutia-season-5",
    title: "Lines of Culture and Lessons of Change: My YCB Experience",
    summary:
      "From quiet strangers to friends creating 'Lines of Culture' - an initiative to combat regional discrimination through real stories and empathy.",
    label: "Participant Story",
    author: "Tseten Lhamu Bhutia",
    location: "Sikkim, Season 5",
    published: "June 2025",
    url: "/featured/tseten-lhamu-bhutia-season-5",
    image: Tseten.src,
    tags: ["Season 5", "Social Innovation", "Community"],
  },
  {
    id: "abhijay-srivastava-season-1",
    title: "100x Learning: How YCB Changed the Way I Think and Create",
    summary:
      "An intense week of learning from professors, startup founders, and innovators that gave a 100x head start in thinking and creating.",
    label: "Participant Story",
    author: "Abhijay Srivastava",
    location: "Tamil Nadu, Season 1",
    published: "Summer 2023",
    url: "/featured/abhijay-srivastava-season-1",
    image: Abhijay.src,
    tags: ["Season 1", "Design Thinking", "Innovation"],
  },
  {
    id: "nishtha-agnihotri-season-2",
    title: "A Week That Changed How I See the World",
    summary:
      "From learning about AI and nanotechnology to understanding that anyone, no matter how young, can make a difference.",
    label: "Participant Story",
    author: "Nishtha Agnihotri",
    location: "Uttar Pradesh, Season 2",
    published: "Winter 2023",
    url: "/featured/nishtha-agnihotri-season-2",
    image: Nishtha.src,
    tags: ["Season 2", "Technology", "Youth Empowerment"],
  },
  {
    id: "reyansh-juneja-shark-tank",
    title: "Innovation in Action: Reyansh's MemoTag on Shark Tank",
    summary:
      "From YCB Season 2 participant to Shark Tank India Season 4 - Reyansh Juneja's journey of turning ideas into real impact.",
    label: "Alumni Achievement",
    author: "YCB Team",
    location: "Season 2 Alumni",
    published: "2024",
    url: "/featured/reyansh-juneja-shark-tank",
    image: Reyansh.src,
    tags: ["Alumni Success", "Entrepreneurship", "Shark Tank"],
  },
  {
    id: "navya-nilay-umass",
    title: "From YCB to UMass: Navya's Next Chapter in Changemaking",
    summary:
      "A curious kid from YCB Season 1 selected to pursue Computer Science at the University of Massachusetts, continuing the changemaker journey.",
    label: "Alumni Achievement",
    author: "YCB Team",
    location: "Season 1 Alumni",
    published: "2024",
    url: "/featured/navya-nilay-umass",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Alumni Success", "Higher Education", "Computer Science"],
  },
  {
    id: "navya-kautish-tedx",
    title: "The Audacity of Ambition: YCB Alumna Navya Inspires at TEDx",
    summary:
      "From YCB Season 3 to the TEDx stage - Navya Kautish shares her powerful message about dreaming big and pursuing unrealistic goals with courage.",
    label: "Alumni Achievement",
    author: "YCB Team",
    location: "Season 3 Alumni",
    published: "2024",
    url: "/featured/navya-kautish-tedx",
    image: NavyaTEDx.src,
    tags: ["Alumni Success", "TEDx", "Mental Health Advocacy"],
  },
];

const FeaturedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts);
  const [loading, setLoading] = useState(true);

  // Load stories from API or use static fallback
  useEffect(() => {
    async function loadContent() {
      try {
        const stories = await loadStories();
        if (stories && stories.length > 0) {
          setBlogPosts(stories);
        }
      } catch (error) {
        console.error("Failed to load stories:", error);
        // Keep static fallback
      } finally {
        setLoading(false);
      }
    }
    loadContent();
  }, []);

  // Calculate pagination values
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    document.getElementById("blog-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 font-bold text-4xl text-[#050a30] sm:text-5xl md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" />
          <p className="mx-auto max-w-3xl text-gray-600 text-lg leading-relaxed sm:text-xl">
            Dive into inspiring stories of change, innovation, and impact from
            our Young Changemaker community. Discover insights, strategies, and
            real-world solutions from the next generation of leaders.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <div className="pb-20" id="blog-section">
        <Blog8 posts={currentPosts} />

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-gray-200 border-t bg-white px-4 py-6 sm:px-6">
              {/* Mobile pagination */}
              <div className="flex flex-1 justify-between sm:hidden">
                <Button
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={goToPreviousPage}
                  variant="outline"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentPage === totalPages}
                  onClick={goToNextPage}
                  variant="outline"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Desktop pagination */}
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-gray-700 text-sm">
                    Showing{" "}
                    <span className="font-medium">{startIndex + 1}</span> to{" "}
                    <span className="font-medium">
                      {Math.min(endIndex, totalPosts)}
                    </span>{" "}
                    of <span className="font-medium">{totalPosts}</span>{" "}
                    articles
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {/* Previous button */}
                    <Button
                      className="relative inline-flex items-center rounded-md px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={currentPage === 1}
                      onClick={goToPreviousPage}
                      variant="ghost"
                    >
                      <ChevronLeft
                        aria-hidden="true"
                        className="mr-1 h-4 w-4"
                      />
                      <span className="font-medium text-sm">Previous</span>
                    </Button>

                    {/* Page numbers group */}
                    <nav
                      aria-label="Pagination"
                      className="-space-x-px isolate inline-flex rounded-md shadow-sm"
                    >
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <Button
                            className={`relative inline-flex items-center px-4 py-2 font-semibold text-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                              currentPage === page
                                ? "z-10 bg-[#050a30] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#050a30] focus-visible:outline-offset-2"
                                : "text-gray-900"
                            } ${page === 1 ? "rounded-l-md" : ""} ${
                              page === totalPages ? "rounded-r-md" : ""
                            }`}
                            key={page}
                            onClick={() => goToPage(page)}
                            variant={currentPage === page ? "default" : "ghost"}
                          >
                            {page}
                          </Button>
                        )
                      )}
                    </nav>

                    {/* Next button */}
                    <Button
                      className="relative inline-flex items-center rounded-md px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={currentPage === totalPages}
                      onClick={goToNextPage}
                      variant="ghost"
                    >
                      <span className="font-medium text-sm">Next</span>
                      <ChevronRight
                        aria-hidden="true"
                        className="ml-1 h-4 w-4"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPage;
