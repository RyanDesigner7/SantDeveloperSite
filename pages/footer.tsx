import Link from 'next/link';
import Image from 'next/image';
import Logomarc from "@/public/logomarca.png"
const footerData = [
    {
        title: "PLATFORM",
        links: [
            { name: "Sobre", href: "#" },
            { name: "Suporte", href: "#" },
            { name: "Planos ", href: "#" },
            { name: "Contato", href: "#" },
        ],
    },
    {
        title: "LEGALS",
        links: [
            { name: "Guides", href: "#" },
            { name: "Terms & Conditions", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Licensing", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <div className='    '>
            <div>
                <footer className="bg-black text-white py-16 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">

                            {/* Logo e Descrição */}
                            <div className="md:col-span-4">
                                <div className="flex items-center gap-2 mb-6">
                                    <Image src={Logomarc} width={100} alt=''></Image>
                                    <span className="text-2xl font-bold tracking-tight">Sant Developer</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>

                            {/* Colunas de Links */}
                            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                                {footerData.map((section) => (
                                    <div key={section.title}>
                                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-4">
                                            {section.links.map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Linha Inferior e Copyright */}
                        <div className="border-t border-gray-800 pt-8 flex justify-center">
                            <p className="text-gray-500 text-xs">
                                © 2025, All Rights Reserved by SantDeveloper
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}