import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Ballpit from '../reactbits/Ballpit/Ballpit';
import { LinkPreview } from '../ui/link-preview';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define an array of vibrant colors (in hexadecimal format)
  // const ballColors = [
  //   0xFF6B6B,  // Coral Red
  //   0x4ECDC4,  // Turquoise
  //   0x45B7D1,  // Sky Blue
  //   0x96CEB4,  // Mint Green
  //   0xFBAB7E,  // Peach
  //   0x7A57D1,  // Purple
  //   0x50FA7B,  // Neon Green
  //   0xFF79C6,  // Pink
  //   0x9580FF,  // Lavender
  //   0xFFB86C,  // Orange
  // ];

  const ballColors = [
    0xFF4444,  // Darker Coral Red
    0x3AAFA9,  // Teal
    0x238DC1,  // Deep Sky Blue
    0x70A288,  // Muted Mint Green
    0xD67D3E,  // Burnt Orange
    0x6A5ACD,  // Royal Purple
    0x2ECC71,  // Emerald Green
    0xE056FD,  // Vivid Pink
    0x8A2BE2,  // Dark Lavender
    0xE67E22,  // Warm Orange
  ];
  
  const footerSections = {
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    },
    contact: {
      title: "Contact",
      items: [
        { 
          icon: <Mail className="w-4 h-4" />, 
          text: "contact@example.com",
          href: "mailto:contact@example.com"
        },
        { 
          icon: <Phone className="w-4 h-4" />, 
          text: "+1 (555) 123-4567",
          href: "tel:+15551234567"
        }
      ]
    },
    social: {
      title: "Social",
      links: [
        { icon: <Github className="w-6 h-6" />, href: "https://github.com/YourGithubUsername", label: "GitHub" },
        { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/YourLinkedInUsername", label: "LinkedIn" },
        { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/YourTwitterUsername", label: "Twitter" }
      ]
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative border-t border-gray-700 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 overflow-hidden"
    >
      {/* Add Ballpit as a background with colors */}
      <div className="absolute inset-0 pointer-events-none">
        <Ballpit
          count={50}
          colors={ballColors}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={false}
          materialParams={{
            metalness: 0.2,
            roughness: 0.3,
            clearcoat: 1,
            clearcoatRoughness: 0.15,
          }}
        />
      </div>

      {/* Main content with relative positioning to appear above Ballpit */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Your Company</h3>
            <p className="text-gray-400 mb-4">
              Building the future of web development with innovative solutions and cutting-edge technology.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{footerSections.company.title}</h4>
            <ul className="space-y-2">
              {footerSections.company.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{footerSections.resources.title}</h4>
            <ul className="space-y-2">
              {footerSections.resources.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{footerSections.contact.title}</h4>
            <ul className="space-y-2">
              {footerSections.contact.items.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">{footerSections.social.title}</h4>
              <div className="flex space-x-4">
                {footerSections.social.links.map((social, index) => (
                  // <motion.a
                  //   key={index}
                  //   href={social.href}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  //   className="text-gray-400 hover:text-white transition-colors duration-300"
                  //   whileHover={{ scale: 1.1 }}
                  //   whileTap={{ scale: 0.95 }}
                  //   aria-label={social.label}
                  // >
                    <LinkPreview key={index} url={social.href} className="text-white cursor-pointer">
                    {social.icon}
                    </LinkPreview>
                  // </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              © {currentYear} Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;