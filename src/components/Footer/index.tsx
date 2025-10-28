"use client";
import React from "react";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Sobre SafeNet */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {/* <Image
                  src="/Logo.png"
                  alt="SafeNet Logo"
                  width={120}
                  height={120}
                /> */}
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SafeNet</h3>
                  <p className="text-xs text-gray-400">Protegendo Vidas</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plataforma de prevenção e resposta ao tráfico de pessoas em
                Moçambique, usando tecnologia para educar, detectar e proteger
                comunidades vulneráveis.
              </p>
            </div>
            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("verificador")}
                    className="hover:underline"
                  >
                    Verificador de Links
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="hover:underline"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("recursos")}
                    className="hover:underline"
                  >
                    Recursos Educativos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="hover:underline"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-indigo-400" />
                  <span>+258 84 292 1668</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-indigo-400" />
                  <span>Safenet@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span>Maputo, Moçambique</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-indigo-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-indigo-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-indigo-400">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="hover:text-indigo-400">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-indigo-400">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-indigo-400">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SafeNet. Todos os direitos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
