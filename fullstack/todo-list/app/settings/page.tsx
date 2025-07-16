"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface User {
  id: string
  username: string
  email: string
}

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/auth/me")

      if (!response.ok) {
        router.push("/auth/signin")
        return
      }

      const data = await response.json()
      setUser(data.user)
      setUsername(data.user.username)
      setEmail(data.user.email)
    } catch (error) {
      setError("Failed to load user data")
    } finally {
      setLoading(false)
    }
  }

  const showMessage = (message: string, type: "error" | "success") => {
    if (type === "error") {
      setError(message)
      setSuccess("")
    } else {
      setSuccess(message)
      setError("")
    }
    setTimeout(() => {
      setError("")
      setSuccess("")
    }, 3000)
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)

    try {
      const response = await fetch("/api/auth/update-profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          email: email.trim(),
          currentPassword: currentPassword || undefined,
          newPassword: newPassword || undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setUser(data.user)
        setCurrentPassword("")
        setNewPassword("")
        showMessage("Profile updated successfully", "success")
      } else {
        showMessage(data.error || "Failed to update profile", "error")
      }
    } catch (error) {
      showMessage("Failed to update profile", "error")
    } finally {
      setUpdating(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-light text-white">Settings</h1>
            <p className="text-sm text-gray-400">Manage your account</p>
          </div>

          <Link href="/todos" className="btn-secondary text-sm">
            Back to Todos
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4">
        {error && <div className="alert-error mb-4">{error}</div>}
        {success && <div className="alert-success mb-4">{success}</div>}

        <div className="card p-6">
          <h2 className="text-lg font-medium text-white mb-6">Profile Settings</h2>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Username</label>
              <input
                type="text"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="border-t border-gray-800 pt-4 mt-6">
              <h3 className="text-md text-white mb-4">Change Password</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Leave blank to keep current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">New Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Leave blank to keep current password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button type="submit" className="btn-primary" disabled={updating}>
                {updating ? "Updating..." : "Update Profile"}
              </button>
              <Link href="/todos" className="btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
