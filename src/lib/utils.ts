import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tierMapping: any = {
  CH1: {
    label: "challenger",
    href: "/img/tiers/challenger.svg",
  },
  GM1: {
    label: "grandmaster",
    href: "/img/tiers/grandmaster.svg",
  },
  M1: {
    label: "master",
    href: "/img/tiers/master.svg",
  },
  D4: {
    label: "diamond iv",
    href: "/img/tiers/diamond.svg",
  },
  D3: {
    label: "diamond iii",
    href: "/img/tiers/diamond.svg",
  },
  D2: {
    label: "diamond ii",
    href: "/img/tiers/diamond.svg",
  },
  D1: {
    label: "diamond i",
    href: "/img/tiers/diamond.svg",
  },
  E1: {
    label: "emerald i",
    href: "/img/tiers/emerald.svg",
  },
  E2: {
    label: "emerald ii",
    href: "/img/tiers/emerald.svg",
  },
  E3: {
    label: "emerald iii",
    href: "/img/tiers/emerald.svg",
  },
  E4: {
    label: "emerald iv",
    href: "/img/tiers/emerald.svg",
  },
  P1: {
    label: "platinum i",
    href: "/img/tiers/platinum.svg",
  },
  P2: {
    label: "platinum ii",
    href: "/img/tiers/platinum.svg",
  },
  P3: {
    label: "platinum iii",
    href: "/img/tiers/platinum.svg",
  },
  P4: {
    label: "platinum iv",
    href: "/img/tiers/platinum.svg",
  },
  G1: {
    label: "gold i",
    href: "/img/tiers/gold.svg",
  },
  G2: {
    label: "gold ii",
    href: "/img/tiers/gold.svg",
  },
  G3: {
    label: "gold iii",
    href: "/img/tiers/gold.svg",
  },
  G4: {
    label: "gold iv",
    href: "/img/tiers/gold.svg",
  },
  S1: {
    label: "silver i",
    href: "/img/tiers/silver.svg",
  },
  S2: {
    label: "silver ii",
    href: "/img/tiers/silver.svg",
  },
  S3: {
    label: "silver iii",
    href: "/img/tiers/silver.svg",
  },
  S4: {
    label: "silver iv",
    href: "/img/tiers/silver.svg",
  },
  B1: {
    label: "bronze i",
    href: "/img/tiers/bronze.svg",
  },
  B2: {
    label: "bronze ii",
    href: "/img/tiers/bronze.svg",
  },
  B3: {
    label: "bronze iii",
    href: "/img/tiers/bronze.svg",
  },
  B4: {
    label: "bronze iv",
    href: "/img/tiers/bronze.svg",
  },
  I1: {
    label: "iron i",
    href: "/img/tiers/iron.svg",
  },
  I2: {
    label: "iron ii",
    href: "/img/tiers/iron.svg",
  },
  I3: {
    label: "iron iii",
    href: "/img/tiers/iron.svg",
  },
  I4: {
    label: "iron iv",
    href: "/img/tiers/iron.svg",
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
  "GM1",
  "CH1",
];

export const arenaTierMapping: any = {
  G1: {
    label: "gladiator",
    href: "/img/tiers/arena/gladiator.svg",
  },
  S: {
    label: "silver",
    href: "/img/tiers/arena/silver.svg",
  },
  G: {
    label: "gold",
    href: "/img/tiers/arena/gold.svg",
  },
  B: {
    label: "bronze",
    href: "/img/tiers/arena/bronze.svg",
  },
  W: {
    label: "wood",
    href: "/img/tiers/arena/wood.svg",
  },
};

export const arenaDivisionsOrdered: Array<string> = ["W", "B", "S", "G", "G1"];

export const extraOptionsMapping: any = {
  jg: "Jungle",
  mid: "Mid",
  any: "any",
  adc: "Adc",
  supp: "Support",
  top: "Top",
  D: "D",
  F: "F",
};

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
