"use client";

import Link from "next/link";
import Image from "next/image";
import { sections } from "./Sections";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { MenuIcon } from "../Icons/Menu";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const activator = useRef<SVGSVGElement | null>(null);
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(isMobile);

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
    <header className="flex gap-6 px-6 py-3">
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
          className="font-semibold bg-primary text-tertiary text-xl rounded-full px-4 py-1.5 shadow-lg"
          href={"/"}
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

        <p className="font-bold text-lg">SASGP</p>

        <Link href="/">
          <Image
            className="w-8 h-8"
            src="/Logo.svg"
            alt="SASGP"
            width={500}
            height={500}
          />
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
        <div className="max-w-[30rem] h-full bg-gray-100 pt-20">
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
      </div>
    </>
  );
}
