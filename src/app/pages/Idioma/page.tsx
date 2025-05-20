'use client';
import Link from "next/link";
import Botao from "../../components/Botao/botao";
import CardIdioma from "../../components/Cards_Idioma/cardsIdioma";
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";


const Idioma = ()=>{
    useInactivityRedirect("/", 15000);
    
    return(
        <>
            <div className="w-full h-screen bg-[#3B48EF] ">
                
                <Link href={"/"}>
                    <div className="w-full h-20 flex justify-end items-center pr-12">
                        <Botao titulo="Voltar" cor="white" corTexto="black"/>
                    </div>
                </Link>
                <div className="flex justify-center items-center pt-16">
                    <div className="w-1/2 h-1/2 flex justify-center items-center flex-wrap gap-25">
                        <Link href={"/pages/Erro"}><CardIdioma imagem="/image/ingles.png" titulo="English"/>,</Link>
                        <Link href={"/pages/Menu"}><CardIdioma imagem="/image/portugues.png" titulo="Português"/></Link>
                    </div>
                </div>

                <div className="w-full h-auto justify-center items-center pt-10 flex flex-col gap-2">
                    <p className="font-semibold text-5xl text-white">Escolha o idioma</p>
                    <p className="font-light text-3xl text-white">Choose a language</p>
                </div>
                
            </div>
        </>
    );
}

export default Idioma