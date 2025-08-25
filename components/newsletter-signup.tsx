"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { subscribeToNewsletter } from "@/lib/server-actions";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      const result = await subscribeToNewsletter(email);

      if (result.success) {
        setIsSubscribed(true);
        toast.success(
          result.message || "Successfully subscribed to our newsletter!"
        );
        setEmail("");
      } else {
        toast.error(result.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("[v0] Newsletter subscription error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Thank You!
          </h3>
          <p className="text-green-700">
            You've successfully subscribed to our newsletter.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Stay Updated</CardTitle>
        <CardDescription>
          Get the latest news about our programs, success stories, and
          agricultural innovations delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            By subscribing, you agree to receive emails from Youth Platform
            Africa. You can unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
