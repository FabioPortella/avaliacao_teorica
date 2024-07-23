'use client';

import { DadosAluno } from "@/components/aluno";
import Image from "next/image";

export default function Home() {
  return (
    <>    
    <main >
      <div className="m-10 flex justify-center">
        <Image          
          src="/marca_IFSP.png"
          alt="Instituto Federal Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <DadosAluno/>

      <div className="m-10 text-center">
          <h2 className={`mb-3 text-xl font-semibold`}>
            Prova Teórica
          </h2>
          <p className={`m-3 text-sm opacity-50`}>
          Matéria: POS.00926 (D2DI2) DESENVOLVIMENTO PARA INTERNET II         
          </p>          
          <p>Professor: TIAGO ALEXANDRE DOCUSSE</p>
      </div>
    </main>
    </>
  );
}
