"use client";

import { useState } from "react";
import {
  Search,
  Home,
  BarChart3,
  Wallet,
  MapPin,
  Users,
  Bell,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import logo from "./assets/logo.svg";
import avatar from "./assets/avatar.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
    { icon: Wallet, label: "Wallet", href: "/wallet" },
    { icon: MapPin, label: "Plan to trip", href: "/plan-trip" },
    { icon: Users, label: "Commission for life", href: "/commission" },
  ];

  // w-full h-16 mx-auto px-6 sm:px-6 lg:px-8
  // flex items-center justify-between h-16 w-full

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className=" px-6 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <img className="w-[38px] h-[36px]" src={logo} />
              </div>
            </div>
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="block w-[full] pl-10 pr-3 py-2 border-none border-gray-500 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                <item.icon className="h-5 w-5 mb-1 group-hover:text-blue-600" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Subscribe Button */}
            <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
              Subscribe
            </Button>

            {/* Notification Bell */}
            <button className="p-2 flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Bell className="h-5 w-5" />
              <span className="text-xs font-medium">Notification</span>
            </button>

            {/* Cart */}
            <button className="p-2 flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs font-medium">Cart</span>
            </button>

            {/* Create Text - Hidden on mobile */}
            <button className="p-2 flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline-block text-gray-600 text-sm font-medium">
                Create
              </span>
            </button>

            {/* User Avatar */}
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={avatar}
                alt="User avatar"
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="grid grid-cols-2 gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
