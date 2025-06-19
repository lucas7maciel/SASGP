"use client"

import Link from "next/link";
import { useInView } from "react-intersection-observer";

export function Tender() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${!inView && 'anim-paused'} show-fade anim-delay-200 px-8 pb-24 md:px-20`}>
      <div className="bg-primary px-6 md:px-14 py-8 font-bold text-center text-tertiary rounded-3xl shadow-lg mx-auto max-w-[40rem]">
        <p className="text-3xl">Transforme seu Projeto!</p>
        <p className="mx-auto mt-1 mb-4 max-w-[45ch]">
          Soluções digitais mais produtivas, eficientes e escaláveis para uma
          Gestão de excelência no seu Projeto!
        </p>

        <Link href="/tender">
          <p className="bg-tertiary hover:bg-gray-200 text-primary font-bold text-2xl text-center px-5 py-2.5 rounded-full shadow-2xl transition-all">
            Fazer um orçamento
          </p>
        </Link>
      </div>
    </div>
  );
}
