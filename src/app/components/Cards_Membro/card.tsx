import React from "react";
import Image from "next/image";

type CardProps = {
    nome ?: string;
    turma ?: string;
    rm ?: string;
    descricao ?: string;
    imagem ?: string;
    clicando ?: () => void;
}

const CardMembro : React.FC<CardProps> = ({
    nome = "Nome",
    turma = "Turma",
    rm = "RM",
    descricao = "Descrição",
    imagem = "https://www.google.com.br",
    clicando

}) =>{


    return(
        <>

        <div className="relative w-80 h-130 rounded-3xl flex flex-col justify-center items-center p-5"
            style={{ backgroundColor: "rgba(59, 72, 239, 0.3)" }}>

         <div className="relative w-60 h-60 flex justify-center items-center">
            <Image className="object-cover rounded-full" src={imagem} alt={descricao} width={250} height={200} />
         </div>
            
             <div className="bottom-0 left-0 w-full h-auto flex flex-col mt-16">
                <p className="text-white text-2xl font-semibold text-center">{nome}</p>
                <p className="text-white text-1xl font-light text-center">{rm}</p>
                <p className="text-white text-1xl font-light text-center">{turma}</p>
             </div>
         </div>

        </>
    );
}

export default CardMembro