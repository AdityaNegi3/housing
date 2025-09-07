import React from 'react';
import { X, Calendar, Clock, User } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-colors"
          >
            <X size={24} className="text-gray-800" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-blue-200">{project.location}</p>
          </div>
        </div>

        <div className="p-8">
          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Calendar className="text-blue-600" size={20} />
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="font-semibold">{project.completionDate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-blue-600" size={20} />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User className="text-blue-600" size={20} />
              <div>
                <p className="text-sm text-gray-600">Client Type</p>
                <p className="font-semibold">{project.clientType}</p>
              </div>
            </div>
          </div>

          {/* Project Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Summary</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Solution</h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;