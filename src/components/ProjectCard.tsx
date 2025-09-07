import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              to={`/projects/${project.id}`}
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <Eye size={20} />
              <span>View Case</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
        <p className="text-blue-600 font-medium text-sm">
          {project.category} — {project.location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;