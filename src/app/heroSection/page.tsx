"use client";
import React, { useState, useEffect } from "react";
import { Shield, AlertTriangle, Heart } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/i1.jpg",
      alt: "Pessoas trabalhando em segurança",
      title: (
        <>
          Sua segurança começa com
          <span className="block text-yellow-300">informação</span>
        </>
      ),
    },
    {
      image: "/i2.jpg",
      alt: "Proteção e segurança",
      title: (
        <>
          Nem toda oportunidade é
          <span className="block text-yellow-300">uma oportunidade real</span>
        </>
      ),
    },
    {
      image: "/i3.jpg",
      alt: "Comunidade unida",
      title: (
        <>
          Proteja-se antes de
          <span className="block text-yellow-300">ser tarde demais</span>
        </>
      ),
    },
    {
      image: "/i4.jpg",
      alt: "Apoio e solidariedade",
      title: (
        <>
          Reconheça os sinais e
          <span className="block text-yellow-300">salve uma vida</span>
        </>
      ),
    },
    {
      image: "/i5.jpg",
      alt: "Crescimento e esperança",
      title: (
        <>
          Você tem o poder de
          <span className="block text-yellow-300">dizer não ao tráfico</span>
        </>
      ),
    },
    {
      image: "/i6.jpg",
      alt: "Futuro brilhante",
      title: (
        <>
          Promessas falsas destroem
          <span className="block text-yellow-300">vidas reais</span>
        </>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToVerificador = () => {
    const element = document.getElementById("verificador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-28">
      {/* Hero Carousel Section */}
      <section className="relative text-white overflow-hidden h-96 md:h-[500px]">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 from-indigo-900/85 via-indigo-800/85 to-purple-900/85 backdrop-blur-x"></div>
        </div>

        {/* Text changing dynamically */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl transition-opacity duration-700 ease-in-out">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>

            <button
              onClick={scrollToVerificador}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl hover:shadow-xl hover:scale-105 transform"
            >
              Denincie aqui
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Content Below Carousel */}
      <section className="bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Plataforma de Prevenção ao Tráfico de Pessoas
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
              Proteja-se de
              <span className="block text-yellow-300">Ofertas Falsas</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-8 text-indigo-100 max-w-3xl mx-auto text-center">
              O tráfico de pessoas começa com promessas falsas. Aprenda a
              reconhecer os sinais e verifique a segurança de ofertas de emprego
              e viagens.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={scrollToVerificador}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl hover:shadow-xl hover:scale-105 transform"
              >
                Verificar Link Agora
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("sobre")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm text-indigo-100">Casos Prevenidos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm text-indigo-100">Links Verificados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-pink-300" />
                </div>
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-indigo-100">Proteção Ativa</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
