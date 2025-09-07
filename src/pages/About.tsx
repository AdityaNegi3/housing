import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Heart, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                About 
                <span className="text-blue-600"> Gurunanak Housing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience in property development and construction, 
                we have built a reputation for excellence, integrity, and innovation in the industry.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Work With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" 
                alt="Our team at work" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg">
                Founded on principles of quality, integrity, and customer satisfaction
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                Gurunanak Housing Development LTD was established with a simple yet powerful vision: 
                to create exceptional living spaces that enhance people's lives while maintaining the 
                highest standards of craftsmanship and customer service.
              </p>
              
              <p className="leading-relaxed mb-8">
                Our journey began over 20 years ago when our founder recognized the need for a 
                construction company that truly understood the importance of listening to clients 
                and delivering beyond expectations. What started as a small team of dedicated 
                craftsmen has grown into one of London's most trusted property development companies.
              </p>
              
              <p className="leading-relaxed mb-8">
                Today, we specialize in a comprehensive range of services including new builds, 
                renovations, extensions, and specialized projects like loft conversions and 
                kitchen fit-outs. Every project we undertake reflects our commitment to quality, 
                attention to detail, and respect for both traditional craftsmanship and modern innovation.
              </p>
              
              <p className="leading-relaxed">
                We believe that every home tells a story, and we're honored to be part of writing 
                that story for our clients. Whether it's a complete renovation of a Victorian 
                townhouse or a contemporary extension for a growing family, we approach each 
                project with the same level of dedication and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every detail, ensuring the highest quality 
                in all our work and exceeding client expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Honest communication, transparent pricing, and ethical business 
                practices form the foundation of our relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with clients, architects, and suppliers to ensure 
                seamless project delivery and outstanding results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Consistent delivery on time and within budget, with clear 
                communication throughout every stage of the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A team of skilled professionals with decades of combined experience 
              in construction and property development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                20+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years Experience</h3>
              <p className="text-gray-600">
                Over two decades of expertise in property development and construction
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                500+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Projects Completed</h3>
              <p className="text-gray-600">
                Successfully delivered hundreds of projects across London and surrounding areas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                100%
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                Committed to achieving complete client satisfaction on every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our experience and expertise 
            can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;