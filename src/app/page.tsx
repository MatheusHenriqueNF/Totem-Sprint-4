import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Link href={'/pages/Idioma'}>
        <div className="min-w-full min-h-screen bg-white flex flex-col justify-center items-center">
          <div className="min-w-full h-10 p-10">
            <h1 className="text-4xl text-[#3B48EF] font-semibold">ViaSmart</h1>
            <div className="w-45 h-2 bg-gradient-to-r from-[#3B48EF] to-white"></div>
          </div>

          <div className="w-full mt-3 h-screen flex flex-col md:flex-row space-x-2 z-10">
            <div className="w-full md:w-2/3 h-140 ml-0 md:ml-18 mt-20 flex-col bg">
              <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-semibold text-black">
                Busque <span className="text-[#3B48EF]">Novas</span> formas de <span className="text-[#3B48EF]">ir</span>
              </h2>
              <p className="ml-0 md:ml-115 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-black font-light mt-5">Toque para iniciar</p>

              <div className="md:w-300 h-[350] flex justify-left items-end mt-10 gap-2 ">
                <div className="w-7 h-7 bg-[#3B48EF] rounded-full"></div>
                <div className="w-7 h-7 bg-[#3B48EF] rounded-full"></div>
                <div className="w-7 h-7 bg-[#3B48EF] rounded-full"></div>
              </div>
            </div>

            <div className="bg-[#3B48EF] w-full md:w-150 h-215,2 rounded-l-full ml-auto flex justify-center items-center">
              <Image className="mt-[-58]" src="/image/atendente.png" alt="Atendente do toten" width={550} height={500} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-white px-6">
//       <Link href={'/Idioma'} className="w-full max-w-5xl">
//         {/* Cabeçalho */}
//         <div className="flex justify-start items-center">
//           <h1 className="text-3xl font-semibold text-[#3B48EF]">
//             ViaSmart
//           </h1>
//           <div className="w-20 h-1 ml-2 bg-gradient-to-r from-[#3B48EF] to-transparent"></div>
//         </div>

//         {/* Conteúdo Principal */}
//         <div className="flex flex-col md:flex-row items-center mt-6">
//           {/* Texto */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
//               Busque <span className="text-[#3B48EF]">Novas</span> formas de <span className="text-[#3B48EF]">ir</span>
//             </h2>
//             <p className="text-lg text-gray-700 mt-4">Toque para iniciar</p>

//             {/* Indicadores de navegação */}
//             <div className="flex justify-center md:justify-start mt-6 gap-2">
//               <div className="w-5 h-5 bg-[#3B48EF] rounded-full"></div>
//               <div className="w-5 h-5 bg-[#3B48EF] rounded-full"></div>
//               <div className="w-5 h-5 bg-[#3B48EF] rounded-full"></div>
//             </div>
//           </div>

//           {/* Imagem */}
//           <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
//             <div className="absolute w-[80%] h-[80%] bg-[#3B48EF] rounded-full right-0 top-10 -z-10"></div>
//             <Image
//               src="/image/atendente.png"
//               alt="Atendente do totem"
//               width={400}
//               height={400}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }
