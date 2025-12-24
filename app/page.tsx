"use client";
import Main from "@/pages/Main"
import QSM from "@/pages/QuemSomos"
import Orçamento from "@/pages/Form"
import Curiosidade from "@/pages/Curiosidade"
import FooterIA from "@/pages/footer"
import Planos from "@/pages/Planos"
import Skills from "@/components/Skills/Skills";
export default function Home() {

  return (
    <>
      <main>
        <section id="inicio">
          <Main />
        </section>
        <section>

        </section>
        <section id="planos">
          <Planos />
        </section>
        <section id="serviço">
          <Skills />
        </section>
        <section id="contato">
          <Orçamento />
        </section>
        <section>
          <Curiosidade />
        </section>

      </main >
    </>
  );
}





