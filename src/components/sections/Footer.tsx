import React from 'react';
import { School, Globe, Link as LinkIcon, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#800000] p-2 rounded-lg">
                <School className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white leading-tight">
                MUYOG <br /><span className="text-sm font-medium text-[#006400]">VOCATIONAL COLLEGE</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the way in practical vocational skills for the modern marketplace. Transform your future with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#800000] transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#006400] transition-colors">
                <LinkIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#800000] transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#800000] inline-block pb-1">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">All Programs</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Muyog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#006400] inline-block pb-1">Our Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Basic Computer Literacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Professional Hairdressing</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Graphic Design Suite</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Beauty & Skin Therapy</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Braiding & Styling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-[#800000] inline-block pb-1">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white">
                <Phone size={18} className="text-[#006400]" />
                <span>0726 000 770</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white">
                <Mail size={18} className="text-[#800000]" />
                <span>info@muyogcollege.ac.ke</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-white">
                <MapPin size={18} className="text-[#006400] mt-1 shrink-0" />
                <span>Nairobi, Kenya<br />Downtown Campus</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Muyog Vocational College. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;