// src/app/page.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare } from 'lucide-react';
import Navigation from '../Components/shared/Navigation';
import DotsBackground from '../Components/DotsBackground';
import HeroSection from '../Components/sections/HeroSection';
import AboutSection from '../Components/sections/AboutSection';
import ProjectsSection from '../Components/sections/ProjectsSection';
import ContactSection from '../Components/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  // Set up scroll-based section detection
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    let timeoutId = null;
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + (window.innerHeight / 3);
      
      // Find the section that is currently at the top of the viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          const elementBottom = elementTop + rect.height;
          
          // If the top of the element is above the trigger point and the bottom is below it
          if (elementTop <= (scrollPosition + 100) && elementBottom > scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
        });
        ticking = true;
      }
      
      // Fallback in case requestAnimationFrame doesn't fire
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (ticking) {
          updateActiveSection();
        }
      }, 100);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check
    updateActiveSection();

    // Cleanup
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered tool for generating marketing content and blog posts",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "SQL", "MongoDB", "Git", "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen relative text-white bg-black">
      <DotsBackground />
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <section id="home">
          <HeroSection />
        </section>
        <hr className="border-t border-gray-800" />
        
        <section id="about">
          <AboutSection skills={skills} />
        </section>
        <hr className="border-t border-gray-800" />
        
        <section id="projects">
          <ProjectsSection projects={projects} />
        </section>
        <hr className="border-t border-gray-800" />
        
        <ContactSection />
      </div>
    </div>
  );
}