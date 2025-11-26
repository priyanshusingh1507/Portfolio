import React from 'react';
import { Github, Linkedin, Mail, Instagram, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MessageSquare className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities and collaborations. Let's create something amazing together!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/priyanshusingh1507" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/priyanshu-singh-935a92276" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/mr_rajputtt.15/"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="mailto:priyanshusingh8401@gmail.com"
            className="p-4 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
          
        </div>
        <a
          href="mailto:priyanshusingh8401@gmail.com"
          className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 border border-gray-700"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
