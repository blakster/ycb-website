/**
 * API Service Utility
 * Handles all API requests to the backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";

if (!API_BASE_URL && typeof window !== "undefined") {
  console.warn(
    "NEXT_PUBLIC_SERVER_URL is not set. Please add it to your .env.local file"
  );
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

/**
 * Generic API request handler
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      data,
      message: data.message,
    };
  } catch (error) {
    console.error("API request failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}

/**
 * Newsletter API
 */
export const newsletterApi = {
  /**
   * Subscribe to newsletter
   */
  subscribe: async (email: string) => {
    return apiRequest("/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  },
};

/**
 * Contact API
 */
export const contactApi = {
  /**
   * Submit contact form
   */
  submit: async (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    return apiRequest("/contact/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

/**
 * CMS Settings API
 */
export const cmsSettingsApi = {
  /**
   * Get all CMS settings and toggles
   */
  getSettings: async () => {
    return apiRequest("/cms-settings");
  },

  /**
   * Get all toggle values
   */
  getToggles: async () => {
    return apiRequest("/cms-settings/toggles");
  },
};

/**
 * Hero Slider API
 */
export const heroSliderApi = {
  /**
   * Get active hero sliders
   */
  getActive: async () => {
    return apiRequest("/hero-slider/active");
  },

  /**
   * Get all hero sliders
   */
  getAll: async () => {
    return apiRequest("/hero-slider");
  },
};

/**
 * About Section API
 */
export const aboutSectionApi = {
  /**
   * Get about section content
   */
  get: async () => {
    return apiRequest("/about-section");
  },
};

/**
 * Testimonials API
 */
export const testimonialsApi = {
  /**
   * Get active testimonials
   */
  getActive: async () => {
    return apiRequest("/testimonials/active");
  },

  /**
   * Get all testimonials
   */
  getAll: async () => {
    return apiRequest("/testimonials");
  },
};

/**
 * Stories API
 */
export const storiesApi = {
  /**
   * Get active stories
   */
  getActive: async () => {
    return apiRequest("/stories/active");
  },

  /**
   * Get featured stories
   */
  getFeatured: async () => {
    return apiRequest("/stories/featured");
  },

  /**
   * Get all stories
   */
  getAll: async () => {
    return apiRequest("/stories");
  },

  /**
   * Get story by slug
   */
  getBySlug: async (slug: string) => {
    return apiRequest(`/stories/slug/${slug}`);
  },
};

/**
 * Mentors API
 */
export const mentorsApi = {
  /**
   * Get all mentors
   */
  getAll: async (filters?: { category?: string; limit?: number }) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);
    if (filters?.limit) params.append("limit", filters.limit.toString());

    const query = params.toString();
    return apiRequest(`/mentors${query ? `?${query}` : ""}`);
  },

  /**
   * Get featured mentors
   */
  getFeatured: async (limit?: number) => {
    const query = limit ? `?limit=${limit}` : "";
    return apiRequest(`/mentors/featured${query}`);
  },

  /**
   * Get mentors by category
   */
  getByCategory: async (category: string, limit?: number) => {
    const query = limit ? `?limit=${limit}` : "";
    return apiRequest(`/mentors/category/${category}${query}`);
  },

  /**
   * Get mentor by ID
   */
  getById: async (id: string) => {
    return apiRequest(`/mentors/${id}`);
  },
};

/**
 * Editions API
 */
export const editionsApi = {
  /**
   * Get all editions
   */
  getAll: async (filters?: { status?: string; limit?: number }) => {
    const params = new URLSearchParams();
    if (filters?.status) params.append("status", filters.status);
    if (filters?.limit) params.append("limit", filters.limit.toString());

    const query = params.toString();
    return apiRequest(`/editions${query ? `?${query}` : ""}`);
  },

  /**
   * Get latest edition
   */
  getLatest: async () => {
    return apiRequest("/editions/latest");
  },

  /**
   * Get edition by ID
   */
  getById: async (id: string) => {
    return apiRequest(`/editions/${id}`);
  },
};

/**
 * Featured Articles API
 */
export const featuredArticlesApi = {
  /**
   * Get all featured articles
   */
  getAll: async (filters?: {
    category?: string;
    isFeatured?: boolean;
    limit?: number;
  }) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);
    if (filters?.isFeatured !== undefined)
      params.append("isFeatured", filters.isFeatured.toString());
    if (filters?.limit) params.append("limit", filters.limit.toString());

    const query = params.toString();
    return apiRequest(`/featured-articles${query ? `?${query}` : ""}`);
  },

  /**
   * Get featured articles only
   */
  getFeatured: async (limit?: number) => {
    const query = limit ? `?limit=${limit}` : "";
    return apiRequest(`/featured-articles/featured${query}`);
  },

  /**
   * Get articles by category
   */
  getByCategory: async (category: string, limit?: number) => {
    const query = limit ? `?limit=${limit}` : "";
    return apiRequest(`/featured-articles/category/${category}${query}`);
  },

  /**
   * Get article by slug
   */
  getBySlug: async (slug: string) => {
    return apiRequest(`/featured-articles/slug/${slug}`);
  },

  /**
   * Get article by ID
   */
  getById: async (id: string) => {
    return apiRequest(`/featured-articles/${id}`);
  },

  /**
   * Get all categories
   */
  getCategories: async () => {
    return apiRequest("/featured-articles/categories");
  },
};
