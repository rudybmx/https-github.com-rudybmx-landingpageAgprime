import React from 'react';

const About: React.FC = () => {
  return (
    <section id="contato" className="flex flex-col gap-8 md:gap-16 scroll-mt-24">
      {/* Top Section: Intro & Image */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="space-y-8">
          <div>
            <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">Who We Are</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight tracking-tight">
              Fale agora com um especialista da AG Prime
            </h2>
          </div>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            Seja para comprar, vender ou alugar, a AG Prime Imóveis está pronta para atender você com profissionalismo, critério e foco em resultado.
          </p>
          
          <div className="pt-2">
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 hover:shadow-xl">
              Falar com a AG Prime no WhatsApp
              <span className="material-icons-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        
        {/* Right Column: Image */}
        <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-[2rem] overflow-hidden shadow-sm">
          <img 
            alt="Equipe AG Prime"
            className="absolute inset-0 w-full h-full object-cover object-top"
            src="https://docs.qozt.com.br/landing_pages/agprime/agprimeparceiria.jpg" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;