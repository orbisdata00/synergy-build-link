import { Users, MessageSquare, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Communities() {
  const communities = [
    {
      name: "Women Founders",
      description: "Empowering women entrepreneurs to build and scale successful ventures",
      members: 342,
      discussions: 89,
      growth: "+15% this month",
      topics: ["Networking", "Funding", "Work-Life Balance", "Leadership"],
    },
    {
      name: "D2C Founders",
      description: "Direct-to-consumer brand builders sharing strategies and insights",
      members: 278,
      discussions: 124,
      growth: "+22% this month",
      topics: ["Marketing", "Supply Chain", "Customer Acquisition", "Branding"],
    },
    {
      name: "SaaS Founders",
      description: "Software entrepreneurs discussing product, growth, and scaling",
      members: 456,
      discussions: 156,
      growth: "+18% this month",
      topics: ["Product", "Growth", "Metrics", "Fundraising"],
    },
    {
      name: "Early Stage Founders",
      description: "Community for founders in the ideation and MVP stage",
      members: 512,
      discussions: 203,
      growth: "+25% this month",
      topics: ["Validation", "MVP", "Co-founders", "First Customers"],
    },
    {
      name: "Tech Founders",
      description: "Technology entrepreneurs building innovative solutions",
      members: 389,
      discussions: 167,
      growth: "+20% this month",
      topics: ["Technology", "Engineering", "AI/ML", "Innovation"],
    },
    {
      name: "Social Impact Founders",
      description: "Entrepreneurs creating businesses that drive positive change",
      members: 234,
      discussions: 78,
      growth: "+12% this month",
      topics: ["Impact", "Sustainability", "Social Good", "Mission"],
    },
  ];

  const recentDiscussions = [
    {
      community: "D2C Founders",
      title: "Best strategies for reducing customer acquisition cost?",
      author: "Sarah K.",
      replies: 23,
      time: "2 hours ago",
    },
    {
      community: "SaaS Founders",
      title: "How to price your SaaS product in different markets?",
      author: "Mike R.",
      replies: 18,
      time: "4 hours ago",
    },
    {
      community: "Women Founders",
      title: "Navigating work-life balance during rapid growth",
      author: "Priya S.",
      replies: 31,
      time: "5 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Sub-Communities</h1>
        <p className="mt-2 text-muted-foreground">
          Join thematic groups and connect with like-minded founders
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{communities.length}</p>
              <p className="text-sm text-muted-foreground">Active Communities</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {communities.reduce((acc, c) => acc + c.members, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Members</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {communities.reduce((acc, c) => acc + c.discussions, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Active Discussions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Communities Grid */}
        <div className="lg:col-span-2 space-y-4">
          {communities.map((community, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{community.name}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{community.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{community.members} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>{community.discussions} discussions</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span>{community.growth}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {community.topics.map((topic, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Join Community</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Discussions Sidebar */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Recent Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-3 transition-all hover:border-primary/50"
                  >
                    <Badge variant="outline" className="mb-2 text-xs">
                      {discussion.community}
                    </Badge>
                    <h4 className="font-semibold text-foreground text-sm">{discussion.title}</h4>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary/10" size="sm">
                View All Discussions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
