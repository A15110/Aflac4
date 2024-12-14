import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insurance Plans', href: '/plans' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                className="h-14 w-auto"
                src="/src/logoAF.png"
                alt="Mark Mikko - Aflac Insurance Agent"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-gray-700 hover:text-[#00a1e1] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/contact"
              className="inline-flex items-center gap-x-2 rounded-md bg-[#00a1e1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0077a7] focus:outline-none focus:ring-2 focus:ring-[#00a1e1] focus:ring-offset-2 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-[#00a1e1]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#00a1e1] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/contact"
                className="block rounded-md bg-[#00a1e1] px-3 py-2 text-base font-medium text-white hover:bg-[#0077a7] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;