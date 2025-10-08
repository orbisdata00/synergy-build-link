import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
}
export default function StatCard({
  title,
  value,
  icon: Icon,
  trend
}: StatCardProps) {
  return <Card className="border-0 shadow-medium hover:shadow-large transition-all duration-300 bg-card">
      <CardContent className="p-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-primary/10 p-3">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-semibold text-foreground tracking-tight">{value}</p>
            </div>
            {trend && <p className="text-sm text-muted-foreground">{trend}</p>}
          </div>
        </div>
      </CardContent>
    </Card>;
}