"use client";

import Card from "@/components/Card/Cards"
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

            {/* PLANOS */}
            <section className="w-full min-h-screen ">

                <Card />

            </section>


        </div >
    );
}





