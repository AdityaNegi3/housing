import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Wrench, 
  Hammer, 
  Square, 
  ChefHat, 
  Trees, 
  Car, 
  Building, 
  ArrowUpCircle, 
  MoreHorizontal,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: React.ComponentType<any>;
  features: string[];
}

const services: Service[] = [
  {
    id: 'design',
    title: 'New House & Property Design',
    description: 'Custom architectural design and planning services',
    details: 'From concept to completion, we create bespoke designs tailored to your vision and lifestyle needs.',
    icon: Home,
    features: ['Architectural Design', 'Planning Applications', '3D Visualizations', 'Building Regulations']
  },
  {
    id: 'refurbishment',
    title: 'Refurbishment',
    description: 'Complete property renovation and modernization',
    details: 'Transform your existing property with our comprehensive refurbishment services and modern touches.',
    icon: Wrench,
    features: ['Full Property Renovation', 'Period Property Restoration', 'Modern Upgrades', 'Structural Work']
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Development',
    description: 'Ongoing property care and enhancement',
    details: 'Professional maintenance services to keep your property in pristine condition year-round.',
    icon: Hammer,
    features: ['Regular Maintenance', 'Emergency Repairs', 'Property Upgrades', 'Preventive Care']
  },
  {
    id: 'windows',
    title: 'Windows & Doors',
    description: 'Premium window and door installation',
    details: 'Energy-efficient windows and secure doors to enhance your property\'s comfort and security.',
    icon: Square,
    features: ['Double Glazing', 'Security Doors', 'French Doors', 'Sash Windows']
  },
  {
    id: 'kitchen',
    title: 'Kitchen Fit-Outs',
    description: 'Bespoke kitchen design and installation',
    details: 'Create your dream kitchen with our expert design team and quality craftsmanship.',
    icon: ChefHat,
    features: ['Custom Cabinetry', 'Worktop Installation', 'Appliance Integration', 'Lighting Design']
  },
  {
    id: 'landscaping',
    title: 'Garden Landscaping',
    description: 'Professional outdoor space transformation',
    details: 'Beautiful landscaping solutions to create stunning outdoor living spaces and gardens.',
    icon: Trees,
    features: ['Garden Design', 'Patio Installation', 'Water Features', 'Outdoor Lighting']
  },
  {
    id: 'driveway',
    title: 'Driveway Installation',
    description: 'Quality driveway construction and paving',
    details: 'Durable and attractive driveways using premium materials and expert installation techniques.',
    icon: Car,
    features: ['Block Paving', 'Tarmac Driveways', 'Gravel Driveways', 'Drainage Systems']
  },
  {
    id: 'extensions',
    title: 'Extensions',
    description: 'Space-enhancing property extensions',
    details: 'Seamlessly expand your living space with thoughtfully designed extensions and additions.',
    icon: Building,
    features: ['Single Story Extensions', 'Double Story Extensions', 'Wrap Around Extensions', 'Glass Extensions']
  },
  {
    id: 'loft',
    title: 'Loft Conversions',
    description: 'Transform unused space into living areas',
    details: 'Maximize your property\'s potential by converting loft space into functional rooms.',
    icon: ArrowUpCircle,
    features: ['Dormer Conversions', 'Velux Conversions', 'Hip-to-Gable', 'Mansard Conversions']
  },
  {
    id: 'more',
    title: 'And More',
    description: 'Additional specialized services available',
    details: 'We offer many other construction and development services - contact us to discuss your needs.',
    icon: MoreHorizontal,
    features: ['Basement Conversions', 'Garage Conversions', 'Conservatories', 'Custom Projects']
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-300 cursor-pointer group ${
        isHovered ? 'shadow-2xl -translate-y-2' : 'hover:shadow-xl hover:-translate-y-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-6">
          <div 
            className={`p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'group-hover:scale-105'
            }`}
          >
            <IconComponent size={32} />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {service.description}
        </p>
        
        <div className={`transition-all duration-300 overflow-hidden ${
          isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-sm text-blue-600 italic mb-4">
            {service.details}
          </p>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="text-xs text-gray-500 flex items-center">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive property development solutions tailored to your needs. 
              From design to completion, we handle every aspect of your project with 
              exceptional craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
              <p className="text-gray-600 text-lg">
                A streamlined approach to ensure your project runs smoothly from start to finish
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Initial meeting to understand your vision, requirements, and budget
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Design & Planning</h3>
                <p className="text-gray-600 text-sm">
                  Detailed planning, design development, and obtaining necessary permits
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">
                  Professional execution with regular updates and quality control
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Completion</h3>
                <p className="text-gray-600 text-sm">
                  Final inspection, handover, and ongoing support for your project
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your property development needs. 
              Our experts are ready to bring your vision to life.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;