import React from "react";
import Image from "next/image";

type CardProps = {
  titulo?: string;
  descricao?: string;
  imagem?: string;
  clicando?: () => void;
};

const CardIdioma: React.FC<CardProps> = ({
  titulo = "Titulo",
  descricao = "Descrição",
  imagem = "/image/nome.png",
  clicando,
}) => {
  return (
    <>
      <div className="relative w-80 h-130 bg-white rounded-3xl flex flex-col justify-center items-center p-10">
        <div className="relative w-50 h-100 rounded-full flex justify-center items-center">
          <Image
            src={imagem}
            alt={descricao}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

        <div className="bottom-0 left-0 w-auto h-auto mt-10">
          <p className="text-black text-2xl font-semibold text-center mt-4">{titulo}</p>
        </div>
      </div>
    </>
  );
};

export default CardIdioma;