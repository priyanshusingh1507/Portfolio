'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Eye, Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navigation({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'} transition-all duration-300 z-50 border-b border-purple-500/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
            onClick={() => handleNavClick('home')}
          >
            PS
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gray-700/50 text-white border border-gray-600'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          <a
            href="/resume/Priyanshu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg border border-gray-600"
          >
            <Eye size={18} />
            <span className="hidden sm:inline">View Resume</span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a
              href="/resume/Priyanshu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-3 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 mr-3 border border-gray-600"
            >
              <Eye size={16} />
              <span className="ml-2">View Resume</span>
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-black/95 backdrop-blur-sm border-t border-purple-500/30 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={`mobile-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium ${
                activeSection === item.id
                  ? 'bg-gray-700/50 text-white border border-gray-600'
                  : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <a
            href="/resume/Priyanshu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-700/30 hover:text-white"
          >
            <Eye size={20} />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
