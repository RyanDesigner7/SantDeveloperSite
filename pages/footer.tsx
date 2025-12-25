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
                    <div className="border-t border-gray-800 pt-8 flex justify-center">

                        <p className="text-gray-500 text-xs">
                            © 2025, All Rights Reserved by SantDeveloper
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}