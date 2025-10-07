import { BookOpen, FileText, Headphones, BarChart, Download, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resources() {
  const blogs = [
    {
      title: "10 Essential Metrics Every SaaS Founder Should Track",
      author: "Alex Kumar",
      date: "Jan 5, 2025",
      readTime: "8 min",
      category: "SaaS",
    },
    {
      title: "Fundraising in 2025: What VCs Are Looking For",
      author: "Maria Rodriguez",
      date: "Jan 3, 2025",
      readTime: "12 min",
      category: "Funding",
    },
    {
      title: "Building a Strong Brand Identity for D2C",
      author: "Priya Sharma",
      date: "Dec 28, 2024",
      readTime: "10 min",
      category: "Branding",
    },
  ];

  const templates = [
    {
      title: "Pitch Deck Template 2025",
      description: "Proven template used by successful startups",
      downloads: 1243,
      format: "PowerPoint",
    },
    {
      title: "Financial Model for SaaS",
      description: "Comprehensive Excel model for SaaS metrics",
      downloads: 892,
      format: "Excel",
    },
    {
      title: "One-Page Business Plan",
      description: "Concise template for validating your idea",
      downloads: 1567,
      format: "PDF",
    },
  ];

  const podcasts = [
    {
      title: "Building to $10M ARR with Sarah Chen",
      duration: "45 min",
      date: "Jan 8, 2025",
      category: "Growth",
    },
    {
      title: "The Art of Product-Market Fit",
      duration: "32 min",
      date: "Jan 1, 2025",
      category: "Product",
    },
    {
      title: "Scaling Your Team from 10 to 100",
      duration: "38 min",
      date: "Dec 25, 2024",
      category: "Leadership",
    },
  ];

  const reports = [
    {
      title: "State of Indian Startups 2024",
      description: "Comprehensive analysis of startup ecosystem",
      pages: 52,
      date: "Dec 2024",
    },
    {
      title: "D2C Market Trends Report",
      description: "Consumer behavior and market insights",
      pages: 38,
      date: "Nov 2024",
    },
    {
      title: "SaaS Benchmarking Study 2024",
      description: "Industry benchmarks and metrics",
      pages: 45,
      date: "Oct 2024",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Resource Hub</h1>
        <p className="mt-2 text-muted-foreground">
          Curated collection of blogs, templates, podcasts, and reports for founders
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{blogs.length}</p>
                <p className="text-xs text-muted-foreground">Blogs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{templates.length}</p>
                <p className="text-xs text-muted-foreground">Templates</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Headphones className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{podcasts.length}</p>
                <p className="text-xs text-muted-foreground">Podcasts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <BarChart className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">{reports.length}</p>
                <p className="text-xs text-muted-foreground">Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="blogs" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="blogs" className="space-y-4">
          {blogs.map((blog, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {blog.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{blog.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      By {blog.author} • {blog.date}
                    </p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {templates.map((template, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {template.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <Badge variant="outline">{template.format}</Badge>
                      <span className="ml-3 text-muted-foreground">
                        {template.downloads} downloads
                      </span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="podcasts" className="space-y-4">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {podcast.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{podcast.duration}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {podcast.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{podcast.date}</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {reports.map((report, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    {report.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {report.pages} pages • {report.date}
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
