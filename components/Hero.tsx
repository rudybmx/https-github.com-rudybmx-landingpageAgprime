import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: Move image down slightly as user scrolls down
  // Height is set to 140% with -20% top offset to allow for movement without gaps
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="relative rounded-3xl overflow-hidden bg-gray-900 text-white min-h-[850px] flex items-center shadow-2xl">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }}
          className="absolute w-full h-[140%] -top-[20%] left-0"
        >
          <img
            alt="Luxury modern home with pool at twilight"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
          />
        </motion.div>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex flex-col justify-between">
        
        {/* Spacer to push content to middle/bottom */}
        <div className="flex-grow flex items-center">
          <div className="space-y-8 max-w-4xl">
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Imobiliária em Londrina especializada em venda e locação de imóveis
            </h1>
            
            <p className="text-gray-200 max-w-lg text-lg font-light leading-relaxed">
              A AG Prime Imóveis atua com foco em imóveis residenciais, empreendimentos na planta e gestão profissional de locação em Londrina.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white pl-8 pr-2 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-4 shadow-lg hover:shadow-amber-500/50 hover:shadow-xl transform hover:-translate-y-1">
                Falar com um especialista no WhatsApp
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                   <span className="material-icons-outlined text-white text-sm transform -rotate-45">arrow_forward</span>
                </div>
              </button>
              
              <button className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                 <span className="material-icons-outlined text-xl">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats & Social Proof */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 pt-12 border-t border-white/10 md:border-none">
          
          {/* Stats - Bottom Left */}
          <div className="flex gap-12">
            <div>
              <div className="text-4xl font-sans font-bold">200<span className="text-amber-400 text-2xl align-top">+</span></div>
              <div className="text-xs text-gray-300 uppercase tracking-widest mt-2 font-medium">Imóveis</div>
            </div>
            <div>
              <div className="text-4xl font-sans font-bold">70<span className="text-amber-400 text-2xl align-top">+</span></div>
              <div className="text-xs text-gray-300 uppercase tracking-widest mt-2 font-medium">Clientes Felizes</div>
            </div>
            <div>
              <div className="text-4xl font-sans font-bold">10<span className="text-amber-400 text-2xl align-top">+</span></div>
              <div className="text-xs text-gray-300 uppercase tracking-widest mt-2 font-medium">Anos de Mercado</div>
            </div>
          </div>

          {/* Instagram Followers Pill - Bottom Right */}
          <a 
            href="https://www.instagram.com/agprimeimoveis/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-2 pr-6 rounded-full shadow-xl flex items-center gap-4 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <div className="flex -space-x-4">
              <img alt="Follower 1" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Rwvg7rsR_g8P5cF1bHTniTx9YNepKk8xRmJqjOBC3QDPms7rsF1ULj0RPE9qFiS89LnDtAZZP0CkSBs4_lbOXALkDpRr9ILbJUgmxA5HF1ctaFCRdKGI3dRwP44_SbSoAYRp_974QYE8b1bmqci8DKy0H63TUbcyD9nfHXVnAoTxt4CCAUHz4_fsNuMzzk0VqNJy7yF_8PFyjIZiRAwTKbwptaTWUoEVVh3arfbbfSIUbcgc56WmUlEVeE6Ne_uObjBX_mqeTpo" />
              <img alt="Follower 2" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9cZkxG1zZLnor6Emy5KlzeGf8Z7myin4w4QEcd3EWveZZjijuXYRMrE0Wkr2PMt7OYhcVCSr4Er-fQVb1vAhmThAacKlVg0V4ufn2d-mIAWjecXXsCY_OZMfgGMJUXalmG2s7vf7HTWNChL1eYH7JYulyGg8PH3rZ_EPEQspRmPB27Hx_uWUVDpvoAw51R8bK1GU5AYqQ3IcO1fI25o4Wj-RQDoh5dfXHBz9qeGKIoOGlFcjjc2xfOBxQEXtTfWB20eUbJ71hDw" />
              <img alt="Follower 3" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1lFUB3w-SAMzPbZJIoL1UYaP_hlSFqfOtx2_sleszkNcJ1pYYqxCQDCoTqAFGO0qjntTj3-_5sf8Ee4X1cMZhncr2EA0tLAgHaGT2r02PWOyAB1pwtpnMi-PCWEMG0ysXyDVYzjXlgHaF0VW4ntT7gy_pk4zbAC7YAkjx2UEya_4DGEUCZh5tSlaGG228_AFAJ48GMrmY7Nz0EgwpWXSshOuSqlZAnq619RNzUbaVi3k1h0cBTC5fKHmkQH3ACYevPLoJJBz937k" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white relative z-10">
                <span className="material-icons-outlined text-lg">camera_alt</span>
              </div>
            </div>
            <div className="text-black flex flex-col justify-center">
              <div className="text-sm font-bold leading-tight">5.400+ Seguidores</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs font-medium group-hover:text-amber-600 transition-colors">
                <span>@agprimeimoveis</span>
                <span className="material-icons-outlined text-[14px] text-blue-500">verified</span>
              </div>
            </div>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;