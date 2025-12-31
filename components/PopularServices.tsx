"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { fadeUp } from "@/lib/motion";

const services = [
  { key: "electricity", image: "/illustrations/services/electrician.svg" },
  { key: "plumbing", image: "/illustrations/services/plumber.svg" },
  { key: "cleaning", image: "/illustrations/services/cleaning.svg" },
  { key: "furniture", image: "/illustrations/services/furniture.svg" },
];

export default function PopularServices() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="mb-6"
    >
      <h2 className="text-lg font-semibold text-stone-800 mb-3">
        {t("popular_services")}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {services.map((s) => (
          <motion.button
            key={s.key}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-2xl p-4 shadow-sm text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-700">
                {t(`services.${s.key}`)}
              </span>

              <Image
                src={s.image}
                alt={t(`services.${s.key}`)}
                width={56}
                height={56}
                className="opacity-90"
              />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
