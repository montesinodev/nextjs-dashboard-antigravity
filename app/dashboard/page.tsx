import { StatCard } from "@/components/stat-card";
import { Users, CreditCard, DollarSign, Activity } from "lucide-react";

export default function DashboardPage() {
  const kpis = [
    { title: "Users Today", value: "128", icon: <Users className="h-5 w-5" /> },
    { title: "Active Subscriptions", value: "72", icon: <CreditCard className="h-5 w-5" /> },
    { title: "Monthly Revenue", value: "$4,932", icon: <DollarSign className="h-5 w-5" /> },
    { title: "Server Uptime", value: "99.98%", icon: <Activity className="h-5 w-5" /> },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <StatCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            icon={kpi.icon}
          />
        ))}
      </div>
    </div>
  );
}
