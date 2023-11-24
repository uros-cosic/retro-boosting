import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tierMapping: any = {
  M1: {
    label: "master",
    href: "/img/tiers/master.png",
  },
  D4: {
    label: "diamond iv",
    href: "/img/tiers/diamond.png",
  },
  D3: {
    label: "diamond iii",
    href: "/img/tiers/diamond.png",
  },
  D2: {
    label: "diamond ii",
    href: "/img/tiers/diamond.png",
  },
  D1: {
    label: "diamond i",
    href: "/img/tiers/diamond.png",
  },
};

export const divisionsOrdered: Array<string> = ["D4", "D3", "D2", "D1", "M1"];

export const arenaTierMapping: any = {
  G1: {
    label: "gladiator",
    href: "/img/tiers/arena/gladiator.png",
  },
};

export const arenaDivisionsOrdered: Array<string> = ["G1"];

export function nameify(name: string, limit = 45) {
  return name.length > limit ? name.slice(0, limit) + "..." : name;
}

export function priceify(number: number) {
  const numberStr = String(number);
  const parts = numberStr.split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (parts.length === 1) {
    return integerPart;
  } else {
    return integerPart + "." + parts[1];
  }
}
