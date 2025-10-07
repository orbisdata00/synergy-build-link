import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Users, Layers, BookOpen, DollarSign, MessageSquare, Award, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
const navigation = [{
  name: "Dashboard",
  href: "/",
  icon: Home
}, {
  name: "Events",
  href: "/events",
  icon: Calendar
}, {
  name: "Mentors",
  href: "/mentors",
  icon: Users
}, {
  name: "Communities",
  href: "/communities",
  icon: Layers
}, {
  name: "Resources",
  href: "/resources",
  icon: BookOpen
}, {
  name: "Funding",
  href: "/funding",
  icon: DollarSign
}, {
  name: "Messages",
  href: "/messages",
  icon: MessageSquare
}, {
  name: "Membership",
  href: "/membership",
  icon: Award
}, {
  name: "Admin",
  href: "/admin",
  icon: Shield
}];
export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  return <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="text-xl font-bold text-primary-foreground">CC</span>
              </div>
              <span className="text-3xl text-slate-600 font-extrabold">CommunityConnect</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navigation.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return <Link key={item.name} to={item.href} className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all", isActive ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>;
            })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">John Founder</span>
              <span className="text-xs text-muted-foreground">ID: 1234-5678-9012-3456</span>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8">{children}</main>
    </div>;
}