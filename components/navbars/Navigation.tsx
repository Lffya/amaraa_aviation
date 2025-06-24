import { Plane, X } from 'lucide-react';
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
        style={{ backgroundColor: "#232323" }}
      >
        {/* Header */}
        <div className="p-6 border-b relative" style={{ borderColor: "#c6a35d33" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "#c6a35d" }}
              >
                <Plane className="w-6 h-6" style={{ color: "#232323" }} />
              </div>
              <div>
                <h1
                  className="font-bodoni text-xl font-bold"
                  style={{ color: "#f0efe2" }}
                >
                  Amara Aviation
                </h1>
                <p
                  className="font-montserrat text-xs"
                  style={{ color: "#f0efe2b3" }}
                >
                  Excellence in Aviation
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-all duration-300 group"
              style={{ backgroundColor: "transparent" }}
            >
              <X
                className="w-5 h-5 transition-colors"
                style={{ color: "#f0efe2" }}
              />
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
                      ? 'scale-105 shadow-lg'
                      : ''
                  }`}
                  style={
                    isActiveRoute(item.path)
                      ? {
                          backgroundColor: "#c6a35d",
                          color: "#232323",
                          boxShadow: "0 4px 16px 0 #c6a35d33",
                        }
                      : {
                          color: "#f0efe2",
                        }
                  }
                >
                  <span
                    className="relative z-10 transition-all duration-300 group-hover:pl-8"
                  >
                    {item.label}
                  </span>
                  <div
                    className={`absolute inset-0 transition-transform duration-300 ${
                      isActiveRoute(item.path)
                        ? 'translate-x-0'
                        : '-translate-x-full group-hover:translate-x-0'
                    }`}
                    style={{
                      background: isActiveRoute(item.path)
                        ? "linear-gradient(to right, #c6a35d33 0%, transparent 100%)"
                        : "linear-gradient(to right, #c6a35d1a 0%, transparent 100%)",
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 border-t"
          style={{
            borderColor: "#c6a35d33",
            background: "linear-gradient(to top, #232323 80%, transparent 100%)",
          }}
        >
          <p
            className="font-montserrat text-xs text-center"
            style={{ color: "#f0efe280" }}
          >
            © 2024 Amara Aviation. All rights reserved.
          </p>
        </div>
      </nav>
    </>
  )
};

export default Navigation;

