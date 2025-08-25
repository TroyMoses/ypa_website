"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Users, Send, Plus, Calendar, TrendingUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Mock newsletter data
const mockNewsletters = [
  {
    id: 1,
    title: "YPA Monthly Update - January 2024",
    subject: "New Training Programs and Success Stories",
    status: "sent",
    recipients: 1250,
    openRate: "68%",
    sentAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Agricultural Innovation Summit",
    subject: "Join us for the biggest agribusiness event of the year",
    status: "draft",
    recipients: 0,
    openRate: "0%",
    sentAt: null,
  },
  {
    id: 3,
    title: "Success Story: Kenya Farmers",
    subject: "How YPA transformed rural communities in Kenya",
    status: "scheduled",
    recipients: 980,
    openRate: "0%",
    sentAt: "2024-01-20T09:00:00Z",
  },
]

export default function SalesDashboard() {
  return (
    <ProtectedRoute allowedRoles={["sales"]}>
      <SalesContent />
    </ProtectedRoute>
  )
}

function SalesContent() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newsletterForm, setNewsletterForm] = useState({
    title: "",
    subject: "",
    content: "",
    recipients: "all",
    template: "default",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
              <p className="text-gray-600">Manage newsletters and email campaigns</p>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline" className="cursor-pointer bg-transparent">
                <Link href="/admin/dashboard/sales/subscribers">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Subscribers
                </Link>
              </Button>
              <Button onClick={() => setShowCreateForm(true)} className="cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Create Newsletter
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
                  <p className="text-sm font-medium text-gray-600">Campaigns Sent</p>
                  <p className="text-2xl font-bold text-green-600">24</p>
                </div>
                <Send className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Open Rate</p>
                  <p className="text-2xl font-bold text-blue-600">72%</p>
                </div>
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                  <p className="text-2xl font-bold text-purple-600">+15%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {showCreateForm ? (
          /* Create Newsletter Form */
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Newsletter</CardTitle>
              <CardDescription>Design and schedule your email campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Newsletter Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter newsletter title"
                      value={newsletterForm.title}
                      onChange={(e) => setNewsletterForm({ ...newsletterForm, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Email Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Enter email subject line"
                      value={newsletterForm.subject}
                      onChange={(e) => setNewsletterForm({ ...newsletterForm, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="template">Email Template</Label>
                    <Select
                      value={newsletterForm.template}
                      onValueChange={(value) => setNewsletterForm({ ...newsletterForm, template: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default Template</SelectItem>
                        <SelectItem value="newsletter">Newsletter Template</SelectItem>
                        <SelectItem value="announcement">Announcement Template</SelectItem>
                        <SelectItem value="event">Event Template</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="recipients">Recipients</Label>
                    <Select
                      value={newsletterForm.recipients}
                      onValueChange={(value) => setNewsletterForm({ ...newsletterForm, recipients: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Subscribers (2,847)</SelectItem>
                        <SelectItem value="uganda">Uganda Farmers (1,250)</SelectItem>
                        <SelectItem value="events">Event Attendees (890)</SelectItem>
                        <SelectItem value="partners">Partners (156)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your newsletter content here..."
                    rows={8}
                    value={newsletterForm.content}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, content: e.target.value })}
                  />
                </div>
                <div className="flex gap-4">
                  <Button className="cursor-pointer">
                    <Send className="h-4 w-4 mr-2" />
                    Send Now
                  </Button>
                  <Button variant="outline" className="cursor-pointer bg-transparent">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" className="cursor-pointer bg-transparent">
                    Save Draft
                  </Button>
                  <Button variant="ghost" onClick={() => setShowCreateForm(false)} className="cursor-pointer">
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Newsletter List */}
        <Card>
          <CardHeader>
            <CardTitle>Newsletter Campaigns</CardTitle>
            <CardDescription>Manage your email campaigns and track performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNewsletters.map((newsletter) => (
                <div key={newsletter.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{newsletter.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{newsletter.subject}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {newsletter.recipients} recipients
                        </span>
                        {newsletter.status === "sent" && (
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {newsletter.openRate} open rate
                          </span>
                        )}
                        {newsletter.sentAt && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {newsletter.status === "sent" ? "Sent" : "Scheduled"}:{" "}
                            {new Date(newsletter.sentAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(newsletter.status)}>{newsletter.status}</Badge>
                      <Button variant="outline" size="sm" className="cursor-pointer bg-transparent">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
