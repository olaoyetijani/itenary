"use client";

import {
  BarChart3,
  Building2,
  Plane,
  BookOpen,
  FileText,
  Building,
  Cross,
  Package,
  ChevronDown,
} from "lucide-react";

const navigationItems = [
  { title: "Activities", icon: BarChart3, url: "/activities" },
  { title: "Hotels", icon: Building2, url: "/hotels" },
  { title: "Flights", icon: Plane, url: "/flights" },
  { title: "Study", icon: BookOpen, url: "/study" },
  { title: "Visa", icon: FileText, url: "/visa" },
  { title: "Immigration", icon: Building, url: "/immigration" },
  { title: "Medical", icon: Cross, url: "/medical" },
  { title: "Vacation Packages", icon: Package, url: "/vacation-packages" },
];

export function AppSidebar() {
  return (
    <div className="w-64 mx-8 h-[600px] bg-white border-r border-gray-200 flex flex-col">
      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="w-full flex items-center gap-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors"
              >
                <item.icon className="h-5 w-5 text-gray-500" />
                <span className="font-medium">{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-1 border-t border-gray-100">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">go</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Personal Account
            </p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
