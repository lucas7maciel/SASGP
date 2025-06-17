import Link from "next/link";

export default function Stats() {
  return (
    <div className="p-10 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-tertiary)] text-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="show-fade anim-delay-400 text-4xl font-bold mb-4">
          Impacto que impulsiona o futuro
        </h2>
        <p className="show-fade anim-delay-600 text-base text-white/90 max-w-3xl mx-auto mb-4">
          Nossas métricas não são apenas números — são provas do nosso avanço
          contínuo, da nossa inovação constante e do valor real que entregamos
          aos nossos parceiros e usuários.
          {/*  Veja como estamos moldando o amanhã com tecnologia de ponta. */}
        </p>

        {/* Botão como Link */}
        <Link href="/tender">
          <span className="show-fade anim-delay-800 inline-block bg-primary text-white text-[20px] px-[40px] py-[7px] rounded-full font-semibold shadow-md hover:bg-primary-50 transition-all">
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
            className="show-fade w-full text-center md:text-start md:max-w-[195px] bg-white/10 text-white border-l-4 border-white/40 p-6 rounded-md shadow-md"
            style={{
                animationDelay: `${(index + 1) * 80 + 800}ms`
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
