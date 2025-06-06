"use client";

import Link from "next/link";
import Image from "next/image";
import { sections } from "./Sections";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../Icons/Menu";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const activator = useRef<SVGSVGElement | null>(null);
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(isMobile);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 767);
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [])

  useEffect(() => {
    setOpen(false);
  }, [isMobile, pathname]);

  function isSelected(url: string): boolean {
    if (url === "/") {
      return url === pathname;
    }

    return pathname.startsWith(url);
  }

  return !isMobile ? (
    <header className="flex gap-6 w-full max-w-[100rem] mx-auto px-6 py-3">
      <div className="relative h-14 w-22">
        <Link href="/">
          <Image
            className="absolute-center h-full w-auto aspect-square"
            src="/Logo.svg"
            alt="SASGP"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="flex-1 flex-center gap-4">
        {sections.map(({ title, url }) => (
          <Link
            className={`transition-all text-lg opacity-60 hover:opacity-90 ${
              isSelected(url) && "font-bold"
            }`}
            key={title}
            href={url}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex-center">
        <Link
          className="font-semibold bg-primary text-tertiary text-xl rounded-full px-4 py-1.5 shadow"
          href="https://sasgp.com.br/login-2/"
        >
          Entrar
        </Link>
      </div>
    </header>
  ) : (
    <>
      <header className="flex items-center justify-between bg-tertiary shadow px-4 py-4 z-50">
        <MenuIcon
          open={open}
          setOpen={() => setOpen((open) => !open)}
          activator={activator}
          height={30}
        />

        {/* <p className="font-bold text-lg">SASGP</p> */}
        <Image 
          className="h-10 w-16"
          src="/LogoTitle.svg"
          alt="Logo"
          width={500}
          height={500}
        />

        <Link href="https://sasgp.com.br/login-2/" className="text-primary transition-all hover:opacity-90 cursor-pointer">
          <AccountCircleRoundedIcon fontSize="large" />
        </Link>
      </header>

      <div
        className={`
          fixed top-0 w-full h-full z-40 overflow-hidden
          transition-all duration-500
        `}
        style={{ right: open ? "0%" : "100%" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setOpen(false);
          }
        }}
      >
        <div className="flex flex-col items-stretch justify-between gap-12 max-w-[30rem] h-full bg-tertiary px-5 pt-20 pb-4 shadow-2xl">
          <div
            className={`flex-1 flex-center flex-col gap-2 transition-all  ${
              !open ? "opacity-0" : "opacity-100 duration-[800ms] delay-[400ms]"
            }`}
          >
            {sections.map(({ title, url }) => (
              <Section
                key={title}
                title={title}
                url={url}
                isSelected={isSelected(url)}
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-center">
              © Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
