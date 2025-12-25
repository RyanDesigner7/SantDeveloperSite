"use client";

import { useState } from "react";

export default function Home() {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [gmail, setGmail] = useState("");
    const [duvida, setDuvida] = useState("");

    const enviarWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();

        const mensagem = `
📩 *Nova mensagem do site*

Nome: ${nome}
Número: ${numero}
Gmail: ${gmail}
Dúvida: ${duvida}
        `;

        const url = `https://wa.me/5511997986454?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="bg-black">
            <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 px-6 py-12 md:p-20 text-white max-w-7xl mx-auto">

                {/* LADO ESQUERDO: TEXTO */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                        Desenvolvimento de sites profissionais para empresas
                    </h1>

                    <h2 className="text-lg text-gray-400 mb-8">
                        Entre em contato e solicite uma proposta sem compromisso.
                    </h2>

                    <div className="space-y-3 text-lg">
                        <a href="tel:+5511997986454" className="block hover:text-purple-400 transition-colors">
                            +55 (11) 99798-6454
                        </a>

                        <a href="mailto:Ryansantanars6@gmail.com" className="block hover:text-purple-400 transition-colors">
                            Ryansantanars6@gmail.com
                        </a>
                    </div>
                </div>

                {/* LADO DIREITO: FORMULÁRIO */}
                <div className="w-full lg:max-w-md">
                    <form
                        onSubmit={enviarWhatsApp}
                        className="border border-white/20 rounded-2xl p-6 sm:p-8 bg-white/5 backdrop-blur-sm shadow-2xl"
                    >
                        <div className="w-full">
                            <div className="flex justify-center mb-6">
                                <h1 className="border-b border-purple-500 w-24 text-center pb-1 tracking-widest text-sm font-bold">
                                    DÚVIDA
                                </h1>
                            </div>

                            {/* NOME */}
                            <div className="mb-4">
                                <label className="block text-center text-xs font-bold mb-2 tracking-widest">NOME</label>
                                <div className="rounded-xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                    <input
                                        type="text"
                                        placeholder="Seu nome completo"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        className="w-full rounded-xl bg-black px-4 py-3 text-white outline-none focus:ring-2 ring-purple-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* CONTAINER RESPONSIVO PARA NÚMERO E GMAIL */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <div className="w-full">
                                    <label className="block text-center text-xs font-bold mb-2 tracking-widest">NÚMERO</label>
                                    <div className="rounded-xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                        <input
                                            type="text"
                                            placeholder="11 99999-9999"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                            required
                                            className="w-full rounded-xl bg-black px-4 py-3 text-white outline-none focus:ring-2 ring-purple-500/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label className="block text-center text-xs font-bold mb-2 tracking-widest">GMAIL</label>
                                    <div className="rounded-xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                        <input
                                            type="email"
                                            placeholder="seuemail@gmail.com"
                                            value={gmail}
                                            onChange={(e) => setGmail(e.target.value)}
                                            required
                                            className="w-full rounded-xl bg-black px-4 py-3 text-white outline-none focus:ring-2 ring-purple-500/50 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* DUVIDA */}
                            <div className="mb-6">
                                <label className="block text-center text-xs font-bold mb-2 tracking-widest">DÚVIDA</label>
                                <div className="rounded-xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                    <textarea
                                        placeholder="Como podemos ajudar?"
                                        value={duvida}
                                        onChange={(e) => setDuvida(e.target.value)}
                                        required
                                        className="w-full rounded-xl bg-black px-4 py-3 text-white outline-none resize-none h-28 focus:ring-2 ring-purple-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* BOTÃO */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-white text-black px-12 py-3 rounded-full font-bold hover:bg-gray-200 transition-transform active:scale-95 shadow-lg"
                                >
                                    ENVIAR MENSAGEM
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}