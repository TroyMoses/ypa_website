"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ImageIcon, Video, Plus, Edit, Eye, Calendar } from "lucide-react"
import { useState } from "react"

// Mock media content data
const mockMediaContent = [
  {
    id: 1,
    title: "YPA Success Stories Video",
    type: "video",
    status: "published",
    views: 1250,
    createdAt: "2024-01-15",
    thumbnail: "/video-thumbnail.png",
  },
  {
    id: 2,
    title: "Agricultural Innovation Infographic",
    type: "image",
    status: "draft",
    views: 0,
    createdAt: "2024-01-14",
    thumbnail: "/infographic.png",
  },
  {
    id: 3,
    title: "Farmer Training Program Article",
    type: "article",
    status: "published",
    views: 890,
    createdAt: "2024-01-12",
    thumbnail: "/open-book-knowledge.png",
  },
]

export default function MediaDashboard() {
  return (
    <ProtectedRoute allowedRoles={["media"]}>
      <MediaContent />
    </ProtectedRoute>
  )
}

function MediaContent() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [contentForm, setContentForm] = useState({
    title: "",
    type: "article",
    content: "",
    tags: "",
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video
      case "image":
        return ImageIcon
      case "article":
        return FileText
      default:
        return FileText
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Media Dashboard</h1>
              <p className="text-gray-600">Create and manage media content</p>
            </div>
            <Button onClick={() => setShowCreateForm(true)} className="cursor-pointer">
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
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-blue-600">45.2K</p>
                </div>
                <Eye className="h-8 w-8 text-blue-600" />
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
        </div>

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="content" className="cursor-pointer">
              Content Library
            </TabsTrigger>
            <TabsTrigger value="create" className="cursor-pointer">
              Create New
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Library</CardTitle>
                <CardDescription>Manage your media content and assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockMediaContent.map((content) => {
                    const IconComponent = getTypeIcon(content.type)
                    return (
                      <Card key={content.id} className="hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                          <IconComponent className="h-12 w-12 text-gray-400" />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-gray-900 line-clamp-2">{content.title}</h4>
                            <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <IconComponent className="h-4 w-4" />
                              {content.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {content.views} views
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mb-3">
                            Created: {new Date(content.createdAt).toLocaleDateString()}
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1 cursor-pointer bg-transparent">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 cursor-pointer bg-transparent">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create New Content</CardTitle>
                <CardDescription>Create articles, upload images, or embed videos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Content Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter content title"
                        value={contentForm.title}
                        onChange={(e) => setContentForm({ ...contentForm, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Content Type</Label>
                      <select
                        id="type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={contentForm.type}
                        onChange={(e) => setContentForm({ ...contentForm, type: e.target.value })}
                      >
                        <option value="article">Article</option>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your content here or provide media URLs..."
                      rows={8}
                      value={contentForm.content}
                      onChange={(e) => setContentForm({ ...contentForm, content: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="Enter tags separated by commas"
                      value={contentForm.tags}
                      onChange={(e) => setContentForm({ ...contentForm, tags: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button className="cursor-pointer">
                      <Plus className="h-4 w-4 mr-2" />
                      Publish Now
                    </Button>
                    <Button variant="outline" className="cursor-pointer bg-transparent">
                      Save Draft
                    </Button>
                    <Button variant="outline" className="cursor-pointer bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
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
