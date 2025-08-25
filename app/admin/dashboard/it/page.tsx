"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Settings, Search, Plus, Edit, Trash2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Mock data
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Member", status: "active", joinDate: "2024-01-15" },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Partner",
    status: "active",
    joinDate: "2024-01-10",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Member",
    status: "inactive",
    joinDate: "2023-12-20",
  },
]

const mockContent = [
  {
    id: 1,
    title: "YPA Launches New Training Program",
    type: "news",
    status: "published",
    date: "2024-01-15",
    author: "Admin",
  },
  {
    id: 2,
    title: "Agricultural Innovation Summit 2024",
    type: "event",
    status: "draft",
    date: "2024-01-20",
    author: "Media Team",
  },
  {
    id: 3,
    title: "Sustainable Farming Practices",
    type: "blog",
    status: "published",
    date: "2024-01-12",
    author: "Expert Writer",
  },
]

export default function ITDashboard() {
  return (
    <ProtectedRoute allowedRoles={["i.t"]}>
      <ITContent />
    </ProtectedRoute>
  )
}

function ITContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "published":
        return "bg-green-100 text-green-800"
      case "inactive":
      case "draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "news":
        return "bg-blue-100 text-blue-800"
      case "event":
        return "bg-purple-100 text-purple-800"
      case "blog":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">I.T Dashboard</h1>
          <p className="text-gray-600">Manage users and website content</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-green-600">1,156</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published Content</p>
                  <p className="text-2xl font-bold text-blue-600">45</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Draft Content</p>
                  <p className="text-2xl font-bold text-orange-600">12</p>
                </div>
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users" className="cursor-pointer">
              User Management
            </TabsTrigger>
            <TabsTrigger value="content" className="cursor-pointer">
              Content Management
            </TabsTrigger>
            <TabsTrigger value="settings" className="cursor-pointer">
              System Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage registered clients and their access</CardDescription>
                  </div>
                  <Button className="cursor-pointer">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900">{user.name}</h4>
                            <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                            <Badge variant="outline">{user.role}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{user.email}</p>
                          <p className="text-xs text-gray-500">
                            Joined: {new Date(user.joinDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="cursor-pointer bg-transparent text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>Manage news, events, and blog articles</CardDescription>
                  </div>
                  <Button asChild className="cursor-pointer">
                    <Link href="/admin/dashboard/it/content">
                      <Plus className="h-4 w-4 mr-2" />
                      Manage Content
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContent.map((content) => (
                    <div key={content.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900">{content.title}</h4>
                            <Badge className={getTypeColor(content.type)}>{content.type}</Badge>
                            <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>By {content.author}</span>
                            <span>{new Date(content.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="cursor-pointer bg-transparent text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button asChild variant="outline" className="cursor-pointer bg-transparent">
                    <Link href="/admin/dashboard/it/content">View Full Content Management System</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure system-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Website Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start cursor-pointer bg-transparent">
                          <Settings className="h-4 w-4 mr-2" />
                          General Settings
                        </Button>
                        <Button variant="outline" className="w-full justify-start cursor-pointer bg-transparent">
                          <FileText className="h-4 w-4 mr-2" />
                          SEO Settings
                        </Button>
                        <Button variant="outline" className="w-full justify-start cursor-pointer bg-transparent">
                          <Users className="h-4 w-4 mr-2" />
                          User Permissions
                        </Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">System Maintenance</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start cursor-pointer bg-transparent">
                          <Settings className="h-4 w-4 mr-2" />
                          Database Backup
                        </Button>
                        <Button variant="outline" className="w-full justify-start cursor-pointer bg-transparent">
                          <FileText className="h-4 w-4 mr-2" />
                          System Logs
                        </Button>
                        <Button variant="outline" className="w-full justify-start cursor-pointer bg-transparent">
                          <Users className="h-4 w-4 mr-2" />
                          Security Settings
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
