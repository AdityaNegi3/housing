// src/pages/ThankYou.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home as HomeIcon, Mail } from 'lucide-react';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('name') || undefined;
    const email = params.get('email') || undefined;

    setFormData({ name, email });
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
          <CheckCircle className="text-white" size={36} />
        </div>

        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Thank you{formData.name ? `, ${formData.name}` : ''}!
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We’ve received your message and our team will get back to you within 24–48 hours.
          If your request is urgent, feel free to reach out directly.
        </p>

        {/* Show submitted email */}
        {formData.email && (
          <div className="flex items-center justify-center gap-2 text-gray-700 mb-6">
            <Mail className="text-blue-600" size={20} />
            <span className="font-medium">{formData.email}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <HomeIcon className="mr-2" size={18} />
            Go to Home
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            View Projects
            <ArrowRight className="ml-3" size={18} />
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default ThankYou;
