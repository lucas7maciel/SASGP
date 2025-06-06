"use client";

import { useEffect } from "react";
import { Card } from "./Card";
import { Forms } from "./Forms";

export default function Contact() {
  useEffect(() => {
    document.title = "SASGP - Contato";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Entre em contato conosco! Seja pelo site ou por nossas redes sociais.");
    }
  }, [])

  return (
    <>
      <div className="px-8 py-10 flex flex-col md:flex-row items-stretch gap-x-14 gap-y-6 max-w-[70rem]">
        <div className="flex-1 flex flex-col items-start justify-between">
          <div>
            <p className="text-3xl font-bold">Entre em contato!</p>
            <p className="font-semibold mt-2">
              Fale com a SASGP: escolha o canal ideal para sua necessidade -
              comercial, ouvidoria, parcerias ou faça parte do nosso time.
            </p>
            <p className="font-bold mt-1 opacity-40">* Respostas em cerca de 24 horas</p>
          </div>

          <Card extraClasses="hidden md:block" />
        </div>
        <div className="flex-1">
          <Forms />
        </div>
      </div>
    </>
  );
}
