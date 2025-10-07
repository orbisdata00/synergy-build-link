import { Award, Calendar, CreditCard, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Membership() {
  const benefits = [
    "Access to all events and workshops",
    "Mentor directory and connection requests",
    "Sub-community participation",
    "Resource hub access",
    "Priority support",
    "Exclusive networking sessions",
  ];

  const tiers = [
    {
      name: "Basic",
      price: "$29",
      period: "month",
      description: "Perfect for early-stage founders",
      features: [
        "Access to community events",
        "Basic mentor connections",
        "Resource hub access",
        "General community access",
      ],
    },
    {
      name: "Pro",
      price: "$79",
      period: "month",
      description: "For growing startups",
      features: [
        "Everything in Basic",
        "Unlimited mentor connections",
        "Priority event registration",
        "1-on-1 mentorship sessions",
        "Funding application support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For established companies",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom networking events",
        "Investor introductions",
        "Premium visibility",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Membership Status</h1>
        <p className="mt-2 text-muted-foreground">Manage your membership and access benefits</p>
      </div>

      {/* Current Status */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Tier</p>
                <p className="text-2xl font-bold text-foreground">Pro</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Renewal Date</p>
                <p className="text-xl font-bold text-foreground">Feb 15, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="text-xl font-bold text-foreground">Jan 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefits */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Your Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Options */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Upgrade Your Membership</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`shadow-soft hover:shadow-medium transition-shadow ${
                tier.popular ? "border-2 border-primary" : ""
              }`}
            >
              {tier.popular && (
                <div className="bg-gradient-to-r from-primary to-secondary text-center py-2">
                  <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  {tier.popular ? "Current Plan" : "Upgrade"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Jan 15, 2025", amount: "$79.00", status: "Paid" },
              { date: "Dec 15, 2024", amount: "$79.00", status: "Paid" },
              { date: "Nov 15, 2024", amount: "$79.00", status: "Paid" },
            ].map((bill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border"
              >
                <div>
                  <p className="font-medium text-foreground">{bill.date}</p>
                  <p className="text-sm text-muted-foreground">Pro Membership</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{bill.amount}</p>
                  <Badge variant="secondary" className="text-xs">
                    {bill.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
