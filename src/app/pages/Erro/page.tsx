'use client';
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";
import Link from "next/link";

const Erro = () => {
    useInactivityRedirect("/", 15000);
    return(
        <>
            <Link href={"/pages/Idioma"}>
                <div className="w-full h-screen bg-[#3B48EF] flex flex-col justify-center items-center">
                    <p className="text-6xl text-white font-semibold mb-30">Ops! O idioma escolhido não está disponível!</p>
                    <p className="text-6xl text-white font-semibold">Escolha outro</p>
                </div>
            </Link>
        </>
    );
}

export default Erro