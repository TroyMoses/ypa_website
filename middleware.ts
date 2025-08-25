import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected admin routes
const ADMIN_ROUTES = [
  "/admin/dashboard",
  "/admin/dashboard/customer-service",
  "/admin/dashboard/it",
  "/admin/dashboard/media",
  "/admin/dashboard/sales",
];

// Define API routes that require authentication
const PROTECTED_API_ROUTES = ["/api/admin", "/api/protected"];

// Mock function to verify JWT token - in production, this would validate against your auth service
async function verifyAuthToken(token: string): Promise<boolean> {
  try {
    // In production, this would:
    // 1. Verify JWT signature
    // 2. Check token expiration
    // 3. Validate against user database
    // 4. Check user permissions

    // For now, simulate token validation
    if (!token || token === "invalid") {
      return false;
    }

    // Mock validation - in production use proper JWT verification
    return token.startsWith("Bearer ") && token.length > 20;
  } catch (error) {
    console.error("[v0] Token verification error:", error);
    return false;
  }
}

// Security headers configuration
function addSecurityHeaders(response: NextResponse): NextResponse {
  // CORS headers
  response.headers.set(
    "Access-Control-Allow-Origin",
    process.env.ALLOWED_ORIGINS || "*"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-API-Key, X-Requested-With"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.vercel.com https://vercel.live wss://ws-us3.pusher.com",
    "frame-src 'self' https://vercel.live",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);

  // Rate limiting headers (would be implemented with actual rate limiting service)
  response.headers.set("X-RateLimit-Limit", "100");
  response.headers.set("X-RateLimit-Remaining", "99");
  response.headers.set("X-RateLimit-Reset", String(Date.now() + 3600000));

  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Add security headers to all responses
  const secureResponse = addSecurityHeaders(response);

  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: secureResponse.headers,
    });
  }

  // Check if the route requires admin authentication
  const isAdminRoute = ADMIN_ROUTES.some((route) => pathname.startsWith(route));
  const isProtectedApiRoute = PROTECTED_API_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isAdminRoute || isProtectedApiRoute) {
    // Get auth token from various sources
    const authHeader = request.headers.get("authorization");
    const cookieToken = request.cookies.get("auth-token")?.value;
    const apiKey = request.headers.get("x-api-key");

    // For admin routes, check for session/cookie auth
    if (isAdminRoute) {
      const sessionToken = cookieToken || request.cookies.get("session")?.value;

      if (!sessionToken) {
        // Redirect to login page for admin routes
        const loginUrl = new URL("/admin/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
      }

      // Verify session token
      const isValidSession = await verifyAuthToken(`Bearer ${sessionToken}`);
      if (!isValidSession) {
        const loginUrl = new URL("/admin/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        loginUrl.searchParams.set("error", "session_expired");
        return NextResponse.redirect(loginUrl);
      }
    }

    // For API routes, check for Bearer token or API key
    if (isProtectedApiRoute) {
      const token = authHeader || `Bearer ${cookieToken}`;

      if (!token && !apiKey) {
        return NextResponse.json(
          { error: "Authentication required", code: "AUTH_REQUIRED" },
          { status: 401, headers: secureResponse.headers }
        );
      }

      // Verify API authentication
      if (token) {
        const isValidToken = await verifyAuthToken(token);
        if (!isValidToken) {
          return NextResponse.json(
            { error: "Invalid or expired token", code: "INVALID_TOKEN" },
            { status: 401, headers: secureResponse.headers }
          );
        }
      }

      // Verify API key if provided
      if (apiKey) {
        const validApiKey = process.env.API_KEY || "demo-api-key";
        if (apiKey !== validApiKey) {
          return NextResponse.json(
            { error: "Invalid API key", code: "INVALID_API_KEY" },
            { status: 401, headers: secureResponse.headers }
          );
        }
      }
    }
  }

  // Log security events (in production, send to monitoring service)
  if (isAdminRoute || isProtectedApiRoute) {
    console.log("[v0] Security check passed for:", {
      path: pathname,
      method: request.method,
      ip: request.headers.get("x-forwarded-for"),
      userAgent: request.headers.get("user-agent"),
      timestamp: new Date().toISOString(),
    });
  }

  return secureResponse;
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all admin routes
    "/admin/:path*",
    // Match all API routes
    "/api/:path*",
    // Match all routes for security headers
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
