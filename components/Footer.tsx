import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://docs.qozt.com.br/landing_pages/agprime/logo_agprime3.png" 
                alt="AG Prime" 
                className="h-10 w-auto brightness-0 invert opacity-90" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Imobiliária especializada em venda, locação e empreendimentos em Londrina, com atendimento profissional e foco em segurança, estratégia e resultado.
            </p>
          </div>
          
          {/* Column 2: Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-primary text-lg">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-base select-none">📍</span>
                <span>Londrina – PR</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base select-none">📲</span>
                <span>WhatsApp: (43) 9XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base select-none">📞</span>
                <span>Telefone: (43) XXXX-XXXX</span>
              </li>
               <li className="flex items-center gap-3">
                <span className="text-base select-none">✉️</span>
                <span>E-mail: contato@agprimeimoveis.com.br</span>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-bold mb-6 text-primary text-lg">Redes Sociais</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                        <span className="text-xs font-bold">IG</span>
                    </div>
                    <span>Instagram: @agprimeimoveis</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                        <span className="text-xs font-bold">FB</span>
                    </div>
                    <span>Facebook: AG Prime Imóveis</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500">
          <p>© AG Prime Imóveis — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;