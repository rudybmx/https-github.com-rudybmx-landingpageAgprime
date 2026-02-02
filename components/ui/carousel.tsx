"use client";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  description?: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, description } = slide;

  return (
    <li
        ref={slideRef}
        className="[perspective:1200px] [transform-style:preserve-3d] flex flex-col items-center justify-center relative text-center text-white transition-all duration-300 ease-in-out w-[75vw] md:w-[55vw] h-[60vh] md:h-[70vh] px-2 md:px-6 shrink-0 z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.85) rotateX(5deg)"
              : "scale(1) rotateX(0deg)",
          opacity: current === index ? 1 : 0.5,
          zIndex: current === index ? 20 : 10,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
          transformOrigin: "center bottom",
        }}
    >
        <div
          className="absolute top-0 left-2 right-2 md:left-6 md:right-6 bottom-0 bg-[#1D1F2F] rounded-3xl overflow-hidden transition-all duration-150 ease-out shadow-2xl"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: 1, 
              transform: current === index ? "scale(1.1)" : "scale(1.2)",
              transition: "transform 0.7s ease-out"
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/20 transition-all duration-1000" />
          )}
          {current !== index && (
            <div className="absolute inset-0 bg-black/40 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-8 transition-opacity duration-700 ease-in-out z-20 flex flex-col items-center ${
            current === index ? "opacity-100 visible delay-200" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-2xl md:text-5xl font-serif font-bold relative drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white">
            {title}
          </h2>
          
          {description && (
            <p className="text-sm md:text-base text-white font-medium mt-4 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-shadow-sm">
                {description}
            </p>
          )}

          <div className="flex justify-center">
            <button className="px-8 py-3 w-fit mx-auto text-sm md:text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-amber-600 border border-transparent flex justify-center items-center rounded-full shadow-lg hover:shadow-amber-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              {button}
            </button>
          </div>
        </article>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-14 h-14 flex items-center mx-2 justify-center bg-white/20 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black text-white transition-all duration-300 shadow-lg ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="w-6 h-6" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-full h-[70vh] md:h-[80vh] flex flex-col justify-center overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .carousel-wrapper {
          --slide-width: 75vw;
        }
        @media (min-width: 768px) {
          .carousel-wrapper {
            --slide-width: 55vw;
          }
        }
      `}} />
      <ul
        className="carousel-wrapper absolute flex items-center left-1/2 h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transform: `translateX(calc(-1 * (var(--slide-width) * ${current} + var(--slide-width) / 2)))`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center w-full z-30 pointer-events-none">
        <div className="pointer-events-auto flex gap-4">
            <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
            />

            <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
            />
        </div>
      </div>
    </div>
  );
}
