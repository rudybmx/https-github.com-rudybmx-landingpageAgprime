import React, { useState, useEffect } from 'react';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options = [
    {
      title: "Consultoria Estratégica",
      description: "Análise de mercado fundamentada",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      icon: "poll"
    },
    {
      title: "Fechamento Seguro",
      description: "Rigidez técnica e jurídica",
      // Updated image: Contract signing / Legal context
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      icon: "gavel"
    },
    {
      title: "Atendimento in Loco",
      description: "Visitas técnicas personalizadas",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      icon: "person_pin_circle"
    },
    {
      title: "Alto Padrão",
      description: "Curadoria de imóveis exclusivos",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      icon: "star"
    },
    {
      title: "Parceria e Confiança",
      description: "Relacionamento de longo prazo",
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800&q=80",
      icon: "handshake"
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="diferenciais" className="relative flex flex-col items-center justify-center py-16 bg-white rounded-3xl font-sans text-gray-900 overflow-hidden shadow-sm border border-gray-100 scroll-mt-24"> 
      {/* Header Section */}
      <div className="w-full max-w-4xl px-6 mb-10 text-center relative z-10 animate-fade-in-up">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 inline-block">Diferenciais</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Uma imobiliária com visão estratégica</h2>
        <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
          A AG Prime Imóveis atua com um modelo de atendimento baseado em critério, análise e acompanhamento contínuo. Cada imóvel é tratado com responsabilidade patrimonial, cada cliente com transparência e cada negociação com foco em segurança jurídica e valorização do ativo.
        </p>
      </div>

      {/* Options Container */}
      <div className="flex w-full h-[500px] px-0 md:px-4 items-stretch justify-center gap-2 relative z-10 mb-12">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-out cursor-pointer rounded-2xl
              ${activeIndex === index ? 'grow-[7] opacity-100' : 'grow-[1] opacity-90 hover:opacity-100'}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: animatedOptions.includes(index) ? 'translateY(0)' : 'translateY(20px)',
              opacity: animatedOptions.includes(index) ? (activeIndex === index || index !== activeIndex ? 1 : 0.7) : 0,
              transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onClick={() => handleOptionClick(index)}
          >
             {/* Gradient Overlay - Dark at bottom for text readability */}
             <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-70'}`} />

            {/* Content */}
            <div className={`absolute left-0 right-0 bottom-6 flex items-center ${activeIndex === index ? 'justify-start px-8' : 'justify-center'} z-20 transition-all duration-500`}>
              {/* Icon Bubble */}
              <div className={`min-w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transition-transform duration-300 ${activeIndex === index ? 'scale-110' : 'scale-100'}`}>
                <span className="material-icons-outlined text-2xl">{option.icon}</span>
              </div>
              
              {/* Text Description (Only visible when active) */}
              <div 
                className={`ml-5 text-white whitespace-nowrap overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 max-w-[400px] translate-x-0' : 'opacity-0 max-w-0 -translate-x-4'}`}
              >
                <div className="font-sans text-2xl font-bold mb-1 drop-shadow-md">{option.title}</div>
                <div className="text-sm text-gray-200 font-light tracking-wide drop-shadow-sm">{option.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 hover:shadow-xl">
          Receber atendimento especializado
          <span className="material-icons-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default InteractiveSelector;