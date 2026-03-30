"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="rounded-xl p-6 border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:shadow-none transition-colors duration-300 grid grid-cols-[1fr_auto] items-center gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          {value}
        </p>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 transition-colors duration-300">
        {icon}
      </div>
    </div>
  );
}
