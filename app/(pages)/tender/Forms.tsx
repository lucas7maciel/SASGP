"use client";

import { Button } from "@/app/components/Button";
import { TextField } from "@/app/components/TextField";

export function Forms() {
  return (
    <div className="flex-1 flex flex-col gap-4 py-2">
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
