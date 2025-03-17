import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Heart, Shield, Star } from 'lucide-react';
import { createAppointment } from '../api/AppointmentApi'; 
import { toast } from 'sonner'; 

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createAppointment(formData);
      console.log('Appointment requested:', response);
      toast.success('Appointment scheduled successfully!'); 
      setFormData({
        name: '',
        contact: '',
        date: '',
        time: ''
      });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      toast.error('Failed to schedule appointment. Please try again.'); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Book an Appointment</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Schedule your visit with our experienced medical professionals. We're here to provide you with the best possible care.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Patient-Centered Care</h4>
                    <p className="text-gray-600">
                      We prioritize your health and well-being with personalized care plans tailored to your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Experienced Professionals</h4>
                    <p className="text-gray-600">
                      Our team of doctors and specialists are highly trained and dedicated to providing the best care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">State-of-the-Art Facilities</h4>
                    <p className="text-gray-600">
                      We use the latest medical technology to ensure accurate diagnoses and effective treatments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto md:mx-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Schedule Your Visit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;