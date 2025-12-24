import Image from "next/image";
import LogoMarca from "@/public/logomarca.png"
export default function NavBar() {
    return (
        <>
            <nav className="flex justify-center fixed left-0 right-0 z-1000 ">
                <div className="rounded-[100px] bg-transparent backdrop-blur-3xl w-200 mt-5 border border-amber-50/50  p-2">
                    <div className="flex  justify-between items-center ">
                        <div>
                            <Image className="p-1" src={LogoMarca} width={60} alt="LogoMarca"></Image>
                        </div>
                        <div className="flex gap-7 text-white">
                            <a href="#inicio">INICIO</a>
                            <a href="#planos">PLANOS</a>
                            <a href="#contato">CONTATO</a>
                            <a href="#serviço">SERVIÇOS</a>

                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}
