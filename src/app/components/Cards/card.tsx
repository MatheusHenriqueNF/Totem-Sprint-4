import React from "react";
import Image from "next/image";

type CardProps = {
    titulo ?: string;
    descricao ?: string;
    imagem ?: string;
    clicando ?: () => void;
}

const Card : React.FC<CardProps> = ({
    titulo = "Titulo",
    descricao = "Descrição",
    imagem = "https://www.google.com.br",
    clicando

}) =>{


    return(
        <>

        <div className="relative w-80 h-130 rounded-3xl flex flex-col justify-center items-center p-10"
            style={{ backgroundColor: "rgba(59, 72, 239, 0.3)" }}>

         <div className="relative w-60 h-60 flex justify-center items-center">
            <Image className="object-cover" src={imagem} alt={descricao} width={250} height={200} />
         </div>
            
             <div className="bottom-0 left-0 w-full h-auto mt-20">
                <p className="text-white text-4xl font-semibold text-center">{titulo}</p>
             </div>
         </div>

        </>
    );
}

export default Card