import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ReviewInterface {
  customer: {
    name: string;
    tag: string;
    avatar: string;
  };
  order: {
    from: string;
    to: string;
  };
  review: {
    rating: number;
    heading: string;
    comment: string;
  };
  link: string;
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
};

export const divisionsOrdered: Array<string> = ["D4", "M1"];

export function nameify(name: string, limit = 45) {
  return name.length > limit ? name.slice(0, limit) + "..." : name;
}
