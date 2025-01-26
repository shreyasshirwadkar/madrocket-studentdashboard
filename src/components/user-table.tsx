"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "../components/ui/input"
import { ChevronDown, ChevronUp, MoreVertical, Search, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import type { User } from "../types/user"

interface UserTableProps {
  users: User[]
}

export function UserTable({ users }: UserTableProps) {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input placeholder="Search user..." className="pl-9 w-full" />
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                Name
                <button
                  onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
                  className="focus:outline-none"
                >
                  {sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </div>
              </TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {user.verified ? (
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                ) : (
                  <div className="w-6 h-6">-</div>
                )}
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    user.status === "Active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Rows per page:</span>
          <select className="border rounded p-1 text-sm">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">1-5 of 24</span>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

