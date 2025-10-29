"use client";

import { motion } from "framer-motion";


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana M.",
      story:
        "Fui resgatada após meses de exploração. Hoje, estou a recomeçar a minha vida com apoio psicológico e profissional. Quero que a minha história ajude outras pessoas.",
    },
    {
      name: "Carlos T.",
      story:
        "Acreditava que estava a viajar para um emprego melhor, mas acabei em condições desumanas. Graças a uma ONG, consegui escapar e recuperar a minha liberdade.",
    },
    {
      name: "Sara L.",
      story:
        "Durante muito tempo tive medo de falar. Mas contar a minha história é a forma que encontrei de mostrar que há esperança e ajuda disponível.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#7F00FF] mb-10">
          Vozes de Esperança
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-16">
          Histórias reais de superação e coragem de pessoas que enfrentaram o
          tráfico humano e reconstruíram as suas vidas com apoio e solidariedade.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="
               shadow-lg rounded-2xl p-6 text-left relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
             
              <p className="text-black leading-relaxed mb-4">
                “{t.story}”
              </p>
              <h3 className="font-semibold text-black text-sm">
                — {t.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
