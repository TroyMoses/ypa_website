import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

export default async function UnauthorizedPage() {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold">Access Denied</CardTitle>
          <CardDescription>
            {currentUser
              ? `Sorry ${currentUser.name}, you don't have permission to access this resource.`
              : "You don't have permission to access this resource."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentUser && (
            <div className="p-3 bg-muted rounded-lg text-sm">
              <p>
                <strong>Current User:</strong> {currentUser.email}
              </p>
              <p>
                <strong>Role:</strong> {currentUser.role}
              </p>
              <p>
                <strong>Permissions:</strong>{" "}
                {currentUser.permissions.join(", ")}
              </p>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            Please contact your administrator if you believe this is an error.
          </p>
          <div className="flex flex-col gap-2">
            {currentUser ? (
              <Button asChild className="cursor-pointer">
                <Link href="/admin/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <Button asChild className="cursor-pointer">
                <Link href="/admin/login">Login</Link>
              </Button>
            )}
            <Button
              variant="outline"
              asChild
              className="cursor-pointer bg-transparent"
            >
              <Link href="/admin/login">Login as Different User</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
