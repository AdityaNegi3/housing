import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Check, Users, Home as HomeIcon } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animation when component mounts
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                Building Dreams,
                <span className="text-blue-600"> Creating Homes</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Premium property development and construction services. From new builds to
                renovations, we bring your vision to life with exceptional craftsmanship and
                attention to detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Secondary: View Services */}
                <Link
                  to="/services"
                  aria-label="View our services"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  View Our Services
                </Link>

                {/* Primary: Get Quote */}
                <Link
                  to="/contact"
                  aria-label="Get a quote"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
                >
                  Get Quote
                  <ArrowRight className="ml-3" size={18} />
                </Link>
              </div>

              {/* small trust badges row */}
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2 shadow-sm">
                    <Star className="text-yellow-500" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">4.9/5</div>
                    <div className="text-xs">Client Satisfaction</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2 shadow-sm">
                    <Users className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">150+</div>
                    <div className="text-xs">Projects Completed</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2 shadow-sm">
                    <HomeIcon className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">20+ yrs</div>
                    <div className="text-xs">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              <div
                className={`overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                aria-hidden
              >
                <img
                  src="/1.png"
                  alt="Modern house construction"
                  className="w-full h-96 object-cover"
                />
                {/* subtle overlay to help contrast */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-multiply rounded-2xl" />
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl w-64">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Star className="text-yellow-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Premium Quality</p>
                    <p className="text-sm text-gray-600">Guaranteed Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover some of our recent completed projects showcasing our expertise in property
              development and construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              View All Projects
              <ArrowRight className="ml-3" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Gurunanak Housing</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              With years of experience and a commitment to excellence, we deliver exceptional
              results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind.</p>
            </div>

            <div className="text-center p-6 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties.</p>
            </div>

            <div className="text-center p-6 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals with years of industry experience.</p>
            </div>

            <div className="text-center p-6 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Fair, transparent pricing with no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your property development needs. Our
            experts are ready to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
          >
            Request a Consultation
            <ArrowRight className="ml-3" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
