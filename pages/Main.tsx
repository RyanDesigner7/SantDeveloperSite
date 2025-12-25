"use client";

import LightRays from "@/components/LightRays/LightRays";
import Image from "next/image";
import Logomarca from "@/public/logomarca.png";
import AnimatedContent from "@/components/Animatedcontente/animatedcontent";
import Nav from "@/components/NavBar/navbar";
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
        <div>
            {/* MAIN PRIMARY */}
            <main className="w-full min-h-screen bg-black relative overflow-hidden">
                <Nav />

                {/* Background Light Rays */}
                <div className="absolute inset-0 z-0">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#87cefa"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                    />
                </div>

                {/* Overlay escuro para contraste */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

                {/* Conteúdo */}
                <div className="relative z-[2] container mx-auto px-6">

                    {/* Hero Content */}
                    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl">

                            {/* Texto do Hero */}
                            <div className="flex-1 text-center md:text-left order-2 md:order-1">
                                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight font-bold text-white mb-6">
                                    Criação de site profissional para o seu negócio
                                </h1>

                                <h2 className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
                                    Descubra como ajudamos a desenhar e criar sites personalizados desde 2020.
                                </h2>

                                <div className="flex justify-center md:justify-start">
                                    <AnimatedContent
                                        distance={150}
                                        direction="horizontal"
                                        reverse={false}
                                        duration={1.2}
                                        ease="bounce.out"
                                        initialOpacity={0.2}
                                        animateOpacity
                                        scale={1.1}
                                        threshold={0.2}
                                        delay={0.3}
                                    >
                                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
                                            <a href="#planos">O que Oferecemos</a>
                                        </button>
                                    </AnimatedContent>
                                </div>
                            </div>

                            {/* Imagem/Logomarca */}
                            <div className="flex-1 flex justify-center order-1 md:order-2">
                                <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                                    <Image
                                        src={Logomarca}
                                        alt="Logomarca"
                                        priority
                                        className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(135,206,250,0.3)]"
                                    />
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}