"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Plus, Edit, Trash2, Eye, Calendar, ImageIcon, Save } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

// Mock content data
const mockContent = [
  {
    id: 1,
    title: "YPA Launches New Training Program in Uganda",
    type: "news",
    status: "published",
    excerpt:
      "Youth Platform Africa announces comprehensive agricultural training program for young farmers across Uganda.",
    content: "Full article content here...",
    author: "Admin User",
    publishDate: "2024-01-15",
    image: "/placeholder.svg?height=200&width=400&text=Training+Program",
    tags: ["training", "uganda", "agriculture"],
  },
  {
    id: 2,
    title: "Agricultural Innovation Summit 2024",
    type: "event",
    status: "draft",
    excerpt: "Join us for the biggest agribusiness event of the year featuring industry leaders and innovators.",
    content: "Event details and agenda...",
    author: "Media Team",
    publishDate: "2024-02-20",
    image: "/placeholder.svg?height=200&width=400&text=Innovation+Summit",
    tags: ["event", "innovation", "summit"],
  },
  {
    id: 3,
    title: "Sustainable Farming Practices for Small-Scale Farmers",
    type: "blog",
    status: "published",
    excerpt: "Learn about eco-friendly farming techniques that can increase yield while protecting the environment.",
    content: "Blog post content...",
    author: "Expert Writer",
    publishDate: "2024-01-12",
    image: "/placeholder.svg?height=200&width=400&text=Sustainable+Farming",
    tags: ["sustainability", "farming", "environment"],
  },
]

export default function ContentManagementPage() {
  return (
    <ProtectedRoute allowedRoles={["i.t"]}>
      <ContentManagementContent />
    </ProtectedRoute>
  )
}

function ContentManagementContent() {
  const [selectedContent, setSelectedContent] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [contentForm, setContentForm] = useState({
    title: "",
    type: "news",
    excerpt: "",
    content: "",
    publishDate: "",
    image: "",
    tags: "",
    status: "draft",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
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

  const handleEdit = (content: any) => {
    setSelectedContent(content)
    setContentForm({
      title: content.title,
      type: content.type,
      excerpt: content.excerpt,
      content: content.content,
      publishDate: content.publishDate,
      image: content.image,
      tags: content.tags.join(", "),
      status: content.status,
    })
    setIsEditing(true)
  }

  const handleSave = () => {
    // Mock save functionality
    toast.success("Content saved successfully!")
    setIsEditing(false)
    setSelectedContent(null)
  }

  const handleDelete = (id: number) => {
    // Mock delete functionality
    toast.success("Content deleted successfully!")
  }

  const resetForm = () => {
    setContentForm({
      title: "",
      type: "news",
      excerpt: "",
      content: "",
      publishDate: "",
      image: "",
      tags: "",
      status: "draft",
    })
    setIsEditing(false)
    setSelectedContent(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management System</h1>
              <p className="text-gray-600">Manage news, events, and blog articles</p>
            </div>
            <Button onClick={() => setIsEditing(true)} className="cursor-pointer">
              <Plus className="h-4 w-4 mr-2" />
              Create Content
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Content</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-green-600">124</p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Drafts</p>
                  <p className="text-2xl font-bold text-orange-600">32</p>
                </div>
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-blue-600">18</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Library</CardTitle>
                <CardDescription>All your news, events, and blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContent.map((content) => (
                    <div key={content.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ImageIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 line-clamp-1">{content.title}</h4>
                              <p className="text-sm text-gray-600 line-clamp-2 mt-1">{content.excerpt}</p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Badge className={getTypeColor(content.type)}>{content.type}</Badge>
                              <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>By {content.author}</span>
                              <span>{new Date(content.publishDate).toLocaleDateString()}</span>
                              <span>{content.tags.join(", ")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(content)}
                                className="cursor-pointer bg-transparent"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDelete(content.id)}
                                className="cursor-pointer bg-transparent text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>
                  {isEditing ? (selectedContent ? "Edit Content" : "Create Content") : "Content Editor"}
                </CardTitle>
                <CardDescription>
                  {isEditing ? "Fill in the details below" : "Select content to edit or create new"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter content title"
                        value={contentForm.title}
                        onChange={(e) => setContentForm({ ...contentForm, title: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="type">Type</Label>
                        <Select
                          value={contentForm.type}
                          onValueChange={(value) => setContentForm({ ...contentForm, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="news">News</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="blog">Blog</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select
                          value={contentForm.status}
                          onValueChange={(value) => setContentForm({ ...contentForm, status: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief description..."
                        rows={3}
                        value={contentForm.excerpt}
                        onChange={(e) => setContentForm({ ...contentForm, excerpt: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        placeholder="Write your content here..."
                        rows={6}
                        value={contentForm.content}
                        onChange={(e) => setContentForm({ ...contentForm, content: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="publishDate">Publish Date</Label>
                      <Input
                        id="publishDate"
                        type="date"
                        value={contentForm.publishDate}
                        onChange={(e) => setContentForm({ ...contentForm, publishDate: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">Featured Image URL</Label>
                      <Input
                        id="image"
                        placeholder="https://example.com/image.jpg"
                        value={contentForm.image}
                        onChange={(e) => setContentForm({ ...contentForm, image: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="tags">Tags</Label>
                      <Input
                        id="tags"
                        placeholder="agriculture, training, uganda"
                        value={contentForm.tags}
                        onChange={(e) => setContentForm({ ...contentForm, tags: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="flex-1 cursor-pointer">
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" onClick={resetForm} className="cursor-pointer bg-transparent">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="mb-4">Select content to edit or create new content</p>
                    <Button onClick={() => setIsEditing(true)} className="cursor-pointer">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Content
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
