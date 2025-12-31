"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "@/lib/locales/ru/common.json";
import en from "@/lib/locales/gb/common.json";
import tr from "@/lib/locales/tr/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: ru },
      en: { common: en },
      tr: { common: tr },
    },
    lng: "ru", // язык по умолчанию
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
