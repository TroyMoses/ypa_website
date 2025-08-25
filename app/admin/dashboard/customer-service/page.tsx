"use client"

import { ProtectedRoute } from "@/components/admin/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Clock, CheckCircle, AlertCircle, Reply, Search } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

// Mock feedback data
const mockFeedback = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Partnership Inquiry",
    message:
      "I'm interested in partnering with YPA for our agricultural project in Kenya. We have 500 small-scale farmers who could benefit from your training programs.",
    status: "pending",
    createdAt: "2024-01-15T10:30:00Z",
    priority: "high",
    response: null,
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    subject: "Training Program Question",
    message:
      "Can you provide more information about your youth training programs? I'm particularly interested in the duration and certification process.",
    status: "in-progress",
    createdAt: "2024-01-14T14:20:00Z",
    priority: "medium",
    response: "Thank you for your inquiry. Our training programs typically run for 3 months...",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    subject: "Technical Support",
    message: "I'm having trouble accessing the member portal. Can you help me reset my password?",
    status: "resolved",
    createdAt: "2024-01-13T09:15:00Z",
    priority: "low",
    response: "Your password has been reset. Please check your email for the new login credentials.",
  },
  {
    id: 4,
    name: "Grace Nakamura",
    email: "grace@example.com",
    subject: "Event Registration",
    message:
      "I would like to register for the upcoming Agricultural Innovation Summit. Is there still space available?",
    status: "pending",
    createdAt: "2024-01-16T16:45:00Z",
    priority: "medium",
    response: null,
  },
]

export default function CustomerServiceDashboard() {
  return (
    <ProtectedRoute allowedRoles={["customer_service"]}>
      <CustomerServiceContent />
    </ProtectedRoute>
  )
}

function CustomerServiceContent() {
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null)
  const [response, setResponse] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-orange-100 text-orange-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleSendResponse = () => {
    if (!response.trim()) {
      toast.error("Please enter a response")
      return
    }

    toast.success("Response sent successfully!")
    setResponse("")
    // In real implementation, this would update the feedback status
  }

  const handleStatusChange = (newStatus: string) => {
    toast.success(`Status updated to ${newStatus}`)
    // In real implementation, this would update the feedback in the backend
  }

  const filteredFeedback = mockFeedback.filter((feedback) => {
    const matchesStatus = filterStatus === "all" || feedback.status === filterStatus
    const matchesPriority = filterPriority === "all" || feedback.priority === filterPriority
    const matchesSearch =
      searchTerm === "" ||
      feedback.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.email.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesStatus && matchesPriority && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Service Dashboard</h1>
          <p className="text-gray-600">Manage customer feedback and inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Feedback</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">8</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">5</p>
                </div>
                <AlertCircle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resolved</p>
                  <p className="text-2xl font-bold text-green-600">11</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feedback List */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Feedback</CardTitle>
              <CardDescription>Customer inquiries and feedback submissions</CardDescription>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search feedback..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className={`p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedFeedback?.id === feedback.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedFeedback(feedback)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{feedback.name}</h4>
                        <p className="text-sm text-gray-600">{feedback.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(feedback.priority)}>{feedback.priority}</Badge>
                        <Badge className={getStatusColor(feedback.status)}>{feedback.status}</Badge>
                      </div>
                    </div>
                    <h5 className="font-medium text-gray-800 mb-1">{feedback.subject}</h5>
                    <p className="text-sm text-gray-600 line-clamp-2">{feedback.message}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(feedback.createdAt).toLocaleDateString()} at{" "}
                      {new Date(feedback.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feedback Detail */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback Details</CardTitle>
              <CardDescription>
                {selectedFeedback ? "Respond to customer inquiry" : "Select a feedback item to view details"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedFeedback ? (
                <Tabs defaultValue="details" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="details" className="cursor-pointer">
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="response" className="cursor-pointer">
                      Response
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900">{selectedFeedback.name}</h4>
                        <p className="text-sm text-gray-600">{selectedFeedback.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(selectedFeedback.priority)}>
                          {selectedFeedback.priority}
                        </Badge>
                        <Badge className={getStatusColor(selectedFeedback.status)}>{selectedFeedback.status}</Badge>
                      </div>
                    </div>
                    <h5 className="font-medium text-gray-800 mb-2">{selectedFeedback.subject}</h5>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{selectedFeedback.message}</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      Received: {new Date(selectedFeedback.createdAt).toLocaleString()}
                    </p>

                    {selectedFeedback.response && (
                      <div className="border-t pt-4">
                        <h6 className="font-medium text-gray-900 mb-2">Previous Response</h6>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700">{selectedFeedback.response}</p>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="response" className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Status</label>
                      <Select value={selectedFeedback.status} onValueChange={handleStatusChange}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Response</label>
                      <Textarea
                        placeholder="Type your response here..."
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        rows={6}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleSendResponse} className="cursor-pointer">
                        <Reply className="h-4 w-4 mr-2" />
                        Send Response
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleStatusChange("resolved")}
                        className="cursor-pointer bg-transparent"
                      >
                        Mark as Resolved
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Select a feedback item to view details and respond</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
