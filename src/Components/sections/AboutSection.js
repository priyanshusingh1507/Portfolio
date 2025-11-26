import React from 'react';
import { User, Briefcase, MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutSection = ({ skills = [] }) => {
  const infoCards = [
    {
      icon: <Briefcase size={20} />,
      label: 'Interned at',
      value: '@atorix'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Nagpur, Maharashtra, India'
    },
    {
      icon: <Clock size={20} />,
      label: 'Time',
      value: '14:08 // same time'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91-8407951487'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'priyanshusingh8401@gmail.com'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Photo */}
          <div className="flex items-center justify-center lg:order-1">
            <div className="relative w-full max-w-md h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-1 backdrop-blur-sm border border-gray-700 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dwjqrzygn/image/upload/v1764148219/892659f8611b454e5295f827f0d3cdd0_tfvxno.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 border border-gray-700 rounded-lg p-4 hover:bg-gray-700/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-gray-300 mt-1">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{card.label}</p>
                      <p className="text-gray-200 font-medium break-all">{card.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I build
              applications that are both functional and beautiful.
            </p>
          
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm hover:bg-purple-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;