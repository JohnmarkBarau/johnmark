import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { 
  Home, 
  PlusCircle, 
  Calendar, 
  BarChart3, 
  Users, 
  Video, 
  MessageSquare, 
  Settings,
  LogOut,
  User
} from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/create', icon: PlusCircle, label: 'Create Post' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/teams', icon: Users, label: 'Teams' },
    { path: '/video', icon: Video, label: 'Video Generator' },
    { path: '/comments', icon: MessageSquare, label: 'Comments' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  if (!user) {
    return null;
  }

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">SocialSync AI</h1>
      </div>
      
      <div className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {user.email}
            </p>
          </div>
        </div>
        
        <button
          onClick={signOut}
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign Out
        </button>
      </div>
    </nav>
  );
}