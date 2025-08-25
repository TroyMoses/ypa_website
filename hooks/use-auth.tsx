"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type UserRole = "customer_service" | "sales" | "i.t" | "media"

export interface User {
  id: string
  email: string
  role: UserRole
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data for demonstration
const mockUsers: Record<string, { password: string; name: string; role: UserRole }> = {
  "admin@ypa.org": { password: "admin123", name: "Admin User", role: "i.t" },
  "cs@ypa.org": { password: "cs123", name: "Customer Service", role: "customer_service" },
  "sales@ypa.org": { password: "sales123", name: "Sales Manager", role: "sales" },
  "media@ypa.org": { password: "media123", name: "Media Manager", role: "media" },
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = localStorage.getItem("ypa-admin-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Mock authentication
    const mockUser = mockUsers[email]
    if (mockUser && mockUser.password === password && mockUser.role === role) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        role,
        name: mockUser.name,
      }
      setUser(user)
      localStorage.setItem("ypa-admin-user", JSON.stringify(user))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("ypa-admin-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
