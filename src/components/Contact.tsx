import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-green-600" />
              <span>(60) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-green-600" />
              <span>contact@agrigrow.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-green-600" />
              <span>123 Farming Road, Agricultural District</span>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}