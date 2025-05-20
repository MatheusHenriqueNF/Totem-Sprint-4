'use client';
import Link from "next/link";
import Botao from "../../components/Botao/botao";
import Card from "../../components/Cards/card";
import useInactivityRedirect from "@/app/hook/useInactivityRedirect";

const Menu = () => {
    useInactivityRedirect("/", 15000);
    return(
        <>
            <div className="w-full h-screen bg-white ">
                <div className="w-full h-20 flex justify-end items-end">
                    <Link href={"/pages/Idioma"}>
                        <div className="w-full h-20 flex justify-end items-center pr-12">
                            <Botao titulo="Voltar" cor="#3B48EF"/>
                        </div>
                    </Link>
                    <Link href={"/pages/Grupo"}>
                        <div className="w-full h-20 flex justify-end items-center pr-12">
                            <Botao titulo="Grupo" cor="#3B48EF"/>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-center items-center pt-16">
                    <div className="w-full h-[70vh] flex justify-center items-center flex-wrap gap-25">
                       <Link href={"/pages/Consulta"}><Card titulo="Consultar Rota" imagem="/image/map.png" descricao="Icone"/></Link>
                       <Link href={"/pages/Informacao"}><Card titulo="Informações de Linha" imagem="/image/ajuda.png" descricao="Icone"/></Link>
                       <Link href={"/pages/DuvidasUsuario"}><Card titulo="Ajuda" imagem="/image/users.png" descricao="Icone"/></Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Menu