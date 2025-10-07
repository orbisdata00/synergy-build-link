import { Search, Filter, Star, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Mentors() {
  const mentors = [
    {
      name: "Dr. Alex Kumar",
      expertise: ["SaaS", "Growth Strategy", "Product Development"],
      experience: "15+ years",
      domain: "Technology",
      availability: "Available",
      rating: 4.9,
      sessions: 120,
      bio: "Former VP of Product at major tech companies. Specialized in helping SaaS startups scale.",
    },
    {
      name: "Maria Rodriguez",
      expertise: ["Fundraising", "VC Relations", "Pitch Coaching"],
      experience: "12+ years",
      domain: "Finance",
      availability: "Limited",
      rating: 4.8,
      sessions: 95,
      bio: "Angel investor and former VC. Helped 50+ startups raise over $100M in funding.",
    },
    {
      name: "James Chen",
      expertise: ["Product Development", "UX Design", "Agile"],
      experience: "10+ years",
      domain: "Product",
      availability: "Available",
      rating: 4.7,
      sessions: 78,
      bio: "Product leader with experience building products used by millions globally.",
    },
    {
      name: "Priya Sharma",
      expertise: ["Marketing", "Brand Strategy", "D2C"],
      experience: "14+ years",
      domain: "Marketing",
      availability: "Available",
      rating: 4.9,
      sessions: 110,
      bio: "Built and scaled multiple D2C brands. Expert in digital marketing and brand positioning.",
    },
    {
      name: "Michael Zhang",
      expertise: ["Operations", "Supply Chain", "Scaling"],
      experience: "16+ years",
      domain: "Operations",
      availability: "Waitlist",
      rating: 4.8,
      sessions: 134,
      bio: "Operations executive who scaled companies from 10 to 1000+ employees.",
    },
    {
      name: "Sarah Williams",
      expertise: ["Legal", "Compliance", "Fundraising"],
      experience: "11+ years",
      domain: "Legal",
      availability: "Available",
      rating: 4.6,
      sessions: 67,
      bio: "Corporate lawyer specializing in startup legal matters and funding rounds.",
    },
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Limited":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Waitlist":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Mentor Directory</h1>
        <p className="mt-2 text-muted-foreground">
          Connect with experienced mentors to accelerate your growth
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, expertise, or domain..."
            className="pl-10 border-border focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Stats Bar */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{mentors.length}</p>
              <p className="text-sm text-muted-foreground">Active Mentors</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {mentors.filter((m) => m.availability === "Available").length}
              </p>
              <p className="text-sm text-muted-foreground">Available Now</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {mentors.reduce((acc, m) => acc + m.sessions, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Sessions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mentor Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor, index) => (
          <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="text-lg font-bold text-primary-foreground">
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{mentor.domain}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      • {mentor.sessions} sessions
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{mentor.experience}</p>
                <p className="text-sm text-foreground">{mentor.bio}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Badge className={getAvailabilityColor(mentor.availability)} variant="outline">
                  {mentor.availability}
                </Badge>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Request Connection
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
