import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, MapPin } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="container mx-auto px-6 py-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex items-center space-x-0 text-blue-200">
              <div className="flex items-center space-x-2">
                {/* <MapPin size={18} /> */}
                {/* <span>{project.location}</span> */}
              </div>
              <span></span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-white text-sm">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="font-semibold text-gray-800">{project.completionDate}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-800">{project.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Client Type</p>
                <p className="font-semibold text-gray-800">{project.clientType}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Project Summary */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Summary</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Project Gallery</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Inspired by This Project?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same level 
            of expertise and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;