import { Shield, Users, Calendar, BookOpen, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";

export default function Admin() {
  const stats = [
    { title: "Total Members", value: "2,847", icon: Users, trend: "+12% this month" },
    { title: "Active Events", value: "24", icon: Calendar, trend: "6 upcoming" },
    { title: "Resources", value: "156", icon: BookOpen, trend: "12 new" },
    { title: "Communities", value: "8", icon: Layers, trend: "2 new" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            Admin Console
          </h1>
          <p className="mt-2 text-muted-foreground">Manage platform content and members</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Management Tabs */}
      <Tabs defaultValue="members" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Member Directory</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">Add Member</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Member management interface would be displayed here. Features include viewing all members,
                editing profiles, managing roles, and member analytics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Event Management</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">Create Event</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Event management interface for creating, editing, and managing events. Includes
                registration tracking, attendance management, and event analytics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Resource Curation</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">Add Resource</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Resource management for blogs, templates, podcasts, and reports. Upload new content,
                organize categories, and track resource usage.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communities" className="space-y-4">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Community Management</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">Create Community</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage sub-communities, moderate discussions, and oversee community growth. Track
                engagement metrics and member participation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Button variant="outline" className="h-20 border-primary text-primary hover:bg-primary/10">
          <div className="text-center">
            <Users className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">Approve Members</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20 border-primary text-primary hover:bg-primary/10">
          <div className="text-center">
            <Calendar className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">Schedule Event</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20 border-primary text-primary hover:bg-primary/10">
          <div className="text-center">
            <BookOpen className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">Upload Resource</span>
          </div>
        </Button>
        <Button variant="outline" className="h-20 border-primary text-primary hover:bg-primary/10">
          <div className="text-center">
            <Layers className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">Moderate Posts</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
