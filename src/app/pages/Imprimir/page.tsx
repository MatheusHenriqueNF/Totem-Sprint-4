'use client';
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";
import Link from "next/link";

const Erro = () => {
    useInactivityRedirect("/", 15000);
    return(
        <>
            <Link href={"/"}>
                <div className="w-full h-screen bg-[#3B48EF] flex flex-col justify-center items-center">
                    <p className="text-6xl text-white font-semibold mb-30">A sua rota foi impressa com sucesso</p>
                    <p className="text-6xl text-white font-semibold">Retire o papel</p>
                </div>
            </Link>
        </>
    );
}

export default Erro