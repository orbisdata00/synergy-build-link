import { Users, Calendar, MessageSquare, Eye, TrendingUp, Award } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function Index() {
  const stats = [{
    title: "Total Connections",
    value: "247",
    icon: Users,
    trend: "+12 this week"
  }, {
    title: "Events Attended",
    value: "18",
    icon: Calendar,
    trend: "3 upcoming"
  }, {
    title: "Messages",
    value: "42",
    icon: MessageSquare,
    trend: "8 unread"
  }, {
    title: "Profile Views",
    value: "1.2K",
    icon: Eye,
    trend: "+18% this month"
  }];
  const recentActivities = [{
    type: "event",
    title: "Women Founders Summit 2025",
    description: "Successfully registered for the upcoming summit",
    time: "2 hours ago",
    badge: "Event"
  }, {
    type: "connection",
    title: "Sarah Chen accepted your connection request",
    description: "Marketing expert with 10+ years experience",
    time: "5 hours ago",
    badge: "Connection"
  }, {
    type: "mentor",
    title: "New mentor recommendation",
    description: "Dr. Alex Kumar specializes in SaaS growth strategy",
    time: "1 day ago",
    badge: "Mentor"
  }, {
    type: "community",
    title: "New discussion in D2C Founders",
    description: "Topic: Scaling customer acquisition channels",
    time: "2 days ago",
    badge: "Community"
  }];
  const upcomingEvents = [{
    title: "Pitch Perfect Workshop",
    date: "Jan 15, 2025",
    time: "10:00 AM",
    attendees: 45
  }, {
    title: "Investor Networking Mixer",
    date: "Jan 18, 2025",
    time: "6:00 PM",
    attendees: 120
  }, {
    title: "Product Launch Strategies",
    date: "Jan 22, 2025",
    time: "2:00 PM",
    attendees: 67
  }];
  const mentorRecommendations = [{
    name: "Dr. Alex Kumar",
    expertise: "SaaS Growth Strategy",
    experience: "15+ years",
    availability: "Available"
  }, {
    name: "Maria Rodriguez",
    expertise: "Fundraising & VC Relations",
    experience: "12+ years",
    availability: "Limited slots"
  }, {
    name: "James Chen",
    expertise: "Product Development",
    experience: "10+ years",
    availability: "Available"
  }];
  return <div className="space-y-12 pb-12">
      {/* Welcome Section */}
      <div className="rounded-3xl bg-card p-12 shadow-large border border-border/50">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold text-foreground tracking-tight">Welcome back, User!</h1>
          <p className="mt-4 text-xl text-muted-foreground">Here's what's happening in your network today</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Activities */}
        <Card className="lg:col-span-2 shadow-medium border-0">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => <div key={index} className="flex items-start gap-4 rounded-2xl bg-secondary/50 p-6 transition-all hover:bg-secondary hover:shadow-soft">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-foreground text-base">{activity.title}</h4>
                      <Badge variant="secondary" className="text-xs font-medium px-2.5 py-0.5">
                        {activity.badge}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                    <p className="mt-3 text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Content */}
        <div className="space-y-8">
          {/* Upcoming Events */}
          <Card className="shadow-medium border-0">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => <div key={index} className="rounded-2xl bg-secondary/50 p-4 transition-all hover:bg-secondary hover:shadow-soft">
                    <h4 className="font-semibold text-foreground text-sm">{event.title}</h4>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{event.date}</span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>)}
              </div>
              <Button className="mt-6 w-full bg-primary hover:bg-primary/90 shadow-soft font-medium" size="lg">
                View All Events
              </Button>
            </CardContent>
          </Card>

          {/* Mentor Recommendations */}
          <Card className="shadow-medium border-0">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                Recommended Mentors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mentorRecommendations.map((mentor, index) => <div key={index} className="rounded-2xl bg-secondary/50 p-4 transition-all hover:bg-secondary hover:shadow-soft">
                    <h4 className="font-semibold text-foreground text-sm">{mentor.name}</h4>
                    <p className="mt-2 text-xs text-muted-foreground">{mentor.expertise}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{mentor.experience}</span>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {mentor.availability}
                      </Badge>
                    </div>
                  </div>)}
              </div>
              <Button variant="outline" className="mt-6 w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium" size="lg">
                Browse All Mentors
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
}