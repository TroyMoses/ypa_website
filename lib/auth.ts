"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Types for authentication
interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user";
  permissions: string[];
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

// Mock user database - in production, this would be a real database
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@youthplatformafrica.org",
    password: "admin123", // In production, this would be hashed
    name: "Admin User",
    role: "admin" as const,
    permissions: ["read", "write", "delete", "admin"],
  },
  {
    id: "2",
    email: "manager@youthplatformafrica.org",
    password: "manager123",
    name: "Manager User",
    role: "user" as const,
    permissions: ["read", "write"],
  },
];

// Helper function to hash passwords (mock implementation)
async function hashPassword(password: string): Promise<string> {
  // In production, use bcrypt or similar
  return `hashed_${password}`;
}

// Helper function to verify passwords (mock implementation)
async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  // In production, use bcrypt.compare or similar
  return hashedPassword === `hashed_${password}` || hashedPassword === password;
}

// Generate JWT token (mock implementation)
function generateToken(user: User): string {
  // In production, use proper JWT library
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    iat: Date.now(),
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };

  return `Bearer ${btoa(JSON.stringify(payload))}.${Date.now()}`;
}

// Verify JWT token (mock implementation)
export async function verifyToken(token: string): Promise<User | null> {
  try {
    if (!token.startsWith("Bearer ")) {
      return null;
    }

    const tokenPart = token.replace("Bearer ", "");
    const [payloadPart] = tokenPart.split(".");
    const payload = JSON.parse(atob(payloadPart));

    // Check expiration
    if (payload.exp < Date.now()) {
      return null;
    }

    // Find user
    const user = MOCK_USERS.find((u) => u.id === payload.id);
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      permissions: user.permissions,
    };
  } catch (error) {
    console.error("[v0] Token verification error:", error);
    return null;
  }
}

// Login function
export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    const { email, password } = credentials;

    // Validate input
    if (!email || !password) {
      return {
        success: false,
        error: "Email and password are required",
      };
    }

    // Find user
    const user = MOCK_USERS.find((u) => u.email === email);
    if (!user) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    // Generate token
    const userObj: User = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      permissions: user.permissions,
    };

    const token = generateToken(userObj);

    // Set secure cookie
    const cookieStore = await cookies();
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/",
    });

    console.log("[v0] User logged in:", { email, role: user.role });

    return {
      success: true,
      user: userObj,
      token,
    };
  } catch (error) {
    console.error("[v0] Login error:", error);
    return {
      success: false,
      error: "Login failed. Please try again.",
    };
  }
}

// Logout function
export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("auth-token");
  cookieStore.delete("session");

  console.log("[v0] User logged out");
  redirect("/admin/login");
}

// Get current user from session
export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
      return null;
    }

    return await verifyToken(token);
  } catch (error) {
    console.error("[v0] Get current user error:", error);
    return null;
  }
}

// Check if user has specific permission
export async function hasPermission(permission: string): Promise<boolean> {
  const user = await getCurrentUser();
  return user?.permissions.includes(permission) || false;
}

// Require authentication (redirect if not authenticated)
export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/admin/login");
  }

  return user;
}

// Require specific permission (redirect if not authorized)
export async function requirePermission(permission: string): Promise<User> {
  const user = await requireAuth();

  if (!user.permissions.includes(permission)) {
    redirect("/admin/unauthorized");
  }

  return user;
}
