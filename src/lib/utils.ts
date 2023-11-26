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
  E1: {
    label: "emerald i",
    href: "/img/tiers/emerald.png",
  },
  E2: {
    label: "emerald ii",
    href: "/img/tiers/emerald.png",
  },
  E3: {
    label: "emerald iii",
    href: "/img/tiers/emerald.png",
  },
  E4: {
    label: "emerald iv",
    href: "/img/tiers/emerald.png",
  },
  P1: {
    label: "platinum i",
    href: "/img/tiers/platinum.png",
  },
  P2: {
    label: "platinum ii",
    href: "/img/tiers/platinum.png",
  },
  P3: {
    label: "platinum iii",
    href: "/img/tiers/platinum.png",
  },
  P4: {
    label: "platinum iv",
    href: "/img/tiers/platinum.png",
  },
  G1: {
    label: "gold i",
    href: "/img/tiers/gold.png",
  },
  G2: {
    label: "gold ii",
    href: "/img/tiers/gold.png",
  },
  G3: {
    label: "gold iii",
    href: "/img/tiers/gold.png",
  },
  G4: {
    label: "gold iv",
    href: "/img/tiers/gold.png",
  },
  S1: {
    label: "silver i",
    href: "/img/tiers/silver.png",
  },
  S2: {
    label: "silver ii",
    href: "/img/tiers/silver.png",
  },
  S3: {
    label: "silver iii",
    href: "/img/tiers/silver.png",
  },
  S4: {
    label: "silver iv",
    href: "/img/tiers/silver.png",
  },
  B1: {
    label: "bronze i",
    href: "/img/tiers/bronze.png",
  },
  B2: {
    label: "bronze ii",
    href: "/img/tiers/bronze.png",
  },
  B3: {
    label: "bronze iii",
    href: "/img/tiers/bronze.png",
  },
  B4: {
    label: "bronze iv",
    href: "/img/tiers/bronze.png",
  },
  I1: {
    label: "iron i",
    href: "/img/tiers/iron.png",
  },
  I2: {
    label: "iron ii",
    href: "/img/tiers/iron.png",
  },
  I3: {
    label: "iron iii",
    href: "/img/tiers/iron.png",
  },
  I4: {
    label: "iron iv",
    href: "/img/tiers/iron.png",
  },
};

export const divisionsOrdered: Array<string> = [
  "I4",
  "I3",
  "I2",
  "I1",
  "S4",
  "S3",
  "S2",
  "S1",
  "G4",
  "G3",
  "G2",
  "G1",
  "P4",
  "P3",
  "P2",
  "P1",
  "E4",
  "E3",
  "E2",
  "E1",
  "D4",
  "D3",
  "D2",
  "D1",
  "M1",
];

export const arenaTierMapping: any = {
  G1: {
    label: "gladiator",
    href: "/img/tiers/arena/gladiator.png",
  },
  S: {
    label: "silver",
    href: "/img/tiers/arena/silver.png",
  },
  G: {
    label: "gold",
    href: "/img/tiers/arena/gold.png",
  },
  B: {
    label: "bronze",
    href: "/img/tiers/arena/bronze.png",
  },
  W: {
    label: "wood",
    href: "/img/tiers/arena/wood.png",
  },
};

export const arenaDivisionsOrdered: Array<string> = ["W", "B", "S", "G", "G1"];

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
