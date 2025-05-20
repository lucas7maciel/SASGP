import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Forms } from "./Forms";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SASGP - Orçamento',
  description: 'Nos envie sua proposta para fazermos o melhor acordo!',
}

export default function Tender() {
  return (
    <div className="max-w-[65rem] p-16">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Faça seu orçamento!</h1>
        <h2 className="font-semibold text-lg w-[60%] mx-auto mt-2">
          Solicite seu orçamento e descubra como transformar seus projetos com
          agilidade e simplicidade
        </h2>
      </div>

      <div className="flex gap-16">
        <div className="flex-1 flex items-center justify-center">
          <Forms />
        </div>
        
        <div className="flex-1 flex-center flex-col text-center">
          <div className="flex items-center justify-center gap-3.5 text-center">
            <FontAwesomeIcon
              className="text-secondary h-7 w-7"
              icon={faMedal}
            />
            <p className="font-bold text-secondary text-3xl">Excelência na gestão</p>
          </div>

          <Image
            className="mx-auto my-4 w-full h-[60%] object-cover"
            src="/illustrations/tender.svg"
            alt="Imagem ilustrativa sobre o orçamento"
            width={500}
            height={500}
          />

          <p className="font-bold  text-xs">
            <span className="pr-1">*</span>Ao enviar suas informações, você
            permite que tratemos os dados conforme nossa política de privacidade
            e caso envie informações de contato permite que entremos em contato
            com você.
          </p>
        </div>
      </div>
    </div>
  );
}
