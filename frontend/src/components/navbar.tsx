import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">HealthCare Center</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#doctors" className="text-gray-600 hover:text-blue-600">Our Doctors</a>
            <a href="#appointment" className="text-gray-600 hover:text-blue-600">Appointments</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
              >
                Services
              </a>
              <a
                href="#doctors"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
              >
                Our Doctors
              </a>
              <a
                href="#appointment"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
              >
                Appointments
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;