"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PricingPlans() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section
            className="
        min-h-screen w-full
        bg-[url('/bgcards.png')] bg-cover bg-center
        flex items-center justify-center px-6 py-20
      "
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">

                {/* Plano P */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="0"
                    className="
            bg-gradient-to-br from-[#0b4058] via-[#02152a] to-[#000000]
            border border-white/10
            rounded-2xl p-8 text-white
            shadow-xl flex flex-col
            hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
            transition-all duration-300
          "
                >
                    <h2 className="text-3xl font-bold text-center mb-4">Plano P</h2>

                    <p className="text-center text-gray-300 mb-6">
                        <span className="line-through mr-2">R$1.990</span>
                        <span className="text-2xl font-semibold text-white">R$1.760</span> à vista
                    </p>

                    <ul className="space-y-3 text-sm text-gray-200 flex-1">
                        <li><strong>Website:</strong> 1</li>
                        <li><strong>Funcionalidade:</strong> Institucional</li>
                        <li><strong>Treinamento:</strong> Gratuito – WordPress e Elementor</li>
                        <li><strong>Layout:</strong> Identidade visual personalizada</li>
                        <li><strong>Páginas:</strong> Início, Quem somos, Serviços, Contato, LGPD e WhatsApp</li>
                    </ul>

                    <p className="text-xs text-gray-400 mt-6 text-center">
                        3x de R$656,66 no cartão ou 2x de R$880,00 no PIX
                    </p>

                    <button
                        className="
              mt-6 border border-white/40
              rounded-full py-3
              hover:bg-white hover:text-black
              transition
            "
                    >
                        Eu preciso
                    </button>
                </div>

                {/* Plano M */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    className="
            relative scale-105
            bg-gradient-to-br from-[#0b4058] via-[#02152a] to-[#000000]
            border border-[#2063af]
            rounded-2xl p-8 text-white
            shadow-[0_0_50px_rgba(168,85,247,0.3)]
            flex flex-col
          "
                >
                    <span
                        className="
              absolute -top-4 left-1/2 -translate-x-1/2
              bg-[#2063af] text-xs uppercase
              tracking-wide px-4 py-1 rounded-full
            "
                    >
                        Mais vendido
                    </span>

                    <h2 className="text-3xl font-bold text-center mb-4">Plano M</h2>

                    <p className="text-center text-gray-300 mb-6">
                        <span className="line-through mr-2">R$2.490</span>
                        <span className="text-2xl font-semibold text-white">R$2.090</span> à vista
                    </p>

                    <ul className="space-y-3 text-sm text-gray-200 flex-1">
                        <li><strong>Website:</strong> 1</li>
                        <li><strong>Funcionalidade:</strong> Institucional</li>
                        <li><strong>Treinamento:</strong> Gratuito – WordPress e Elementor</li>
                        <li><strong>Layout:</strong> Identidade visual personalizada</li>
                        <li><strong>Páginas:</strong> Início, Quem somos, Serviços, Blog, FAQ, LGPD e WhatsApp</li>
                        <li><strong>Blog:</strong> Até 20 postagens</li>
                    </ul>

                    <p className="text-xs text-gray-400 mt-6 text-center">
                        4x de R$583,75 no cartão ou 2x de R$1.045,00 no PIX
                    </p>

                    <button
                        className="
              mt-6 bg-[#2063af]
              rounded-full py-3 font-semibold
              hover:bg-[#123155] transition
            "
                    >
                        Eu preciso
                    </button>
                </div>

                {/* Plano G */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="
            bg-gradient-to-br from-[#0b4058] via-[#02152a] to-[#000000]
            border border-white/10
            rounded-2xl p-8 text-white
            shadow-xl flex flex-col
            hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
            transition-all duration-300
          "
                >
                    <h2 className="text-3xl font-bold text-center mb-4">Plano G</h2>

                    <p className="text-center text-gray-300 mb-6">
                        <span className="line-through mr-2">R$3.490</span>
                        <span className="text-2xl font-semibold text-white">R$3.090</span> à vista
                    </p>

                    <ul className="space-y-3 text-sm text-gray-200 flex-1">
                        <li><strong>Website:</strong> 1</li>
                        <li><strong>Funcionalidade:</strong> Institucional</li>
                        <li><strong>Treinamento:</strong> Gratuito – WordPress e Elementor</li>
                        <li><strong>Layout:</strong> Identidade visual personalizada</li>
                        <li><strong>Páginas:</strong> Serviços individuais, Blog, Trabalhe Conosco, LGPD e WhatsApp</li>
                        <li><strong>Blog:</strong> Até 20 postagens</li>
                    </ul>

                    <p className="text-xs text-gray-400 mt-6 text-center">
                        4x de R$615,00 no cartão ou 2x de R$1.595,00 no PIX
                    </p>

                    <button
                        className="
              mt-6 border border-white/40
              rounded-full py-3
              hover:bg-white hover:text-black
              transition
            "
                    >
                        Eu preciso
                    </button>
                </div>

            </div>
        </section>
    );
}
