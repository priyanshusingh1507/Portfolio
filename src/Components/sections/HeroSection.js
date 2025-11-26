import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Priyanshu Singh
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting elegant solutions to complex problems with modern web technologies
          </p>
          <div className="flex justify-center gap-4">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            <img 
              src="https://res.cloudinary.com/dwjqrzygn/image/upload/v1764149451/Animated_photo_gyjpyv.jpg"
              alt="Profile" 
              className="relative w-full h-full rounded-full object-cover border-4 border-black-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
