import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Empreendimentos', href: '#empreendimentos' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background-light/80 backdrop-blur-md border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://docs.qozt.com.br/landing_pages/agprime/logo_agprime3.png" 
              alt="AG Prime" 
              className="h-10 w-auto" 
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a href="#contato" className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 hover:shadow-xl">
              Fale Conosco
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              className="p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-icons-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-light border-b border-gray-200 absolute w-full px-4 pb-6 pt-2 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-800 py-2 hover:text-amber-600 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-gradient-to-r from-yellow-500 to-amber-600 text-center text-white px-5 py-3 rounded-full text-sm font-medium mt-4 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;