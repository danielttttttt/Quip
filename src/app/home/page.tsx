'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function HomePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.username}!
              </h1>
              <p className="mt-2 text-gray-600">
                You're successfully logged in to Quip
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 w-20">User ID:</span>
              <span className="text-sm text-gray-900">{user.id}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 w-20">Username:</span>
              <span className="text-sm text-gray-900">{user.username}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 w-20">Email:</span>
              <span className="text-sm text-gray-900">{user.email}</span>
            </div>
          </div>
        </div>

        {/* Features Coming Soon */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Messages</h3>
            <p className="text-gray-600 text-sm">Connect with friends and start conversations</p>
            <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Posts</h3>
            <p className="text-gray-600 text-sm">Share your thoughts and ideas with the community</p>
            <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Friends</h3>
            <p className="text-gray-600 text-sm">Find and connect with people you know</p>
            <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

