"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogOut, User, MessageSquare, Mail, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { user, logout } = useAuth()

  const getRoleColor = (role: string) => {
    switch (role) {
      case "customer_service":
        return "bg-blue-100 text-blue-800"
      case "sales":
        return "bg-green-100 text-green-800"
      case "i.t":
        return "bg-purple-100 text-purple-800"
      case "media":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRolePermissions = (role: string) => {
    switch (role) {
      case "customer_service":
        return [
          {
            icon: MessageSquare,
            title: "Manage Feedback",
            description: "Handle customer inquiries and feedback",
            href: "/admin/dashboard/customer-service",
          },
        ]
      case "sales":
        return [
          {
            icon: Mail,
            title: "Newsletter Management",
            description: "Create and send newsletters",
            href: "/admin/dashboard/sales",
          },
        ]
      case "i.t":
        return [
          {
            icon: Users,
            title: "User Management",
            description: "Manage registered clients",
            href: "/admin/dashboard/it",
          },
          {
            icon: FileText,
            title: "Content Management",
            description: "Manage news, events, and blogs",
            href: "/admin/dashboard/it",
          },
        ]
      case "media":
        return [
          {
            icon: FileText,
            title: "Content Creation",
            description: "Create and edit media content",
            href: "/admin/dashboard/media",
          },
        ]
      default:
        return []
    }
  }

  const permissions = getRolePermissions(user?.role || "")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900">YPA Admin Dashboard</h1>
              <Badge className={getRoleColor(user?.role || "")}>{user?.role?.replace("_", " ").toUpperCase()}</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">{user?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={logout} className="cursor-pointer bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-gray-600">Here's what you can do with your {user?.role?.replace("_", " ")} permissions:</p>
        </div>

        {/* Permission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {permissions.map((permission, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <permission.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{permission.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{permission.description}</CardDescription>
                <Button asChild className="mt-4 w-full cursor-pointer">
                  <Link href={permission.href}>Access {permission.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Feedback</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Published Articles</p>
                    <p className="text-2xl font-bold text-gray-900">45</p>
                  </div>
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
