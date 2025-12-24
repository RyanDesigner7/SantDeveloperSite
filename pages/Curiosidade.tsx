"use client";

import Spline from "@splinetool/react-spline";
import ColorBends from "@/components/Colorbends/colorbends"
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
            {/* 3D OBJECT */}

            <section className="relative flex justify-center items-center p-40 overflow-hidden bg-[#000] text-white">
                <div>

                    <div>
                        <div className="absolute inset-0 z-1">
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

                        <div className="flex s justify-center items-center gap-7 ">

                            <div className="flex items-center justify-center gap-7 " >

                                <div className=" data-aos='fade-up-right' relative z-10 flex justify-center items-center gap-7 ">

                                    <Spline data-aos='ease-in-out' className=" " scene="https://prod.spline.design/6s9OrqeIpg1DL1SQ/scene.splinecode" />
                                </div>

                                <div className=" w-200 z-10 ">

                                    <div className="">
                                        <h1 className="text-4xl mb-4">
                                            OBJETOS EM 3D E INTERATIVO EM SUA LANDPAGE
                                        </h1>
                                        <ul>

                                            <li className="mb-2">1. Maior impacto visual e diferenciação
                                                Elementos 3D criam um efeito visual superior ao conteúdo estático tradicional. Isso diferencia sua landing page da concorrência e
                                                reforça a percepção de inovação e modernidade da marca.
                                            </li>

                                            <li className="mb-2">2. Aumento do tempo de permanência na página
                                                Objetos 3D interativos (rotação, movimento com mouse, animações leves) estimulam a curiosidade do usuário,
                                                fazendo com que ele permaneça mais tempo na página — um fator positivo para SEO e engajamento.
                                            </li>

                                            <li className="mb-2">3. Experiência do usuário mais imersiva
                                                O 3D permite que o visitante “interaja” com o conteúdo,
                                                tornando a navegação mais envolvente. Isso gera
                                                maior conexão emocional com o produto ou serviço
                                                apresentado.
                                            </li>

                                            <li className="mb-2">4. Melhor compreensão do produto ou serviço
                                                Em especial para produtos físicos ou soluções técnicas,
                                                o 3D facilita a visualização de detalhes, proporções e
                                                funcionamento, reduzindo dúvidas e objeções antes da
                                                conversão.    fazendo com que ele permaneça mais tempo
                                                na página — um fator positivo para SEO e engajamento.
                                            </li>

                                            <li className="mb-2">5. Aumento da taxa de conversão
                                                Landing pages visualmente mais atrativas e interativas tendem a converter melhor, pois:
                                                Geram mais confiança,
                                                Transmitem profissionalismo,
                                                Mantêm o usuário focado na proposta principal </li>
                                        </ul>
                                    </div>




                                </div>



                            </div>


                        </div>

                    </div>


                </div>
            </section >

        </div >
    );
}





