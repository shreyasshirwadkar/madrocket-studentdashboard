import { Search, Bell } from "lucide-react"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

export function Header() {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <img src="/gb.svg" alt="English" className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Button>
        <Avatar>
          <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202025-01-26%2013-41-09-ip1MtV4lrRHAx8f1irDZa1esLIVYBE.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

