'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      setVisible(
        (prevScrollPos > currentScrollPos) || // Scrolling up
        currentScrollPos < 10 // At the top
      );
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technolgy' },
    { name: 'About us', href: '#aboutus' },
    { name: 'Contact', href: '#contactus' }
  ];

  return (
    <>
      <header style={{"zIndex":"52"}}
        className={`fixed top-0 left-0 !border-1 !border-gray-700 right-0 transition-transform duration-300 ease-in-out z-50 mt-3 mx-3 rounded-lg shadow-lg ${
          visible ? 'translate-y-0' : '-translate-y-[120%]'
        }`}
      >
        <nav className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md !border border-gray-600 rounded-lg">
          <div className="flex items-center justify-between md:mx-10 mx-5 h-16">
            {/* Logo */}
            <div className="flex-shrink-0 md:-ms-0 -ms-6">
              <Image src={'/logo.png'} width={100} height={100} alt='logo' className='w-32 h-32'/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium -translate-y-1 group"
                  >
                    {link.name}
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white duration-200 group-hover:w-full'></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
      
      {/* Add padding to the top of the page content */}
      
    </>
  );
};

export default Navbar;