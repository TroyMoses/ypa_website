"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { login } from "@/lib/auth";
import { useAuth } from "@/hooks/use-auth";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: clientLogin } = useAuth();

  const redirectUrl = searchParams.get("redirect") || "/admin/dashboard";
  const error = searchParams.get("error");

  const React = require("react");
  React.useEffect(() => {
    if (error === "session_expired") {
      toast.error("Your session has expired. Please log in again.");
    }
  }, [error]);

  interface LoginParams {
    email: string;
    password: string;
  }

  interface LoginResult {
    success: boolean;
    error?: string;
    user?: any;
  }

  const mapEmailToRole = (email: string) => {
    if (email === "admin@youthplatformafrica.org") return "i.t";
    if (email === "manager@youthplatformafrica.org") return "customer_service";
    return "i.t"; // default role
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const result: LoginResult = await login({
        email,
        password,
      } as LoginParams);

      if (result.success) {
        const clientRole = mapEmailToRole(email);
        const clientSuccess = await clientLogin(
          email,
          password,
          clientRole as any
        );

        if (clientSuccess) {
          toast.success("Login successful!");
          router.push(redirectUrl);
          router.refresh();
        } else {
          toast.error("Authentication sync failed");
        }
      } else {
        toast.error(result.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("[v0] Login error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            YPA Admin Portal
          </CardTitle>
          <CardDescription>
            Sign in to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@youthplatformafrica.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p className="mb-2">Demo Credentials:</p>
            <div className="space-y-1 text-xs">
              <p>
                <strong>Admin:</strong> admin@youthplatformafrica.org | admin123
              </p>
              <p>
                <strong>Manager:</strong> manager@youthplatformafrica.org |
                manager123
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
