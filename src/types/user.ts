export interface User {
  id: string
  name: string
  company: string
  role: string
  verified: boolean
  status: "Active" | "Banned"
  avatar: string
}

