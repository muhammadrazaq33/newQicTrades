import { defineRouting } from "next-intl/routing";
import { pathnames } from "./pathnames";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fr", "en"],

  // Used when no locale matches
  defaultLocale: "en",

  localeDetection: false,

  pathnames,
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
