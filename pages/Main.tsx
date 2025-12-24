"use client";

import LightRays from "@/components/LightRays/LightRays";
import Image from "next/image";
import Logomarca from "@/public/logomarca.png"
import AnimatedContent from '@/components/Animatedcontente/animatedcontent'
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
            < main className="w-full min-h-screen bg-black relative overflow-hidden" >
                <Nav />
                {/* Background Light Rays */}
                < div className="absolute inset-0 z-0" >
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
                </div >

                {/* Overlay escuro para contraste */}
                < div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/60 to-black" ></div >

                {/* Conteúdo */}
                < div className="relative z-[2]" >


                    {/* Hero Content */}
                    <section >
                        <div className="flex justify-center items-center  mt-10">

                            <div>
                                <div className="flex justify-start ml-50">
                                    <h1 className="text-[3.25rem] w-200 text-start mt-30  text-white">Criação de site profissional para o seu negócio</h1>
                                </div>

                                <div className="flex justify-start ml-50">
                                    <h2 className="text-[1.25rem] w-130 text-start  text-white">Descubra como ajudamos a desenhar e criar mais de 150 sites personalizados desde 2016.</h2>
                                </div>

                                <div className="mt-8 flex gap-4 justify-start ml-50">

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
                                        <button className="px-6 py-3 rounded-full bg-white text-black font-medium">
                                            <a href="http://wa.me/+5511997986454">Oque Oferecemos</a>
                                        </button>
                                    </AnimatedContent>
                                </div>
                            </div>

                            <div className="mt-33">
                                <Image
                                    src={Logomarca}
                                    alt="Logomarca"
                                    width={500}
                                />
                            </div>

                        </div>
                    </section>

                </div >
            </main >

        </div >
    );
}





