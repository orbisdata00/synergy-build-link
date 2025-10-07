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
  return <div className="space-y-8">
      {/* Welcome Section */}
      <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground shadow-medium">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, User!</h1>
            <p className="mt-2 text-lg opacity-90">Here's what's happening in your network today</p>
          </div>
          <Award className="h-16 w-16 opacity-50" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activities */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => <div key={index} className="flex items-start gap-4 rounded-lg border border-border p-4 transition-all hover:border-primary/50 hover:shadow-soft">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{activity.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {activity.badge}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => <div key={index} className="rounded-lg border border-border p-3 transition-all hover:border-primary/50">
                    <h4 className="font-semibold text-foreground">{event.title}</h4>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{event.date}</span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>)}
              </div>
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90" size="sm">
                View All Events
              </Button>
            </CardContent>
          </Card>

          {/* Mentor Recommendations */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Recommended Mentors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mentorRecommendations.map((mentor, index) => <div key={index} className="rounded-lg border border-border p-3 transition-all hover:border-primary/50">
                    <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{mentor.expertise}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{mentor.experience}</span>
                      <Badge variant="outline" className="text-xs">
                        {mentor.availability}
                      </Badge>
                    </div>
                  </div>)}
              </div>
              <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary/10" size="sm">
                Browse All Mentors
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
}