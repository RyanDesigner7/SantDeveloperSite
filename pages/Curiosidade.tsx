"use client";

import Spline from "@splinetool/react-spline";
import ColorBends from "@/components/Colorbends/colorbends";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="bg-black">
            {/* 3D OBJECT SECTION */}
            <section className="relative min-h-screen flex justify-center items-center py-20 px-6 sm:px-10 overflow-hidden bg-[#000] text-white">

                {/* Background Animation */}
                <div className="absolute inset-0 z-0">
                    <ColorBends
                        colors={["#3f43ca", "#205d9e", "#0b4d5a"]}
                        rotation={60}
                        speed={0.3}
                        scale={1.2}
                        frequency={1}
                        warpStrength={1.2}
                        mouseInfluence={0.8}
                        parallax={0.6}
                        noise={0.08}
                        transparent={false}
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

                        {/* Spline Container - No mobile ele fica em cima e menor */}
                        <div
                            data-aos="fade-up"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] lg:flex-1 flex justify-center items-center"
                        >
                            <Spline
                                className="w-full h-full"
                                scene="https://prod.spline.design/6s9OrqeIpg1DL1SQ/scene.splinecode"
                            />
                        </div>

                        {/* Text Content */}
                        <div
                            data-aos="fade-left"
                            className="w-full lg:flex-1 text-center lg:text-left"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                OBJETOS EM 3D E INTERATIVO EM SUA LANDING PAGE
                            </h1>

                            <ul className="space-y-6 text-sm sm:text-base text-gray-200">
                                <li className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                    <strong className="text-blue-400 block mb-1">1. Maior impacto visual e diferenciação</strong>
                                    Elementos 3D criam um efeito visual superior, reforçando a percepção de inovação e modernidade da marca.
                                </li>

                                <li className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                    <strong className="text-blue-400 block mb-1">2. Aumento do tempo de permanência</strong>
                                    Objetos interativos estimulam a curiosidade, fazendo com que o usuário permaneça mais tempo na página — positivo para SEO.
                                </li>

                                <li className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                    <strong className="text-blue-400 block mb-1">3. Experiência imersiva</strong>
                                    Torna a navegação envolvente, gerando maior conexão emocional com o produto ou serviço apresentado.
                                </li>

                                <li className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                    <strong className="text-blue-400 block mb-1">4. Melhor compreensão</strong>
                                    O 3D facilita a visualização de detalhes e funcionamento, reduzindo dúvidas antes da conversão.
                                </li>

                                <li className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                    <strong className="text-blue-400 block mb-1">5. Aumento da taxa de conversão</strong>
                                    Páginas visualmente atrativas geram mais confiança e transmitem profissionalismo extremo.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}