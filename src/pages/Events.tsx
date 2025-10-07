import { Calendar, MapPin, Users, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Events() {
  const events = [
    {
      title: "Women Founders Summit 2025",
      category: "Easy Knowledge",
      date: "Jan 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual",
      attendees: 250,
      spots: 50,
      description: "Annual summit bringing together women founders for networking and knowledge sharing",
    },
    {
      title: "Pitch Perfect Workshop",
      category: "Partner Hosted",
      date: "Jan 18, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Innovation Hub, Mumbai",
      attendees: 45,
      spots: 15,
      description: "Learn to craft the perfect pitch from seasoned investors and successful founders",
    },
    {
      title: "D2C Growth Strategies",
      category: "Community Organized",
      date: "Jan 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual",
      attendees: 120,
      spots: 30,
      description: "Expert panel discussion on scaling D2C brands in competitive markets",
    },
    {
      title: "SaaS Metrics Deep Dive",
      category: "Easy Knowledge",
      date: "Jan 25, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "Tech Park, Bangalore",
      attendees: 80,
      spots: 20,
      description: "Comprehensive workshop on tracking and optimizing key SaaS metrics",
    },
    {
      title: "Investor Networking Mixer",
      category: "Partner Hosted",
      date: "Jan 28, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Hotel, Delhi",
      attendees: 150,
      spots: 0,
      description: "Exclusive networking event with angel investors and VCs",
    },
    {
      title: "Product Launch Strategies",
      category: "Community Organized",
      date: "Feb 1, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual",
      attendees: 95,
      spots: 40,
      description: "Learn proven strategies for successful product launches from industry experts",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Easy Knowledge":
        return "bg-primary/10 text-primary border-primary/20";
      case "Partner Hosted":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Community Organized":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Events</h1>
        <p className="mt-2 text-muted-foreground">
          Discover and register for upcoming events, workshops, and networking opportunities
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            className="pl-10 border-border focus:ring-primary"
          />
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Calendar className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="easy">Easy Knowledge</TabsTrigger>
          <TabsTrigger value="partner">Partner Hosted</TabsTrigger>
          <TabsTrigger value="community">Community Organized</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge className={getCategoryColor(event.category)} variant="outline">
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} registered</span>
                      {event.spots > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {event.spots} spots left
                        </Badge>
                      )}
                      {event.spots === 0 && (
                        <Badge variant="destructive" className="ml-2">
                          Full
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={event.spots === 0}
                  >
                    {event.spots === 0 ? "Event Full" : "Register Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="easy">
          <div className="grid gap-6 md:grid-cols-2">
            {events
              .filter((e) => e.category === "Easy Knowledge")
              .map((event, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="partner">
          <div className="grid gap-6 md:grid-cols-2">
            {events
              .filter((e) => e.category === "Partner Hosted")
              .map((event, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="community">
          <div className="grid gap-6 md:grid-cols-2">
            {events
              .filter((e) => e.category === "Community Organized")
              .map((event, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
