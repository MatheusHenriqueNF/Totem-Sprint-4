'use client';
import Link from "next/link";
import Botao from "../../components/Botao/botao";
import Card from "../../components/Cards/card";
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";

const Informacao = () => {
    useInactivityRedirect("/", 15000);
    return(
        <>
            <div className="w-full h-screen bg-white ">

            <Link href={"/pages/Menu"}>
                <div className="w-full h-20 flex justify-end items-center pr-12">
                    <Botao titulo="Voltar" cor="#3B48EF"/>
                </div>
            </Link>

            <div className="flex justify-center items-center pt-16">
                <div className="w-full h-[70vh] flex justify-center items-center flex-wrap gap-25">
                <Link href={"/pages/Horario"}><Card titulo="Horário" imagem="/image/clock.png" descricao="Icone"/></Link>
                <Link href={"/pages/Solicitacao"}><Card titulo="Falar com Alguém" imagem="/image/user.png" descricao="Icone"/></Link>
                </div>
            </div>

            </div>


        </>
    );
}

export default Informacao