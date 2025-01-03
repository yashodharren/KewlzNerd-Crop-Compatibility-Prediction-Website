import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Sprout className="h-8 w-8" />
            <span className="text-2xl font-bold">KewlzNerd</span>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KewlzNerd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
