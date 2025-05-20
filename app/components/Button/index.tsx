"use client";

import { Button as MuiButton } from "@mui/material";

// + Estender da mui
interface ButtonProps {
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <MuiButton className="!bg-primary !text-tertiary !rounded-full !text-xl !font-bold !normal-case nunito !py-2">
      {props.text}
    </MuiButton>
  );
}
