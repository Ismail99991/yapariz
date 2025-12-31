"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { fadeUp } from "@/lib/motion";

type TopBarProps = {
  name: string;
};

export default function TopBar({ name }: TopBarProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="flex items-center justify-between mb-6"
    >
      {/* Left: greeting */}
      <div>
        <p className="text-sm text-stone-500">
          {t("hello_name", { name })} 👋
        </p>
        <h1 className="text-xl font-semibold text-stone-800">
          {name}
        </h1>
      </div>

      {/* Right: language + bell */}
      <div className="flex items-center gap-2">
        <LanguageSwitcher />

        <button
          className="
            w-10 h-10
            rounded-full
            bg-white
            shadow-sm
            flex items-center justify-center
            active:scale-95
            transition
          "
        >
          <Bell className="w-5 h-5 text-stone-600" />
        </button>
      </div>
    </motion.div>
  );
}
