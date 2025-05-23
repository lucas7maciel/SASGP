"use client";

import { Button } from "@/app/components/Button";
import { TextField } from "@/app/components/TextField";

interface FormsProps {
  extraClasses?: string;
}

export function Forms(props: FormsProps) {
  return (
    <div className={`flex-1 flex flex-col justify-between gap-4 ${props.extraClasses}`}>
      <TextField label="Nome" placeHolder="Digite seu nome" />
      <TextField label="Email" placeHolder="Digite seu email" />
      <TextField label="Telefone" placeHolder="Digite seu telefone" />
      <TextField
        label="Descrição"
        placeHolder="Digite a descrição da proposta"
        rows={3}
      />
      <Button text="Envie sua proposta" />
    </div>
  );
}
