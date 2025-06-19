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
  const activator = useRef<SVGSVGElement | null>(null);
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [onTop, setOnTop] = useState<boolean>(true);
  const [_, setPrevScrollY] = useState<number | undefined>(undefined);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(isMobile);

  useEffect(() => {
    checkIfMobile();
    checkShowHeader();

    window.addEventListener("resize", checkIfMobile);
    window.addEventListener("scroll", checkShowHeader);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", checkShowHeader);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [isMobile, pathname]);

  function isSelected(url: string): boolean {
    if (url === "/") {
      return url === pathname;
    }

    return pathname.startsWith(url);
  }

  function checkShowHeader() {
    if (!window) return false;

    const currentScrollY = window.scrollY;

    setOnTop(window.scrollY === 0);
    setPrevScrollY((prev) => {
      setShowHeader(prev === undefined || prev > currentScrollY);
      return currentScrollY;
    });
  }

  function checkIfMobile() {
    if (window) setIsMobile(window.innerWidth <= 767);
  }

  return (
    <>
      {/* Desktop */}
      <header
        className={`
        fixed left-1/2 top-0 translate-x-[-50%] z-[100] transition-all 
        ${
          showHeader &&
          !onTop &&
          "bg-tertiary shadow-lg hu:top-2 hu:shadow-xl hu:rounded-lg"
        }
        ${!showHeader && "top-[-70px]"}
        hidden md:flex gap-6 
        w-full max-w-[100rem] 
        px-6 py-3
      `}
      >
        {/* Mostrar opções de trnsição pra lara */}
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
            className="font-semibold bg-primary hover:bg-primary-50 text-tertiary text-xl rounded-full px-4 py-1.5 shadow transition-all"
            href="https://sasgp.com.br/login-2/"
          >
            Entrar
          </Link>
        </div>
      </header>

      {/* Mobile */}
      <header
        className={`
          fixed top-0 z-50
          ${showHeader && !onTop && "shadow-lg"}
          ${!showHeader && !open && "top-[-80px]"}
          flex md:hidden items-center justify-between
          w-full px-4 py-4
          bg-tertiary shadow transition-all
        `}
      >
        <MenuIcon
          open={open}
          setOpen={() => setOpen((open) => !open)}
          activator={activator}
          height={30}
        />

        <Image
          className="h-10 w-16"
          src="/LogoTitle.svg"
          alt="Logo"
          width={500}
          height={500}
        />

        <Link
          href="https://sasgp.com.br/login-2/"
          className="flex-[0_0_45px] flex items-center justify-end text-primary transition-all hover:opacity-90 cursor-pointer"
        >
          <AccountCircleRoundedIcon fontSize="large" />
        </Link>
      </header>

      <div
        className={`
          fixed top-0 w-full h-full z-40 overflow-hidden
          block md:hidden transition-all duration-500
        `}
        style={{ right: open ? "0%" : "100%" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setOpen(false);
          }
        }}
      >
        <div className="flex flex-col items-stretch justify-between gap-12 max-w-[30rem] h-screen bg-tertiary px-5 pt-20 pb-4 shadow-2xl">
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
