import React from "react";

type BotaoProps = {
  titulo?: string;
  clicando?: () => void;
  cor?: string;
  corTexto?: string;
};

const BotaoRota: React.FC<BotaoProps> = ({
  titulo = "Titulo",
  clicando,
  cor = "#3B48EF",
  corTexto = "white" 
}) => {
  return (
    <div
      className="w-100 h-20 rounded-2xl flex justify-center items-center font-semibold cursor-pointer text-3xl"
      style={{ backgroundColor: cor,
               color: corTexto    
       }} 
      onClick={clicando}
    >
      <p>{titulo}</p>
    </div>
  );
};

export default BotaoRota;
