'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Priyanshu Singh';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent min-h-[80px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            I’m a Computer Science Engineer passionate about building clean, scalable, and user-focused digital experiences. I enjoy solving complex problems with modern web technologies, writing clean code, and continuously improving my craft to create impactful solutions.          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-all transform hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full transition-all">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            <img 
              src="https://res.cloudinary.com/dwjqrzygn/image/upload/v1764149451/Animated_photo_gyjpyv.jpg"
              alt="Profile" 
              className="relative w-full h-full rounded-full object-cover border-4 border-purple-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
