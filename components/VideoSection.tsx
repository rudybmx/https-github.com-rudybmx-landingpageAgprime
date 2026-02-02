import React from 'react';

const VideoSection: React.FC = () => {
  return (
    // Applied Full Width Breakout CSS: w-[100vw] ml-[50%] -translate-x-1/2
    // Removed rounded-3xl and borders to create a seamless full-width band experience
    <section id="sobre" className="relative w-[100vw] ml-[50%] -translate-x-1/2 py-24 bg-white text-gray-900 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">
            Sobre Nós
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-6 mb-4 leading-tight font-bold">
             Conheça a AG Prime Imóveis
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Mais do que uma imobiliária, somos uma operação estruturada para gerar segurança, tranquilidade e resultados consistentes para clientes e parceiros. Nosso foco está na gestão profissional de cada imóvel e na experiência de quem confia seu patrimônio à AG Prime.
          </p>
        </div>
        
        {/* YouTube Video Container - Centralized and Expanded */}
        {/* Simulating the "Centered Slide" focus with a larger max-width and prominent shadow */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-100 mb-12 transform transition-transform hover:scale-[1.01] duration-500">
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/SsdsCrec-Y8?rel=0" 
                title="Conheça a AG Prime Imóveis" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
             <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 hover:shadow-xl">
                Receber atendimento especializado
                <span className="material-icons-outlined text-sm">arrow_forward</span>
             </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;