"use server";

import { revalidatePath } from "next/cache";

// Types for API communication
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  priority: "low" | "medium" | "high";
}

interface NewsletterData {
  email: string;
}

// Base API configuration
const API_BASE_URL =
  process.env.FASTAPI_BASE_URL || "http://localhost:8000/api/v1";
const API_TOKEN = process.env.API_TOKEN || "";

// Helper function to make authenticated API calls
async function makeApiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
      "X-API-Key": process.env.API_KEY || "",
      ...options.headers,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(
        `API call failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error(`API call to ${endpoint} failed:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

// Contact form submission
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse> {
  try {
    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return {
        success: false,
        error: "All required fields must be filled",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    // For now, use dummy data but structure is ready for FastAPI
    const mockResponse = {
      id: Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      priority: formData.priority,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // In production, this would call the FastAPI endpoint
    // const result = await makeApiCall("/contact", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    // })

    console.log("[v0] Contact form submitted:", mockResponse);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: mockResponse,
      message: "Contact form submitted successfully",
    };
  } catch (error) {
    console.error("[v0] Contact form submission error:", error);
    return {
      success: false,
      error: "Failed to submit contact form. Please try again.",
    };
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(
  email: string
): Promise<ApiResponse> {
  try {
    // Validate email
    if (!email) {
      return {
        success: false,
        error: "Email address is required",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    // For now, use dummy data but structure is ready for FastAPI
    const mockResponse = {
      id: Date.now(),
      email,
      subscribed: true,
      subscribedAt: new Date().toISOString(),
    };

    // In production, this would call the FastAPI endpoint
    // const result = await makeApiCall("/newsletter/subscribe", {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    // })

    console.log("[v0] Newsletter subscription:", mockResponse);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: mockResponse,
      message: "Successfully subscribed to newsletter",
    };
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error);
    return {
      success: false,
      error: "Failed to subscribe to newsletter. Please try again.",
    };
  }
}

// Admin CRUD operations for customer service
export async function getCustomerServiceTickets(): Promise<ApiResponse> {
  try {
    // Mock data - in production would call FastAPI
    const mockTickets = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        subject: "Project Inquiry",
        message: "I'm interested in the goat keeping project",
        priority: "medium",
        status: "pending",
        createdAt: "2024-01-15T10:30:00Z",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        subject: "Technical Support",
        message: "Having issues with the platform",
        priority: "high",
        status: "in-progress",
        createdAt: "2024-01-14T14:20:00Z",
      },
    ];

    // In production: const result = await makeApiCall("/admin/tickets")
    console.log("[v0] Fetching customer service tickets");

    return {
      success: true,
      data: mockTickets,
    };
  } catch (error) {
    console.error("[v0] Error fetching tickets:", error);
    return {
      success: false,
      error: "Failed to fetch customer service tickets",
    };
  }
}

export async function updateTicketStatus(
  ticketId: number,
  status: string
): Promise<ApiResponse> {
  try {
    // Mock update - in production would call FastAPI
    const mockUpdatedTicket = {
      id: ticketId,
      status,
      updatedAt: new Date().toISOString(),
    };

    // In production: const result = await makeApiCall(`/admin/tickets/${ticketId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({ status }),
    // })

    console.log("[v0] Updated ticket status:", mockUpdatedTicket);

    revalidatePath("/admin/dashboard/customer-service");

    return {
      success: true,
      data: mockUpdatedTicket,
      message: "Ticket status updated successfully",
    };
  } catch (error) {
    console.error("[v0] Error updating ticket:", error);
    return {
      success: false,
      error: "Failed to update ticket status",
    };
  }
}

// Admin CRUD operations for content management
export async function getContentItems(): Promise<ApiResponse> {
  try {
    // Mock data - in production would call FastAPI
    const mockContent = [
      {
        id: 1,
        title: "Welcome to YPA",
        type: "page",
        status: "published",
        createdAt: "2024-01-10T09:00:00Z",
      },
      {
        id: 2,
        title: "Beekeeping Success Story",
        type: "blog",
        status: "draft",
        createdAt: "2024-01-12T11:30:00Z",
      },
    ];

    console.log("[v0] Fetching content items");

    return {
      success: true,
      data: mockContent,
    };
  } catch (error) {
    console.error("[v0] Error fetching content:", error);
    return {
      success: false,
      error: "Failed to fetch content items",
    };
  }
}

export async function createContentItem(
  contentData: any
): Promise<ApiResponse> {
  try {
    const mockNewContent = {
      id: Date.now(),
      ...contentData,
      createdAt: new Date().toISOString(),
    };

    console.log("[v0] Created content item:", mockNewContent);

    revalidatePath("/admin/dashboard/it/content");

    return {
      success: true,
      data: mockNewContent,
      message: "Content item created successfully",
    };
  } catch (error) {
    console.error("[v0] Error creating content:", error);
    return {
      success: false,
      error: "Failed to create content item",
    };
  }
}

export async function updateContentItem(
  contentId: number,
  contentData: any
): Promise<ApiResponse> {
  try {
    const mockUpdatedContent = {
      id: contentId,
      ...contentData,
      updatedAt: new Date().toISOString(),
    };

    console.log("[v0] Updated content item:", mockUpdatedContent);

    revalidatePath("/admin/dashboard/it/content");

    return {
      success: true,
      data: mockUpdatedContent,
      message: "Content item updated successfully",
    };
  } catch (error) {
    console.error("[v0] Error updating content:", error);
    return {
      success: false,
      error: "Failed to update content item",
    };
  }
}

export async function deleteContentItem(
  contentId: number
): Promise<ApiResponse> {
  try {
    console.log("[v0] Deleted content item:", contentId);

    revalidatePath("/admin/dashboard/it/content");

    return {
      success: true,
      message: "Content item deleted successfully",
    };
  } catch (error) {
    console.error("[v0] Error deleting content:", error);
    return {
      success: false,
      error: "Failed to delete content item",
    };
  }
}

// Newsletter management for admin
export async function getNewsletterSubscribers(): Promise<ApiResponse> {
  try {
    const mockSubscribers = [
      {
        id: 1,
        email: "subscriber1@example.com",
        subscribedAt: "2024-01-10T10:00:00Z",
        status: "active",
      },
      {
        id: 2,
        email: "subscriber2@example.com",
        subscribedAt: "2024-01-11T15:30:00Z",
        status: "active",
      },
    ];

    console.log("[v0] Fetching newsletter subscribers");

    return {
      success: true,
      data: mockSubscribers,
    };
  } catch (error) {
    console.error("[v0] Error fetching subscribers:", error);
    return {
      success: false,
      error: "Failed to fetch newsletter subscribers",
    };
  }
}
