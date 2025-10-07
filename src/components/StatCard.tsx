import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
}

export default function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <Card className="border border-white/20 backdrop-blur-lg bg-white/10 shadow-soft hover:shadow-medium transition-all">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm p-4 border border-white/30">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-3">
              <p className="text-3xl font-bold text-foreground">{value}</p>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
            </div>
            {trend && <p className="mt-2 text-xs text-primary font-medium">{trend}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
