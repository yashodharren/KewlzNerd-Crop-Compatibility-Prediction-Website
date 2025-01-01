import React from 'react';
import { Sprout } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-green-700 text-white">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sprout className="h-8 w-8" />
          <span className="text-2xl font-bold">AgriGrow</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#services" className="hover:text-green-200 transition-colors">Services</a>
          <a href="#crops" className="hover:text-green-200 transition-colors">Crops</a>
          <a href="#contact" className="hover:text-green-200 transition-colors">Contact</a>
          <button
            onClick={handleLogout}
            className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}