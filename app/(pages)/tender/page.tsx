import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Forms } from "./Forms";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SASGP - Orçamento",
  description: "Nos envie sua proposta para fazermos o melhor acordo!",
};

export default function Tender() {
  return (
    <div className="max-w-[65rem] p-10 md:p-16 md:pb-26">
      <div className="text-center mb-6 md:mb-9">
        <div className="md:hidden flex items-center justify-center gap-2 mb-1 text-center">
          <FontAwesomeIcon className="text-secondary !h-4 !w-4" icon={faMedal} />
          <p className="font-bold text-secondary text-xl select-none">
            Excelência na gestão
          </p>
        </div>

        <h1 className="font-bold text-4xl">Faça seu orçamento!</h1>
        <h2 className="font-semibold text-lg w-[85%] md:w-[60%] mx-auto mt-1">
          Solicite seu orçamento e descubra como transformar seus projetos com
          agilidade e simplicidade
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-x-16 gap-y-4">
        <Forms extraClasses="flex-1" />

        <div className="flex-1 flex items-center justify-center flex-col text-center">
          <div className="hidden md:flex items-center justify-center gap-3.5 text-center">
            <FontAwesomeIcon
              className="text-secondary !h-7 !w-7"
              icon={faMedal}
            />
            <p className="font-bold text-secondary text-3xl select-none">
              Excelência na gestão
            </p>
          </div>

          <Image
            className="hidden md:block mx-auto my-4 w-full flex-[0_0_315px] h-[315px] object-cover"
            src="/illustrations/tender.svg"
            alt="Imagem ilustrativa sobre o orçamento"
            width={500}
            height={500}
          />

          <p className="font-bold text-center text-xs select-none">
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
