"use client";

import React, { useEffect, useState } from "react";
import Botao from "@/app/components/Botao/botao";
import Link from "next/link";
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";

interface Duvida {
  idDuvida: number;
  pergunta: string;
  resposta: string;
}

const DuvidasUsuario = () => {

  useInactivityRedirect("/", 15000);

  const [duvidas, setDuvidas] = useState<Duvida[]>([]);
  const [abertaId, setAbertaId] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/duvidas")
      .then((res) => res.json())
      .then((data) => setDuvidas(data))
      .catch((err) => console.error("Erro ao carregar dúvidas:", err));
  }, []);

  const toggleResposta = (id: number) => {
    setAbertaId(abertaId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-10 py-6">
      <Link href="/pages/Menu">
        <div className="w-full flex justify-end">
          <Botao titulo="Voltar" cor="#3B48EF" />
        </div>
      </Link>

      <div className="mt-8 w-full max-w-4xl bg-white border-2 border-[#3B48EF] rounded-xl shadow-lg">
        <h1 className="text-3xl text-center font-bold text-[#3B48EF] py-6">
          Dúvidas Frequentes
        </h1>

        {duvidas.length === 0 ? (
          <p className="text-center text-gray-500 pb-6">Carregando perguntas...</p>
        ) : (
          <div className="divide-y divide-gray-200">
            {duvidas.map((duvida) => (
              <div
                key={`duvida-${duvida.idDuvida}`}
                className="cursor-pointer px-6 py-4 hover:bg-gray-100 transition-all"
                onClick={() => toggleResposta(duvida.idDuvida)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-[#3B48EF]">{duvida.pergunta}</p>
                  <span className="text-xl">{abertaId === duvida.idDuvida ? "−" : "+"}</span>
                </div>
                {abertaId === duvida.idDuvida && (
                  <p className="mt-2 text-gray-700 text-base">{duvida.resposta}</p>
                )}
              </div>
            ))}



          </div>
        )}
      </div>
    </div>
  );
};

export default DuvidasUsuario;
