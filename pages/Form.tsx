"use client";

import { useState } from "react";

export default function Home() {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [gmail, setGmail] = useState("");
    const [duvida, setDuvida] = useState("");

    const enviarWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();

        // 🔴 TROQUE PARA O SEU NÚMERO (formato internacional)


        const mensagem = `
📩 *Nova mensagem do site*

    Nome: ${nome}
    Gmail: ${gmail}
    Dúvida: ${duvida}
        `;

        const url = `https://wa.me/5511997986454?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    };

    return (
        <div>
            <section className="flex justify-center items-center  p-20 text-white bg-black">
                <div>
                    <h1 className="text-6xl w-200 mb-5 font-semibold">
                        Desenvolvimento de sites profissionais para empresas
                    </h1>

                    <h2 className="text-lg text-gray-300">
                        Entre em contato e solicite uma proposta sem compromisso.
                    </h2>

                    <div className="mt-7 space-y-1">
                        <a href="tel:+5511997986454" className="block hover:underline">
                            +55 (11) 99798-6454
                        </a>

                        <a href="mailto: Ryansantanars6@gmail.com" className="block hover:underline">
                            Ryansantanars6@gmail.com
                        </a>
                    </div>

                    <div className="mt-8">

                    </div>
                </div>


                <div>
                    <form
                        onSubmit={enviarWhatsApp}
                        className="flex justify-center border rounded-2xl p-5 h-100"
                    >
                        <div className="w-full">
                            <div className="flex justify-center mb-4">
                                <h1 className="border-b w-20 flex justify-center">
                                    DÚVIDA
                                </h1>
                            </div>

                            {/* NOME */}
                            <div className="mb-3">
                                <h1 className="flex justify-center mb-1">NOME</h1>
                                <div className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                    <input
                                        type="text"
                                        placeholder="Escreva seu nome aqui"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        className="w-full rounded-xl bg-black px-4 py-2 text-white outline-none"
                                    />
                                </div>
                            </div>

                            {/* NUMERO + GMAIL */}
                            <div className="flex gap-5 mb-3">
                                <div className="w-full">
                                    <h1 className="flex justify-center mb-1">NÚMERO</h1>
                                    <div className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                        <input
                                            type="text"
                                            placeholder="Ex: 11 99999-9999"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                            required
                                            className="w-full rounded-xl bg-black px-4 py-2 text-white outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <h1 className="flex justify-center mb-1">GMAIL</h1>
                                    <div className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                        <input
                                            type="email"
                                            placeholder="seuemail@gmail.com"
                                            value={gmail}
                                            onChange={(e) => setGmail(e.target.value)}
                                            required
                                            className="w-full rounded-xl bg-black px-4 py-2 text-white outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* DUVIDA */}
                            <div className="mb-5">
                                <h1 className="flex justify-center mb-1">DÚVIDA</h1>
                                <div className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                                    <textarea
                                        placeholder="Escreva sua dúvida aqui"
                                        value={duvida}
                                        onChange={(e) => setDuvida(e.target.value)}
                                        required
                                        className="w-full rounded-xl bg-black px-4 py-2 text-white outline-none resize-none h-24"
                                    />
                                </div>
                            </div>

                            {/* BOTÃO */}
                            <div className="flex justify-center mt-10">
                                <button
                                    type="submit"
                                    className="bg-amber-50 text-black px-8 py-2 rounded-3xl font-semibold hover:bg-amber-100 transition"
                                >
                                    ENVIAR
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    );
}
