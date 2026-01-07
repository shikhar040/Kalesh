import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Security', 'Business', 'Download', 'Pricing'],
    Company: ['About', 'Careers', 'Brand Center', 'Blog', 'Press'],
    Support: ['Help Center', 'Contact Us', 'Privacy', 'Terms', 'FAQ'],
    Developers: ['API', 'Documentation', 'Open Source', 'GitHub', 'Status'],
  };

  return (
    <footer className="bg-slate-950 text-gray-300 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/kaleshlog.jpeg" alt="Kalesh Logo" className="h-12 w-12 rounded-lg glow-effect" />
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent neon-text uppercase">
                KALESH
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Making communication simple, secure, and accessible to everyone, everywhere. Join
              billions of users worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:glow-effect transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:glow-effect transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:glow-effect transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:glow-effect transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:glow-effect transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:glow-effect transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-400 transition-all duration-200 relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} KALESH. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-all group relative">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-all group relative">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-all group relative">
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
