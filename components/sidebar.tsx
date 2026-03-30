"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LineChart, Settings, LogOut } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Analytics", href: "/dashboard/analytics", icon: LineChart },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-[240px] shrink-0 h-screen sticky top-0 flex flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 shadow-sm hidden md:flex transition-colors duration-300">
      <div className="flex h-[56px] items-center px-6 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">App Logo</span>
      </div>
      <nav className="flex flex-col gap-2 p-4 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                }`}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <a href="/login" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
          <LogOut className="h-4 w-4" />
          Log out
        </a>
      </div>
    </aside>
  );
}
