'use client';
import Botao from "@/app/components/Botao/botao"
import CardMembro from "@/app/components/Cards_Membro/card"
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";
import Link from "next/link"


const Grupo = () => {

    useInactivityRedirect("/", 15000);
    return(
        <>
            <div className="w-full h-screen bg-white flex flex-col justify-center items-center ">
                <div className="w-full h-20 flex justify-end items-end">
                    <Link href={"/pages/Idioma"}>
                        <div className="w-full h-20 flex justify-end items-center pr-12">
                            <Botao titulo="Voltar" cor="#3B48EF"/>
                        </div>
                    </Link>
                </div>
                <div className="w-full h-screen bg-white flex justify-center items-center gap-20">
                    <CardMembro nome="Cleyton Enrike de Oliveira" turma="1TDSQ" rm="RM - 560485" descricao="Foto do membro" imagem="/image/membro2.png"/>
                    <CardMembro nome="Matheus Henrique Nascimento de Freitas" turma="1TDSQ" rm="RM - 560442" descricao="Foto do membro" imagem="/image/membro1.png"/>
                    <CardMembro nome="Matheus Pinheiro Ermacora Martin" turma="1TDSZ" rm="RM - 557720" descricao="Foto do membro" imagem="/image/membro3.jpg"/>
                </div>
            </div>
            
        </>
    )
}

export default Grupo