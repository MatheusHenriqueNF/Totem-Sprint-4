"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Botao from "@/app/components/Botao/botao";
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";

type EstacaoRota = string;

// const coresPorLinha: { [key: string]: string } = {
//   "Linha 1 - Azul": "bg-blue-500",
//   "Linha 2 - Verde": "bg-green-500",
//   "Linha 3 - Vermelha": "bg-red-500",
//   "Linha 4 - Amarela": "bg-yellow-500",
//   "Linha 5 - Lilás": "bg-purple-500",
//   "Linha 6 - Laranja": "bg-orange-500",
// };

export default function Rota() {

  useInactivityRedirect("/", 15000);
  
  const searchParams = useSearchParams();
  const origem = searchParams.get("origem");
  const destino = searchParams.get("destino");

  const [rota, setRota] = useState<EstacaoRota[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!origem || !destino) return;

    fetch(`http://localhost:8080/rota?origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          setErro(data.erro);
        } else {
          setRota(data);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar rota:", err);
        setErro("Erro ao buscar rota.");
      })
      .finally(() => setLoading(false));
  }, [origem, destino]);

  return (
    <div className="w-full min-h-screen p-10 bg-white flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-[#3B48EF]">Rota Calculada</h1>
        <Link href="/pages/Consulta">
          <Botao titulo="Nova Consulta" cor="#3B48EF" />
        </Link>
      </div>

      {loading ? (
        <p className="text-lg text-gray-600">🔄 Carregando rota...</p>
      ) : erro ? (
        <p className="text-red-500 text-xl">{erro}</p>
      ) : (
        <div className="w-[80%] relative flex flex-col items-start border-l-4 border-gray-300 pl-10">
          {rota.map((nomeEstacao, index) => (
            <div key={index} className="flex items-center gap-4 mb-6 relative">
              <div className="w-5 h-5 rounded-full bg-blue-500" /> {/* Cor fixa ou lógica futura */}
              <p className="text-xl font-medium">{nomeEstacao}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
