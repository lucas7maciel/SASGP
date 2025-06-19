"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    initialInView: false,
  });

  return (
    <div
      ref={ref}
      className="p-10 bg-gradientt-to-b bg-primary from-[var(--color-primary)] to-[vafr(--color-tertiary)] text-tertiary"
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2
          className={`${
            !inView && "anim-paused"
          } show-fade anim-delay-400 text-4xl font-bold mb-2`}
        >
          Impacto que impulsiona o futuro
        </h2>
        <p
          className={`${
            !inView && "anim-paused"
          } show-fade anim-delay-600 font-semibold text-base text-tertiary max-w-3xl mx-auto mb-4`}
        >
          Nossas métricas não são apenas números — são provas do nosso avanço
          contínuo, da nossa inovação constante e do valor real que entregamos
          aos nossos parceiros e usuários.
          {/*  Veja como estamos moldando o amanhã com tecnologia de ponta. */}
        </p>

        {/* Botão como Link */}
        <Link href="/tender">
          <span
            className={`
              inline-block bg-tertiary font-bold text-primary
              text-2xl px-[40px] py-[7px] rounded-full shadow-md
              hover:bg-gray-100 transition-all show-fade anim-delay-800
              ${!inView && "anim-paused"}`}
          >
            Fazer um orçamento
          </span>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch md:items-center flex-wrap gap-[20px] justify-center max-w-6xl mx-auto pb-10">
        {[
          { title: "+R$ 1M", subtitle: "Investido em projetos" },
          { title: "95%", subtitle: "Clientes satisfeitos" },
          { title: "120+", subtitle: "Projetos entregues" },
          { title: "+30%", subtitle: "Aumento na eficiência" },
          { title: "+5 Anos", subtitle: "De experiência" },
        ].map((item, index) => (
          <div
            key={index}
            className={`
              w-full text-center md:text-start md:max-w-[195px] bg-white/10 show-fade transition-all
            text-tertiary border-l-4 border-white/40 p-6 rounded-md shadow-md hover:translate-y-[-0.25rem]
              ${!inView && "anim-paused"}
            `}
            style={{
              animationDelay: `${(index + 1) * 80 + 800}ms`,
            }}
          >
            <h3 className="text-3xl font-bold mb-1">{item.title}</h3>
            <p className="font-semibold text-sm opacity-90">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
