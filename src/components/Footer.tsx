import React from 'react';
import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Sprout className="h-8 w-8" />
            <span className="text-2xl font-bold">AgriGrow</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgriGrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}