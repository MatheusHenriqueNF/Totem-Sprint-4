"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import InputFilter from "../../components/InputSelect/inputselect";
import Botao from "../../components/Botao/botao";
import BotaoRota from "../../components/BotaoRota/botaorota";
import { useRouter } from "next/navigation";
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";

type EstacaoOption = {
  label: string; // Linha + Estação
  value: string; // Apenas o nome da estação
};


const Consulta = () => {
    useInactivityRedirect("/", 15000);


  const [opcoes, setOpcoes] = useState<EstacaoOption[]>([]);
  const [origem, setOrigem] = useState<string>("");
  const [destino, setDestino] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const router = useRouter();


  
  useEffect(() => {
  fetch("http://localhost:8080/estacoes-linhas")
    .then((res) => res.json())
    .then((data) => {
      const listaFormatada = data.map((item: any) => ({
        label: `${item.nomeLinha} - ${item.nomeEstacao}`,
        value: item.nomeEstacao
      }));
      setOpcoes(listaFormatada);
    })
    .catch((err) => console.error("Erro ao buscar estações:", err));
}, []);


  const handleMostrarRota = () => {
    if (!origem || !destino) {
      setErro("❗ Selecione origem e destino.");
      return;
    }

    if (origem === destino) {
      setErro("❗ Origem e destino não podem ser iguais.");
      return;
    }

    router.push(
      `/pages/Rota?origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`
    );
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-full h-20 flex justify-end items-center pr-12">
        <Link href="/pages/Menu">
          <Botao titulo="Voltar" cor="#3B48EF" />
        </Link>
      </div>

      <div className="text-center mt-4">
        <h1 className="font-semibold text-5xl">
          Consultar <span className="text-[#3B48EF]">rota</span>
        </h1>
        <div className="w-[232px] h-[10px] bg-[#3B48EF] mx-auto mt-2"></div>
      </div>

      <form className="flex flex-col items-center justify-center gap-10 mt-12 w-full">
        <InputFilter
          placeholderText="Selecione sua estação atual"
          options={opcoes}
          onSelect={setOrigem}
        />
        <InputFilter
          placeholderText="Selecione seu destino"
          options={opcoes}
          onSelect={setDestino}
        />

        {erro && <p className="text-red-500 text-lg">{erro}</p>}

        <div onClick={handleMostrarRota}>
          <BotaoRota titulo="Mostrar rota" />
        </div>
      </form>
    </div>
  );
};

export default Consulta;
