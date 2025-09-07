import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Check } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gurunanak Housing</h3>
                <p className="text-gray-400 text-sm">Development LTD</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building quality homes and creating lasting relationships with our clients 
              through exceptional service and craftsmanship.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">+44 07405019834</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400">info@gurunanakhousing.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-400">London, United Kingdom</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-400" />
                <span className="text-gray-400">Licensed & Insured</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-400" />
                <span className="text-gray-400">Quality Guarantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-400" />
                <span className="text-gray-400">Expert Team</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-400" />
                <span className="text-gray-400">Competitive Pricing</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Gurunanak Housing Development LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;