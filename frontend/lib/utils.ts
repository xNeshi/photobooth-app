import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios, { AxiosHeaders } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debug = (data: any) => {
  for (const item of data) {
    console.log("***************************");
    console.log(item);
    if (data.indexOf(item) === data.length - 1) {
      console.log("***************************");
    }
  }
};

export const sanctum = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const extractCookies = (
  headers: AxiosHeaders
): { xsrfToken?: string; sessionKey?: string } => {
  const setCookieHeader = headers?.get("set-cookie");
  const cookies: string[] = Array.isArray(setCookieHeader)
    ? setCookieHeader
    : typeof setCookieHeader === "string"
    ? [setCookieHeader]
    : [];

  const decodedCookies = cookies.map((cookie) => decodeURIComponent(cookie));

  const xsrfToken = decodedCookies
    .find((cookie) => cookie.startsWith("XSRF-TOKEN"))
    ?.split(";")[0]
    .split("=")[1]
    .split("%3D")[0];

  const sessionKey = cookies
    .find((cookie) => cookie.startsWith("laravel_session"))
    ?.split(";")[0]
    .split("=")[1]
    .split("%3D")[0];

  return { xsrfToken, sessionKey };
};
