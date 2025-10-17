"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Locale } from "@/i18n/routing";

export default function LocaleToggleButton() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale;
  const nextLocale: Locale = currentLocale === "en" ? "fr" : "en";

  const handleToggle = () => {
    router.replace(
      // @ts-expect-error: Next route typing is strict but safe here
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <button
      onClick={handleToggle}
      className="text-white text-[18px] sm:text-[22px] lg:text-[22px] bg-no-repeat font-medium px-3 lg:px-4 bg-contain py-1 hover:scale-105 transition-transform duration-300"
    >
      <p className="-mt-1">EN / FR</p>
    </button>
  );
}
