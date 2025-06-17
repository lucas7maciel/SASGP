import { Accordion } from "@/app/components/Accordion";
import { TextField } from "@/app/components/TextField";
import Image from "next/image";
import Link from "next/link";

export function FAQ() {
  const questions: AccordionProps[] = [
    {
      title: "O que faz a SASGP?",
      content:
        "A SASGP é especializada na gestão de projetos de Implantação de Software, com foco no setor público. Atuamos como um Escritório de Projetos (PMO), oferecendo planejamento, controle, acompanhamento e suporte estratégico para garantir que os projetos sejam executados com eficiência, simplicidade e impacto. Nosso diferencial está na abordagem centrada nas pessoas, no uso de metodologias ágeis e na entrega de soluções com o nosso conhecido efeito UAU.",
    },
    {
      title: "Quais serviços a SASGP oferece além da gestão de projetos?",
      content: `
        Além da gestão de projetos, a SASGP oferece serviços complementares que potencializam os resultados das implantações, como:
        \n- Fábrica de software, por meio da nossa empresa parceira Kactux;
        \n- Análise de perfil comportamental aplicada à formação e ao desempenho das equipes;
      `,
    },
    // {
    //   title: "Como funciona o modelo de PMO oferecido pela SASGP?",
    //   content: "a",
    // },
    {
      title: "A SASGP atende projetos fora de Alagoas?",
      content:
        "Sim! Embora a sede da SASGP esteja em Alagoas, atendemos projetos em todo o Brasil. Nosso modelo de trabalho remoto e a expertise em gestão digital nos permitem apoiar implantações de software em diferentes regiões com a mesma qualidade, proximidade e compromisso",
    },
    {
      title:
        "A empresa também desenvolve softwares ou apenas gerencia projetos de implantação?",
      content:
        "A SASGP se especializa na gestão de projetos, mas oferece desenvolvimento de software por meio da Kactux, nossa parceira estratégica. Com isso, conseguimos unir o melhor dos dois mundos: gestão qualificada e soluções tecnológicas sob medida, tudo com uma visão integrada e voltada para o sucesso do cliente.",
    },
    {
      title:
        "É possível contratar apenas a análise de perfil comportamental para equipes?",
      content:
        "Sim, é possível. A análise de perfil comportamental pode ser contratada de forma avulsa, como ferramenta de apoio para gestão de equipes, processos seletivos ou desenvolvimento de lideranças. Utilizamos metodologias validadas para identificar competências, alinhar perfis e melhorar a performance do time.",
    },
    {
      title: "Como solicitar um orçamento para meu projeto?",
      content:
        "Você pode solicitar um orçamento de forma rápida e prática acessando nossa página de contato (inserir link para página de orçamento) ou enviando um e-mail para comercial@sasgp.com.br. Se preferir, também estamos disponíveis no WhatsApp. Basta informar os detalhes do seu projeto que nossa equipe entrará em contato com uma proposta personalizada.",
    },
    // {
    //   title: "A SASGP participa de licitações públicas?",
    //   content: "a",
    // },
  ];

  return (
    <div className="px-8 py-16 md:p-20 text-center">
      <h1 className="font-bold text-3xl">Perguntas Frequentes</h1>
      <h2 className="font-semibold text-lg max-w-[40ch] mx-auto mt-1">
        Aqui você vai encontrar respostas para dúvidas comuns entre potenciais
        clientes da SASGP
      </h2>

      <div className="mt-6 py-2 flex items-center flex-col gap-3 mx-auto max-w-[50rem]">
        {questions.map((question, index) => (
          <Accordion key={index} {...question} />
        ))}
      </div>

      <div className="flex flex-wrap flex-col sm:flex-row items-center justify-between gap-x-18 gap-y-4 mx-auto mt-8 max-w-[50rem]">
        <div className="flex-1">
          <p className="font-bold text-2xl mb-0.5 md:mb-auto">
            Alguma outra dúvida?
          </p>
          <p>
            Nos envie uma mensagem personalizada, ficaremos felizes em te
            responder!
          </p>
          <Image
            src="/illustrations/FAQ.svg"
            alt="FAQ"
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1 flex flex-col items-center gap-3 text-start w-full md:w-auto">
          <TextField
            extraClasses="w-full"
            label="Email"
            placeHolder="Digite seu email"
          />
          <TextField
            extraClasses="w-full"
            label="Pergunta"
            placeHolder="Digite sua pergunta"
            rows={3}
          />
          <Link href="/tender">
            <p className="text-center bg-primary hover:bg-primary-50 transition-all text-tertiary rounded-full px-6 py-2 font-bold">
              Envie sua dúvida
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
