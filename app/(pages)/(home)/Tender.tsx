import Link from "next/link";

export function Tender() {
  return (
    <div className="p-10 bg-gradient-to-b from-[#4225B3] to-[#C1B1FF] text-white mt-[-40px] mb-10">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Impacto que impulsiona o futuro</h2>
        <p className="text-base text-white/90 max-w-3xl mx-auto mb-4">
          Nossas métricas não são apenas números — são provas do nosso avanço contínuo, 
          da nossa inovação constante e do valor real que entregamos aos nossos parceiros e usuários. 
          Veja como estamos moldando o amanhã com tecnologia de ponta.
        </p>

        {/* Botão como Link */}
        <Link href="/tender">
          <span className="inline-block bg-[#4225B3] text-white text-[20px] px-[40px] py-[7px] rounded-full font-semibold shadow-md hover:brightness-110 transition">
            Fazer orçamento
          </span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-center max-w-6xl mx-auto">
        {[
          { title: "+R$ 1M", subtitle: "Investido em projetos" },
          { title: "95%", subtitle: "Clientes satisfeitos" },
          { title: "120+", subtitle: "Projetos entregues" },
          { title: "+30%", subtitle: "Aumento de eficiência" },
          { title: "+5 Anos", subtitle: "de experiência na área" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 text-white border-l-4 border-white/40 p-6 rounded-md shadow-md"
          >
            <h3 className="text-3xl font-bold mb-1">{item.title}</h3>
            <p className="text-sm opacity-90">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
