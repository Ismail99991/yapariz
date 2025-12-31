"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeUp } from "@/lib/motion";

export default function AddressCard() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="
          w-full
          flex items-center gap-3
          p-4
          bg-white
          rounded-2xl
          shadow-sm
          text-left
        "
      >
        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-emerald-600" />
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-stone-800">
            {t("add_address")}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {t("address_hint")}
          </p>
        </div>
      </motion.button>
    </motion.div>
  );
}
