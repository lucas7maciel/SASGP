import { Accordion } from "@/app/components/Accordion";
import { TextField } from "@/app/components/TextField";
import Image from "next/image";
import Link from "next/link";

export function FAQ() {
  return (
    <div className="py-20 px-16 text-center">
      <h1 className="font-bold text-3xl">Perguntas Frequentes</h1>
      <h2 className="font-semibold text-lg w-[40ch] mx-auto mt-1">
        Aqui você vai encontrar respostas para dúvidas comuns entre potenciais
        clientes da SASGP
      </h2>

      <div className="mt-6 py-2 flex items-center flex-col gap-3 mx-auto max-w-[50rem]">
        <Accordion
          title="O que é este site? Qual o propósito dele?"
          content="A"
        />
        <Accordion title="Como posso navegar pelo site?" content="A" />
        <Accordion
          title="Como posso entrar em contato com vocês? Quais são os canais de atendimento disponíveis?"
          content="A"
        />
        <Accordion
          title="Esqueci minha senha. Como posso recuperá-la?"
          content="A"
        />
        <Accordion
          title="Esqueci minha senha. Como posso recuperá-la?"
          content="A"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-18 gap-y-4 mx-auto mt-8 max-w-[50rem]">
        <div className="flex-1">
          <p className="font-bold text-2xl mb-0.5 md:mb-auto">Alguma outra dúvida?</p>
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

        <div className="flex-1 flex flex-col items-center gap-3 text-start">
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
