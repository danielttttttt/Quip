'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const authenticatedMenuItems = [
    { href: '/home', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/profile', label: 'Profile' },
  ];

  const unauthenticatedMenuItems = [
    { href: '/', label: 'Home' },
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Sign Up' },
  ];

  const menuItems = user ? authenticatedMenuItems : unauthenticatedMenuItems;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={user ? "/home" : "/"} className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors duration-200">
              Quip
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
              {user && (
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-50"
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* User info (desktop) */}
          {user && (
            <div className="hidden md:block">
              <span className="text-sm text-gray-600">
                Welcome, <span className="font-medium text-gray-900">{user.username}</span>
              </span>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {user && (
            <div className="px-3 py-2 text-sm text-gray-600 border-b border-gray-200 mb-2">
              Welcome, <span className="font-medium text-gray-900">{user.username}</span>
            </div>
          )}
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {user && (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50 w-full text-left"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

