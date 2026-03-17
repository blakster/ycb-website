/**
 * Content Loader with CMS Toggle Logic
 *
 * This module provides functions to load content dynamically from the API
 * or fall back to static data based on CMS toggle settings.
 *
 * Usage:
 * ```ts
 * const heroSlides = await loadHeroSlides();
 * const testimonials = await loadTestimonials();
 * ```
 */

import {
  aboutSectionApi,
  cmsSettingsApi,
  heroSliderApi,
  testimonialsApi,
  storiesApi,
  mentorsApi,
  editionsApi,
  featuredArticlesApi,
} from "./api";
import {
  FALLBACK_HERO_SLIDES,
  FALLBACK_TESTIMONIALS,
  FALLBACK_ABOUT_STATS,
  FALLBACK_ABOUT_FEATURES,
  FALLBACK_VIDEO_URL,
} from "./static-data";

// Cache for CMS toggle settings
let togglesCache: Record<string, boolean> | null = null;
let togglesCacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch and cache CMS toggle settings
 * Maps backend toggle names (useDb*) to frontend names (use*)
 */
async function getToggles(): Promise<Record<string, boolean>> {
  const now = Date.now();

  // Return cached toggles if still valid
  if (togglesCache && now - togglesCacheTime < CACHE_DURATION) {
    return togglesCache;
  }

  try {
    const response = await cmsSettingsApi.getToggles();

    if (response.success && response.data) {
      // Handle the response structure from the API
      const responseData = response.data as Record<string, unknown>;
      const apiToggles = (responseData.toggles || responseData || {}) as Record<string, boolean>;

      // Map backend toggle names (useDb*) to frontend names (use*)
      const mappedToggles: Record<string, boolean> = {
        useHeroSlider: apiToggles.useDbHeroSlider || false,
        useTestimonials: apiToggles.useDbTestimonials || false,
        useStories: apiToggles.useDbStories || false,
        useMentors: apiToggles.useDbMentors || false,
        useEditions: apiToggles.useDbEditions || false,
        useAboutSection: apiToggles.useDbAboutSection || false,
        useFeaturedArticles: apiToggles.useDbFeaturedArticles || false,
      };

      togglesCache = mappedToggles;
      togglesCacheTime = now;
      return togglesCache;
    }
  } catch (error) {
    console.warn("Failed to fetch CMS toggles, using defaults:", error);
  }

  // Return all toggles as false (use static data) if fetch fails
  return {
    useHeroSlider: false,
    useTestimonials: false,
    useStories: false,
    useMentors: false,
    useEditions: false,
    useAboutSection: false,
    useFeaturedArticles: false,
  };
}

/**
 * Load hero slides with toggle logic
 */
export async function loadHeroSlides() {
  const toggles = await getToggles();

  // If toggle is off, return static data immediately
  if (!toggles.useHeroSlider) {
    console.log("Hero slider toggle is OFF, using static data");
    return FALLBACK_HERO_SLIDES;
  }

  try {
    const response = await heroSliderApi.getActive();

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const slides = (responseData.sliders || responseData) as Array<Record<string, unknown>>;
      // Only return API data if we have at least one slide
      if (Array.isArray(slides) && slides.length > 0) {
        console.log("Loaded hero slides from API:", slides.length);
        return slides.map((slide) => ({
          id: slide.id as string,
          imageUrl: slide.imageUrl as string,
          title: (slide.title as string) || "",
          subtitle: (slide.subtitle as string) || "",
          ctaText: (slide.ctaText as string) || "Learn More",
          ctaLink: (slide.ctaLink as string) || "/about",
          order: (slide.order as number) || 0,
          isActive: slide.isActive !== false,
        }));
      }
    }
  } catch (error) {
    console.warn("Failed to load hero slides from API, using fallback:", error);
  }

  // Fallback to static data
  return FALLBACK_HERO_SLIDES;
}

/**
 * Load testimonials with toggle logic
 */
export async function loadTestimonials() {
  const toggles = await getToggles();

  // If toggle is off, return static data immediately
  if (!toggles.useTestimonials) {
    console.log("Testimonials toggle is OFF, using static data");
    return FALLBACK_TESTIMONIALS;
  }

  try {
    const response = await testimonialsApi.getActive();

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const testimonials = (responseData.testimonials || responseData) as Array<Record<string, unknown>>;
      // Only return API data if we have at least one testimonial
      if (Array.isArray(testimonials) && testimonials.length > 0) {
        console.log("Loaded testimonials from API:", testimonials.length);
        return testimonials.map((t) => ({
          id: t.id as string,
          name: t.name as string,
          role: (t.role as string) || (t.designation as string) || (t.school as string) || "",
          quote: (t.quote as string) || (t.content as string) || "",
          imageUrl: (t.imageUrl as string) || (t.avatarUrl as string) || "",
          avatar: (t.imageUrl as string) || (t.avatarUrl as string) || "",
          status: (t.status as string) || "active",
          order: (t.order as number) || 0,
        }));
      }
    }
  } catch (error) {
    console.warn(
      "Failed to load testimonials from API, using fallback:",
      error
    );
  }

  // Fallback to static data
  return FALLBACK_TESTIMONIALS;
}

/**
 * Load about section content with toggle logic
 */
export async function loadAboutSection() {
  const toggles = await getToggles();

  // If toggle is off, return static data immediately
  if (!toggles.useAboutSection) {
    console.log("About section toggle is OFF, using static data");
    return {
      stats: FALLBACK_ABOUT_STATS,
      features: FALLBACK_ABOUT_FEATURES,
      videoUrl: FALLBACK_VIDEO_URL,
    };
  }

  try {
    const response = await aboutSectionApi.get();

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const content = (responseData.content || responseData) as Record<string, unknown>;
      console.log("Loaded about section from API");
      return {
        stats: (content.stats as typeof FALLBACK_ABOUT_STATS) || FALLBACK_ABOUT_STATS,
        features: (content.features as typeof FALLBACK_ABOUT_FEATURES) || FALLBACK_ABOUT_FEATURES,
        videoUrl: (content.videoUrl as string) || FALLBACK_VIDEO_URL,
        title: (content.title as string) || "",
        description: (content.description as string) || "",
      };
    }
  } catch (error) {
    console.warn(
      "Failed to load about section from API, using fallback:",
      error
    );
  }

  // Fallback to static data
  return {
    stats: FALLBACK_ABOUT_STATS,
    features: FALLBACK_ABOUT_FEATURES,
    videoUrl: FALLBACK_VIDEO_URL,
  };
}

/**
 * Load stories with toggle logic
 */
export async function loadStories(filters?: { featured?: boolean; limit?: number }) {
  const toggles = await getToggles();

  // If toggle is off, return empty array (no dynamic stories)
  if (!toggles.useStories) {
    console.log("Stories toggle is OFF, returning empty array");
    return [];
  }

  try {
    const response = filters?.featured
      ? await storiesApi.getFeatured()
      : await storiesApi.getActive();

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const stories = responseData.stories || responseData.story || responseData;
      if (Array.isArray(stories)) {
        console.log("Loaded stories from API:", stories.length);
        return stories;
      } else if (stories) {
        // Single story
        return [stories];
      }
    }
  } catch (error) {
    console.warn("Failed to load stories from API:", error);
  }

  return [];
}

/**
 * Load mentors with toggle logic
 */
export async function loadMentors(filters?: { category?: string; limit?: number }) {
  const toggles = await getToggles();

  if (!toggles.useMentors) {
    console.log("Mentors toggle is OFF, returning empty array");
    return [];
  }

  try {
    const response = await mentorsApi.getFeatured(filters?.limit);

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const mentors = responseData.mentors || responseData;
      if (Array.isArray(mentors)) {
        console.log("Loaded mentors from API:", mentors.length);
        return mentors;
      }
    }
  } catch (error) {
    console.warn("Failed to load mentors from API:", error);
  }

  return [];
}

/**
 * Load editions with toggle logic
 */
export async function loadEditions(filters?: { status?: string; limit?: number }) {
  const toggles = await getToggles();

  if (!toggles.useEditions) {
    console.log("Editions toggle is OFF, returning empty array");
    return [];
  }

  try {
    const response = await editionsApi.getAll(filters);

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const editions = responseData.editions || responseData;
      if (Array.isArray(editions)) {
        console.log("Loaded editions from API:", editions.length);
        return editions;
      }
    }
  } catch (error) {
    console.warn("Failed to load editions from API:", error);
  }

  return [];
}

/**
 * Load featured articles with toggle logic
 */
export async function loadFeaturedArticles(filters?: {
  category?: string;
  limit?: number;
}) {
  const toggles = await getToggles();

  if (!toggles.useFeaturedArticles) {
    console.log("Featured articles toggle is OFF, returning empty array");
    return [];
  }

  try {
    const response = await featuredArticlesApi.getFeatured(filters?.limit);

    if (response.success && response.data) {
      const responseData = response.data as Record<string, unknown>;
      const articles = responseData.articles || responseData;
      if (Array.isArray(articles)) {
        console.log("Loaded featured articles from API:", articles.length);
        return articles;
      }
    }
  } catch (error) {
    console.warn("Failed to load featured articles from API:", error);
  }

  return [];
}

/**
 * Clear the toggles cache (useful for testing or when settings change)
 */
export function clearTogglesCache() {
  togglesCache = null;
  togglesCacheTime = 0;
}

export default {
  loadHeroSlides,
  loadTestimonials,
  loadAboutSection,
  loadStories,
  loadMentors,
  loadEditions,
  loadFeaturedArticles,
  clearTogglesCache,
};
