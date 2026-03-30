import { ChartCard } from "@/components/chart-card";
import { UserGrowthChart, MonthlyRevenueChart, DeviceDistributionChart } from "@/components/analytics-charts";

export default function AnalyticsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="User Growth (Last 12 Months)">
          <UserGrowthChart />
        </ChartCard>
        <ChartCard title="Monthly Revenue">
          <MonthlyRevenueChart />
        </ChartCard>
        <ChartCard title="User Device Distribution">
          <DeviceDistributionChart />
        </ChartCard>
      </div>
    </div>
  );
}
