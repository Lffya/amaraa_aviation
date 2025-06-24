"use client";
import { useTheme } from "@/components/theme-provider";
import { ChevronDown, Plane } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";


const topNavItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Divisions", path: "/divisions" },
  { label: "Contact Us", path: "/contact" },
];

interface TopNavbarProps {
  onAmaraClick: () => void;
  isSidebarOpen: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ onAmaraClick, isSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // ✅ use useTheme only once
  const { theme, setTheme, resolvedTheme } = useTheme();

  // ✅ Define toggleTheme once
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-amara-dark/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80"
          : "bg-amara-dark dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center  h-16">
          {/* Amara Aviation Logo/Button */}
          <div className="flex flex-1 justify-start">
            <button
              onClick={onAmaraClick}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 group ${
                isSidebarOpen
                  ? "bg-amara-gold text-amara-dark"
                  : "text-amara-light hover:bg-amara-gold/10 hover:text-amara-gold dark:text-gray-100 dark:hover:text-amara-gold"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-300 ${
                  isSidebarOpen ? "bg-amara-dark" : "bg-amara-gold"
                }`}
              >
                <Plane
                  className={`w-5 h-5 transition-all duration-300 ${
                    isSidebarOpen ? "text-amara-gold" : "text-amara-dark"
                  }`}
                />
              </div>
              <span className="font-bodoni text-lg font-bold">Amara Aviation</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isSidebarOpen ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
          </div>
          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 justify-end flex-1">
            {topNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-montserrat font-medium transition-all duration-300 relative group ${
                  isActiveRoute(item.path)
                    ? "text-[#c6a35d]"
                    : "text-amara-light hover:text-[#c6a35d] dark:text-gray-100 dark:hover:text-[#c6a35d]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isActiveRoute(item.path)
                      ? "w-full bg-[#c6a35d]"
                      : "w-0 group-hover:w-full bg-[#c6a35d]"
                  }`}
                />
              </Link>
            ))}
          </div>
          {/* Right side content with space around */}
          <div className="flex items-center space-x-4 pr-4">
            {/* Add any right-side content here, e.g., theme switcher, user menu, etc. */}
            {/* Example: */}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
