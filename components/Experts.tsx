import React from 'react';
import { Carousel } from './ui/carousel';

const developments = [
  {
    id: 1,
    title: "ARTESANO",
    subtitle: "Conexão com a essência",
    description: "Artesano é uma obra-prima que valoriza o cotidiano pela evocação dos sentidos e transforma conforto e essência dos materiais em conexões com nossas origens. Um lugar cuja arquitetura se comunica e cria memórias.",
    image: "https://docs.qozt.com.br/landing_pages/agprime/ARTESANO.jpg",
  },
  {
    id: 2,
    title: "CASA HORIZONTE",
    subtitle: "Plaenge",
    description: "O Casa Horizonte, da Plaenge, é um empreendimento pensado para quem valoriza arquitetura contemporânea, conforto e qualidade de vida em cada detalhe. Com um projeto que une sofisticação, funcionalidade e bem-estar, o Casa Horizonte traduz um novo jeito de morar, onde os espaços são planejados para acompanhar o ritmo da vida moderna.",
    image: "https://docs.qozt.com.br/landing_pages/agprime/CASA%20HORIZONTE.jpg",
  },
  {
    id: 3,
    title: "OASE",
    subtitle: "Refúgio Urbano",
    description: "Oase simboliza frescor, acolhimento, sofisticação e exclusividade. Um projeto pensado para quem valoriza o essencial: estar junto, onde cada espaço foi pensado para eternizar momentos e criar memórias afetivas. Localizado na Nova Prochet, Oase oferece uma vista de tirar o folego, em um dos cartões-postais mais lindos de Londrina. Oase - um refúgio em meio a cidade.",
    image: "https://docs.qozt.com.br/landing_pages/agprime/OASE.jpg",
  },
  {
    id: 4,
    title: "WAVE",
    subtitle: "Casa Suspensa",
    description: "Edifício WAVE, uma fusão perfeita de estilo, comodidade e sofisticação. Situado em uma localização privilegiada, este empreendimento oferece não apenas um lar, mas uma experiência de vida elevada. Wave proporciona uma verdadeira \"casa suspensa\". Os espaços amplos e luminosos deste apartamento com área privativa de 429m2 e sala com pé-direito duplo, proporcionam uma sensação de liberdade e tranquilidade.",
    image: "https://docs.qozt.com.br/landing_pages/agprime/WAVE.jpg",
  },
  {
    id: 5,
    title: "WONDER",
    subtitle: "Vectra Construtora",
    description: "O Wonder, da Vectra Construtora, nasce como uma nova referência de morar bem na região da Nova Prochet. Um empreendimento que une arquitetura contemporânea, conforto e lazer completo, pensado para quem valoriza qualidade de vida, localização estratégica e alto potencial de valorização. Um projeto exclusivo para viver com estilo ou investir com segurança.",
    image: "https://docs.qozt.com.br/landing_pages/agprime/WONDER.jpg",
  }
];

const Experts: React.FC = () => {
  const slideData = developments.map(dev => ({
    title: dev.title,
    description: dev.description,
    button: "Ver Detalhes",
    src: dev.image
  }));

  return (
    <section id="empreendimentos" className="relative w-[100vw] ml-[50%] -translate-x-1/2 py-24 bg-[#F5F5F4] overflow-hidden scroll-mt-20">
        <div className="text-center mb-16 px-4">
            <span className="bg-white text-gray-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">
              Empreendimentos
            </span>
            <h2 className="font-serif text-3xl md:text-5xl mt-6 font-medium text-gray-900 leading-tight">
              Empreendimentos selecionados
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto font-light">
              Conheça alguns dos empreendimentos disponíveis e fale com um especialista para receber informações completas, valores e condições.
            </p>
        </div>

        {/* Full width container ignoring any parent padding due to section breakout */}
        <div className="relative w-full">
            <Carousel slides={slideData} />
        </div>
    </section>
  );
};

export default Experts;