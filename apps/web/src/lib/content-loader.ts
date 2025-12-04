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
      const toggles =
        response.data.toggles || response.data || {};
      togglesCache = toggles as Record<string, boolean>;
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
      const slides = response.data.sliders || response.data;
      // Only return API data if we have at least one slide
      if (Array.isArray(slides) && slides.length > 0) {
        console.log("Loaded hero slides from API:", slides.length);
        return slides.map((slide: any) => ({
          id: slide.id,
          imageUrl: slide.imageUrl,
          title: slide.title || "",
          subtitle: slide.subtitle || "",
          ctaText: slide.ctaText || "Learn More",
          ctaLink: slide.ctaLink || "/about",
          order: slide.order || 0,
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
      const testimonials = response.data.testimonials || response.data;
      // Only return API data if we have at least one testimonial
      if (Array.isArray(testimonials) && testimonials.length > 0) {
        console.log("Loaded testimonials from API:", testimonials.length);
        return testimonials.map((t: any) => ({
          id: t.id,
          name: t.name,
          role: t.role || t.designation || "",
          quote: t.quote || t.content || "",
          imageUrl: t.imageUrl || t.avatarUrl || "",
          avatar: t.imageUrl || t.avatarUrl || "",
          status: t.status || "active",
          order: t.order || 0,
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
      const content = response.data.content || response.data;
      console.log("Loaded about section from API");
      return {
        stats: content.stats || FALLBACK_ABOUT_STATS,
        features: content.features || FALLBACK_ABOUT_FEATURES,
        videoUrl: content.videoUrl || FALLBACK_VIDEO_URL,
        title: content.title || "",
        description: content.description || "",
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
      const stories = response.data.stories || response.data.story || response.data;
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
      const mentors = response.data.mentors || response.data;
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
      const editions = response.data.editions || response.data;
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
      const articles = response.data.articles || response.data;
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
