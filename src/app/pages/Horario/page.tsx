'use client';
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";
import Link from "next/link";

const Horario = () => {
    useInactivityRedirect("/", 15000);
    return(
        <>
            <Link href={"/pages/Idioma"}>
                <div className="w-full h-screen bg-[#3B48EF] flex flex-col justify-center items-center">
                    <p className="text-6xl text-white font-semibold mb-30">Horário de Funcionamento</p>
                    <p className="text-6xl text-white font-semibold">Abertura: 4:40</p>
                    <p className="text-6xl text-white font-semibold">Encerramento: 1:00</p>
                </div>
            </Link>
        </>
    );
}

export default Horario