"use client";
import { useTheme } from "@/components/theme-provider";
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Divisions', path: '/divisions' },
  { label: 'News & Media', path: '/news' },
  { label: 'Investor Relations', path: '/investor-relations' },
  { label: 'Career Portal', path: '/careers' },
  { label: 'Corporate Governance', path: '/governance' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Contact Us', path: '/contact' }
];

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { theme } = useTheme(); // Ensure re-render on theme change

  const isActiveRoute = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] z-50 transform transition-all duration-500 ease-out ${
          isOpen 
            ? 'translate-x-0 shadow-2xl' 
            : '-translate-x-full'
        }`}
        style={{
          backgroundColor: theme === "dark" ? "#18181b" : "#FFFFFF",
        }}
      >
        {/* Header */}
        <div className="p-6 border-b border-amara-gold/20 dark:border-amara-gold/30 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Replace Plane icon with image */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-amara-gold">
                <Image
                  src="/amaraa.png"
                  alt="Amara Aviation"
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8"
                  priority
                />
              </div>
              <div>
                <h1 className="font-bodoni text-xl font-bold text-amara-light dark:text-gray-100">
                  Amara Aviation
                </h1>
                <p className="font-montserrat text-xs text-amara-light/70 dark:text-gray-400">
                  Excellence in Aviation
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-amara-gold/10 transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-amara-light group-hover:text-amara-gold dark:text-gray-100 dark:group-hover:text-amara-gold transition-colors" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-6 px-4 overflow-y-auto max-h-[calc(100vh-120px)]">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li
                key={item.path}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`${isOpen ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}
              >
                <Link
                  href={item.path}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-xl font-montserrat font-medium transition-all duration-300 group relative overflow-hidden ${
                    isActiveRoute(item.path)
                      ? 'bg-amara-gold text-amara-dark transform scale-105'
                      : 'text-amara-light dark:text-[#f0efe2]'
                  }`}
                  style={
                    !isActiveRoute(item.path)
                      ? { transition: 'all 0.3s' }
                      : undefined
                  }
                >
                  <span
                    className="relative z-10 transition-all duration-300 group-hover:pl-8 group-hover:text-[#c6a35d] group-hover:shadow-[0_0_0_2px_#c6a35d] group-hover:rounded"
                    style={{
                      transition: 'all 0.3s',
                      boxShadow: 'none',
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-amara-gold/20 to-transparent transform transition-transform duration-300 ${
                      isActiveRoute(item.path)
                        ? 'translate-x-0'
                        : '-translate-x-full group-hover:translate-x-0'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-amara-gold/20 dark:border-amara-gold/30 bg-gradient-to-t from-amara-dark to-transparent dark:from-gray-900">
          <p className="font-montserrat text-xs text-amara-light/50 dark:text-gray-500 text-center">
            © 2024 Amara Aviation. All rights reserved.
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
