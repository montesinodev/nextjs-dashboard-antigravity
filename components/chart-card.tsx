"use client";

import React from "react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="rounded-xl p-6 border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:shadow-none transition-colors duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <div className="relative w-full">
        {children}
      </div>
    </div>
  );
}
