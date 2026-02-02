import React from "react";
import { motion } from "framer-motion";

const ColorChangeCards = () => {
  return (
    <section id="servicos" className="py-16 bg-white rounded-3xl scroll-mt-24">
      <div className="text-center mb-12 px-4">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">
          Serviços
        </span>
        <h2 className="font-serif text-3xl md:text-4xl mt-6 font-bold text-gray-900">
          Nossas frentes de atuação
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto font-light">
          Soluções completas para seu patrimônio
        </p>
      </div>

      <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 px-4 max-w-7xl">
        <Card
          heading="Locação"
          subtitle="Gestão de locação com tranquilidade e segurança"
          description="Cuidamos de todo o processo de locação, desde a seleção criteriosa do inquilino até o acompanhamento do contrato. Nosso foco é proteger o patrimônio do proprietário e garantir previsibilidade, segurança jurídica e tranquilidade."
          cta="Quero alugar meu imóvel"
          imgSrc="https://docs.qozt.com.br/landing_pages/agprime/locacaoagprime2.jpg"
          href="https://agprimeimoveis.com/"
        />
        <Card
          heading="Venda Assistida"
          subtitle="Estratégia, posicionamento e acompanhamento profissional"
          description="A AG Prime Imóveis atua com Venda Assistida de Imóveis, um modelo que vai além da simples divulgação. Cuidamos do posicionamento correto, da estratégia de exposição, da negociação e de todo o acompanhamento do processo."
          cta="Quero vender meu imóvel"
          imgSrc="https://docs.qozt.com.br/landing_pages/agprime/Locacaoagprime.jpg"
          href="https://agprimeimoveis.com/"
        />
        <Card
          heading="Empreendimentos"
          subtitle="Oportunidades em lançamentos e imóveis na planta"
          description="Selecionamos empreendimentos com alto potencial de valorização, localização estratégica e condições diferenciadas. Ideal para quem busca investimento ou o próximo imóvel com planejamento."
          cta="Quero conhecer os lançamentos"
          imgSrc="https://docs.qozt.com.br/landing_pages/agprime/empreendimentoagprime.jpg"
          href="https://agprimeimoveis.com/"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 hover:shadow-xl">
          Falar com um especialista
          <span className="material-icons-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

// --- Card Component ---
interface CardProps {
  heading: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  cta: string;
  href: string;
}

const Card = ({ heading, subtitle, description, imgSrc, cta, href }: CardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-[500px] w-full cursor-pointer overflow-hidden bg-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 block"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-700 ease-out group-hover:scale-105 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500" />
      
      <div className="relative z-20 flex h-full flex-col justify-end p-8 text-gray-100 transition-colors duration-500">
        <div className="absolute top-8 right-8">
             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <span className="material-icons-outlined text-xl transition-transform duration-500 group-hover:-rotate-45">arrow_forward</span>
             </div>
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-2xl font-bold mb-2 text-white">
            {heading}
          </h3>
          <p className="font-sans text-xs font-bold uppercase tracking-wider text-blue-200 mb-3 opacity-90">
             {subtitle}
          </p>
          <p className="font-sans font-light text-sm text-gray-300 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-5">
            {description}
          </p>
          <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
             <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
                {cta}
             </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ColorChangeCards;