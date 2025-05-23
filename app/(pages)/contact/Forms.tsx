"use client";

import { Button } from "@/app/components/Button";
import { TextField } from "@/app/components/TextField";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { Card } from "./Card";

type MessageType = "suggestion" | "application";

export function Forms() {
  const [type, setType] = useState<MessageType>("suggestion");

  return (
    <div className="flex-1 flex flex-col gap-3 justify-between">
      <TextField label="Nome" placeHolder="Digite seu nome" />
      <TextField label="Email" placeHolder="Digite seu email" />
      <TextField
        label={"Mensagem"}
        placeHolder={
          type === "suggestion"
            ? "Digite a sua sugestão"
            : "Digite a sua candidatura"
        }
        rows={5}
      />
      <div>
        <p className="font-semibold text-primary-70 truncate">Assunto</p>
        <RadioGroup
          row
          value={type}
          onChange={(e) => setType(e.target.value as MessageType)}
        >
          <FormControlLabel
            className="flex-[1_1_48%]"
            sx={{
              span: { fontFamily: "nunito !important" },
              "span, input": { color: "var(--color-primary)" },
            }}
            value="suggestion"
            control={<Radio />}
            label="Sugestão"
          />
          <FormControlLabel
            className="flex-[1_1_48%]"
            sx={{
              span: { fontFamily: "nunito !important" },
              "span, input": { color: "var(--color-primary)" },
            }}
            value="application"
            control={<Radio />}
            label="Candidatura"
          />
        </RadioGroup>
      </div>
      <Button
        text={
          type === "suggestion" ? "Envie sua sugestão" : "Envie sua candidatura"
        }
      />

      <Card extraClasses="md:hidden text-center mt-4" />
    </div>
  );
}
