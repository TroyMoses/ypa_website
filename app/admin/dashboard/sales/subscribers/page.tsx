"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Plus, Download, Upload, Mail, UserCheck, UserX } from "lucide-react"
import { useState } from "react"

// Mock subscriber data
const mockSubscribers = [
  {
    id: 1,
    email: "john.doe@example.com",
    name: "John Doe",
    status: "active",
    subscribedAt: "2024-01-15T10:30:00Z",
    location: "Uganda",
    source: "website",
  },
  {
    id: 2,
    email: "sarah.wilson@example.com",
    name: "Sarah Wilson",
    status: "active",
    subscribedAt: "2024-01-14T14:20:00Z",
    location: "Kenya",
    source: "event",
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    name: "Michael Brown",
    status: "unsubscribed",
    subscribedAt: "2024-01-10T09:15:00Z",
    location: "Tanzania",
    source: "referral",
  },
]

const mockSegments = [
  { id: 1, name: "All Subscribers", count: 2847, description: "All active newsletter subscribers" },
  { id: 2, name: "Uganda Farmers", count: 1250, description: "Subscribers from Uganda interested in farming" },
  { id: 3, name: "Event Attendees", count: 890, description: "People who attended our events" },
  { id: 4, name: "Partners", count: 156, description: "Business partners and collaborators" },
]

export default function SubscribersPage() {
  return (
    <ProtectedRoute allowedRoles={["sales"]}>
      <SubscribersContent />
    </ProtectedRoute>
  )
}

function SubscribersContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSegment, setSelectedSegment] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "unsubscribed":
        return "bg-red-100 text-red-800"
      case "bounced":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSourceColor = (source: string) => {
    switch (source) {
      case "website":
        return "bg-blue-100 text-blue-800"
      case "event":
        return "bg-purple-100 text-purple-800"
      case "referral":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscriber Management</h1>
              <p className="text-gray-600">Manage your newsletter subscribers and segments</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="cursor-pointer bg-transparent">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button variant="outline" className="cursor-pointer bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button className="cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Add Subscriber
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-green-600">2,691</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
                  <p className="text-2xl font-bold text-red-600">156</p>
                </div>
                <UserX className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-blue-600">+234</p>
                </div>
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="subscribers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="subscribers" className="cursor-pointer">
              Subscribers
            </TabsTrigger>
            <TabsTrigger value="segments" className="cursor-pointer">
              Segments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscribers">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Subscriber List</CardTitle>
                    <CardDescription>Manage individual subscribers and their preferences</CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search subscribers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSubscribers.map((subscriber) => (
                    <div key={subscriber.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900">{subscriber.name}</h4>
                            <Badge className={getStatusColor(subscriber.status)}>{subscriber.status}</Badge>
                            <Badge className={getSourceColor(subscriber.source)}>{subscriber.source}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{subscriber.email}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Location: {subscriber.location}</span>
                            <span>Subscribed: {new Date(subscriber.subscribedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Subscriber Segments</CardTitle>
                    <CardDescription>Organize subscribers into targeted groups</CardDescription>
                  </div>
                  <Button className="cursor-pointer">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Segment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockSegments.map((segment) => (
                    <Card key={segment.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{segment.name}</CardTitle>
                          <Badge variant="outline">{segment.count} subscribers</Badge>
                        </div>
                        <CardDescription>{segment.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 cursor-pointer bg-transparent">
                            <Mail className="h-4 w-4 mr-2" />
                            Send Campaign
                          </Button>
                          <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
