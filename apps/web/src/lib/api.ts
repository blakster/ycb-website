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
