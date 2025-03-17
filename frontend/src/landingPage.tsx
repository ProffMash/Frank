import { Heart, ChevronRight, Stethoscope, Brain, ChevronFirst as FirstAid, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Contact from './components/contac';
import Appointment from './components/Appointments';
import Navbar from './components/navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/736x/6d/53/0a/6d530a67c2f539373dd7dbec7a7666e4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Medical Care for Your Well-being
            </h1>
            <p className="text-xl text-white mb-8">
              Leading the way in medical excellence with state-of-the-art facilities and compassionate healthcare professionals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#appointment" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition-colors duration-200"
              >
                Book Appointment
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg inline-flex items-center hover:bg-gray-100 transition-colors duration-200"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Medical Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer comprehensive healthcare services with cutting-edge technology and experienced medical professionals.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Cardiology</h3>
              <p className="text-gray-600 text-center">Expert heart care with advanced diagnostic and treatment options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Neurology</h3>
              <p className="text-gray-600 text-center">Specialized care for neurological conditions and disorders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <FirstAid className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Emergency Care</h3>
              <p className="text-gray-600 text-center">24/7 emergency services with rapid response teams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Primary Care</h3>
              <p className="text-gray-600 text-center">Comprehensive family healthcare services for all ages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Expert Doctors</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet our team of experienced medical professionals dedicated to providing you with the best care possible.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Chief of Cardiology</p>
                <p className="text-gray-600">Specialized in advanced cardiac procedures with over 15 years of experience.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
                <p className="text-blue-600 mb-4">Neurosurgeon</p>
                <p className="text-gray-600">Expert in minimally invasive neurological procedures and brain surgery.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Emily Martinez</h3>
                <p className="text-blue-600 mb-4">Emergency Medicine</p>
                <p className="text-gray-600">Specialized in emergency care and critical medical interventions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Expert Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-lg">Satisfied Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Component */}
      <Appointment />

      {/* Contact Component */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 py-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold">HealthCare Center</span>
              </div>
              <p className="text-gray-400 mb-6">
                Providing exceptional healthcare services with compassion and expertise for over 25 years.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">Services</a></li>
                <li><a href="#doctors" className="text-gray-400 hover:text-blue-500 transition-colors">Our Doctors</a></li>
                <li><a href="#appointment" className="text-gray-400 hover:text-blue-500 transition-colors">Book Appointment</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Cardiology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Neurology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Emergency Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Primary Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Pediatrics</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-400">123 Healthcare Avenue<br />Medical District, NY 10001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-400">(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-400">info@healthcarecenter.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 py-6">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} HealthCare Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;