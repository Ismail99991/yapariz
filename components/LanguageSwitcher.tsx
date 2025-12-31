"use client";

import { useState, useEffect } from "react";
import i18n from "i18next";
import { ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" }
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const current =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) i18n.changeLanguage(saved);
  }, []);

  function changeLanguage(code: string) {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center gap-2
          bg-white px-3 py-2
          rounded-full shadow-sm
          text-sm
        "
      >
        <span>{current.flag}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLanguage(l.code)}
              className="
                flex items-center gap-2
                px-4 py-2
                text-sm w-full text-left
                hover:bg-stone-100
              "
            >
              <span>{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
