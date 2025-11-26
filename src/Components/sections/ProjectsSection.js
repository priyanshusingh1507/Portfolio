import React from 'react';
import { Briefcase, ExternalLink, Code as CodeIcon } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Live Weather App",
      description: "A real-time weather application built with HTML, CSS, and JavaScript featuring current weather conditions and forecasts",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      link: "https://live-weather-orcin.vercel.app/"
    },
    {
      title: "Atorix",
      description: "A modern web application showcasing full-stack development with responsive design and seamless user experience",
      tech: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://atorix.vercel.app/"
    },
    {
      title: "GitHub Profile",
      description: "Check out my open-source contributions and projects. Explore my repositories and coding journey",
      tech: ["Open Source", "Git", "Collaboration"],
      link: "https://github.com/priyanshusingh1507"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-gray-300" size={32} />
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:bg-gray-800 transition-all transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <CodeIcon className="text-gray-300" size={24} />
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
