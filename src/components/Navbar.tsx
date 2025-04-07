
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 md:px-12 border-b">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Luminia</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">Features</a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">Contact</a>
              <Button className="ml-4">Get Started</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="w-full mt-4">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
