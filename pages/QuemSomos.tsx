"use client";


import Image from "next/image";
import Logomarca from "@/public/logomarca.png"
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

            {/* QUEM SOMOS */}
            < section className="bg-[#000000] text-white py-16 px-6 md:px-12 lg:px-24 min-h-[500px] flex items-center" >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-100 items-center">

                    {/* Lado Esquerdo: Imagem do Astronauta */}
                    <div className="relative flex justify-center order-2 md:order-1">
                        <div data-aos='ease-in-out' className="w-full max-w-[450px]">
                            <Image
                                src={Logomarca} // Substitua pelo caminho real da imagem
                                alt="Astronauta Tatitas Websites"
                                width={800}
                                height={800}
                                priority
                                className="object-contain"

                            />
                        </div>
                    </div>

                    {/* Lado Direito: Texto */}
                    <div className="flex flex-col space-y-6 order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-light leading-tight">
                            Nós somos a <br />
                            <span className="text-[#245fad] font-bold">SANT DEVELOPER</span>
                        </h2>

                        <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed max-w-xl">
                            <p>
                                Há mais de 8 anos no mercado digital, a <strong className="text-white">Sant Developer</strong> conquistou clientes satisfeitos, entregando soluções de criação de sites altamente eficientes e com ótimo custo-benefício.
                            </p>
                            <p>
                                Nossa equipe é especialista em <strong className="text-white">WordPress</strong>, <strong className="text-white">WooCommerce</strong> e plataformas <strong className="text-white">e-commerce</strong> renomadas.
                            </p>
                            <p>
                                Estamos em <strong className="text-white">Campinas</strong>, atendemos clientes B2B e B2C de todo o <strong className="text-white">Brasil</strong>, sempre priorizando qualidade, transparência e suporte contínuo. Conte conosco para dar vida ao seu projeto online!
                            </p>
                        </div>
                    </div>

                </div>
            </section >

        </div >
    );
}





