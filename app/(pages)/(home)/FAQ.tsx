import { Accordion } from "@/app/components/Accordion";
import { TextField } from "@/app/components/TextField";
import Image from "next/image";
import Link from "next/link";

export function FAQ() {
  const questions: AccordionProps[] = [
    {
      title: "O que faz a SASGP?",
      content: "a",
    },
    {
      title: "Quais serviços a SASGP oferece além da gestão de projetos?",
      content: "a",
    },
    {
      title: "Como funciona o modelo de PMO oferecido pela SASGP?",
      content: "a",
    },
    {
      title: "A SASGP atende projetos fora de Alagoas?",
      content: "a",
    },
    {
      title:
        "A empresa também desenvolve softwares ou apenas gerencia projetos de implantação?",
      content: "a",
    },
    {
      title:
        "É possível contratar apenas a análise de perfil comportamental para equipes?",
      content: "a",
    },
    {
      title: "Como solicitar um orçamento para meu projeto?",
      content: "a",
    },
    {
      title: "A SASGP participa de licitações públicas?",
      content: "a",
    },
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
            <p className="text-center bg-primary text-tertiary rounded-full px-6 py-2 font-bold">
              Envie sua dúvida
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
