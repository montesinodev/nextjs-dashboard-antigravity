"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: "currentColor" },
    },
  },
  scales: {
    x: {
      ticks: { color: "currentColor" },
      grid: { color: "rgba(156, 163, 175, 0.2)" }
    },
    y: {
      ticks: { color: "currentColor" },
      grid: { color: "rgba(156, 163, 175, 0.2)" }
    },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: "currentColor" },
    },
  },
};

export function UserGrowthChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Users",
        data: [120, 150, 180, 220, 260, 310, 400, 480, 530, 600, 680, 750],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
    ],
  };
  return (
    <div className="h-64">
      <Line options={commonOptions} data={data} />
    </div>
  );
}

export function MonthlyRevenueChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [3200, 3400, 4100, 3800, 4500, 4700, 5200, 4900, 5300, 5600, 5900, 6200],
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        borderColor: "rgb(16, 185, 129)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="h-64">
      <Bar options={commonOptions} data={data} />
    </div>
  );
}

export function DeviceDistributionChart() {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        data: [62, 30, 8],
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",
          "rgba(139, 92, 246, 0.6)",
          "rgba(245, 158, 11, 0.6)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(245, 158, 11, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="h-64">
      <Doughnut options={doughnutOptions} data={data} />
    </div>
  );
}
