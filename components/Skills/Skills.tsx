"use client";
import Image from "next/image";
import Foto from "@/public/tecnologia.png";

// ICONS
import { CiGlobe, CiImageOn, CiShare2 } from "react-icons/ci";
import { BsLayoutWtf } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TfiPrinter, TfiEmail } from "react-icons/tfi";

import BgFundo from "@/components/LiquidEther/Liquidether";

export default function Services() {
    return (
        <section className="relative overflow-hidden py-20 bg-black">
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <BgFundo
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 px-6">
                {/* TITLE */}
                <div className="mx-auto max-w-5xl text-center bg-gray-50 rounded-3xl p-10 shadow-md">
                    <h1 className="text-5xl font-bold text-[#B19EEF]">
                        O que a gente faz pelo seu Sucesso
                    </h1>
                    <p className="text-3xl mt-2 text-gray-500">
                        Descubra os nossos serviços
                    </p>
                </div>

                {/* CARDS */}
                <div className="mt-20 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: <CiGlobe />, text: "Sites institucionais" },
                            { icon: <BsLayoutWtf />, text: "Landing pages" },
                            { icon: <IoColorPaletteOutline />, text: "Identidade visual" },
                            { icon: <CiImageOn />, text: "Artes digitais" },
                            {
                                icon: <HiOutlineWrenchScrewdriver />,
                                text: "Manutenção e correções web",
                            },
                            { icon: <TfiPrinter />, text: "Materiais gráficos" },
                            { icon: <TfiEmail />, text: "Email empresarial" },
                            { icon: <CiShare2 />, text: "Administração de redes sociais" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-[#B19EEF] transition"
                            >
                                <div className="flex justify-center text-6xl mb-4 text-BLACK">
                                    {item.icon}
                                </div>
                                <p className="text-center font-bold text-gray-800">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
