import { DollarSign, Upload, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Funding() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Funding Application</h1>
        <p className="mt-2 text-muted-foreground">
          Apply to angel networks and investment programs
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Application Form */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Application Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Company Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input id="companyName" placeholder="Enter company name" className="border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stage">Stage *</Label>
                  <Select>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Idea Stage</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="early">Early Revenue</SelectItem>
                      <SelectItem value="growth">Growth Stage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="d2c">D2C</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="healthtech">Healthtech</SelectItem>
                      <SelectItem value="edtech">Edtech</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Company Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe your company and what problem you're solving"
                    rows={4}
                    className="border-border"
                  />
                </div>
              </div>

              {/* Funding Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Funding Details</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="fundingType">Funding Type *</Label>
                  <Select>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select funding type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seed">Seed Round</SelectItem>
                      <SelectItem value="pre-series-a">Pre-Series A</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="angel">Angel Investment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Funding Amount Required *</Label>
                  <Input id="amount" type="number" placeholder="Amount in USD" className="border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="use">Use of Funds *</Label>
                  <Textarea
                    id="use"
                    placeholder="Explain how you plan to use the funds"
                    rows={4}
                    className="border-border"
                  />
                </div>
              </div>

              {/* Traction */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Traction & Metrics</h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="revenue">Monthly Revenue</Label>
                    <Input id="revenue" type="number" placeholder="In USD" className="border-border" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="users">Number of Users/Customers</Label>
                    <Input id="users" type="number" placeholder="Total count" className="border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="traction">Key Achievements</Label>
                  <Textarea
                    id="traction"
                    placeholder="List your key achievements and milestones"
                    rows={3}
                    className="border-border"
                  />
                </div>
              </div>

              {/* Documents */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Documents</h3>
                
                <div className="space-y-3">
                  <div className="rounded-lg border border-dashed border-border p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-foreground">Pitch Deck (PDF)</p>
                    <p className="text-xs text-muted-foreground">Max 20MB</p>
                    <Button variant="outline" className="mt-3 border-primary text-primary hover:bg-primary/10" size="sm">
                      Upload File
                    </Button>
                  </div>

                  <div className="rounded-lg border border-dashed border-border p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-foreground">Financial Projections (Excel/PDF)</p>
                    <p className="text-xs text-muted-foreground">Max 20MB</p>
                    <Button variant="outline" className="mt-3 border-primary text-primary hover:bg-primary/10" size="sm">
                      Upload File
                    </Button>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Application Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Be clear and concise in your descriptions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Provide accurate financial information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Include key metrics and traction data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Upload professional pitch deck</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Highlight your unique value proposition</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Processing Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Applications are typically reviewed within 2-3 weeks. You will receive a notification
                about the status of your application.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with our funding mentors to get guidance on your application.
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                Find a Mentor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
