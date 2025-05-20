"use client";

import Link from "next/link";
import Image from "next/image";
import { sections } from "./Sections";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const isSelected = (url: string): boolean => {
    if (url === "/") {
      return url === pathname;
    }

    return pathname.startsWith(url);
  };

  return (
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
  );
}
