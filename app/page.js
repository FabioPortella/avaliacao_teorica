'use client';

import { DadosAluno } from "@/components/aluno";
import Image from "next/image";

export default function Home() {
  return (
    <>    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01f51f] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image          
          src="/marca_IFSP.png"
          alt="Instituto Federal Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <DadosAluno/>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a          
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Prova Teórica
          </h2>
          <p className={`m-3 text-sm opacity-50`}>
          Matéria: POS.00926 (D2DI2) DESENVOLVIMENTO PARA INTERNET II         
          </p>          
          <p>Professor: TIAGO ALEXANDRE DOCUSSE</p>
        </a>
      </div>
    </main>
    </>
  );
}
