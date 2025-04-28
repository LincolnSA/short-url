import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import cuid from '@paralleldrive/cuid2';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateShortUrl() {
  const createUrl = cuid.init({
    random: Math.random,
    length: 10,
  });

  return createUrl();
}