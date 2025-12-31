"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutGrid,
  GalleryHorizontal,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeUp } from "@/lib/motion";

const services = [
  {
    key: "electricity",
    image: "/illustrations/services/electrician.svg",
    color: "text-emerald-600",
  },
  {
    key: "plumbing",
    image: "/illustrations/services/plumber.svg",
    color: "text-sky-600",
  },
  {
    key: "cleaning",
    image: "/illustrations/services/cleaning.svg",
    color: "text-amber-600",
  },
  {
    key: "furniture",
    image: "/illustrations/services/furniture.svg",
    color: "text-violet-600",
  },
];

export default function PopularServices() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"grid" | "carousel">("grid");

  return (
    <motion.div variants={fadeUp} initial="initial" animate="animate">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-stone-800">
          {t("popular_services")}
        </h2>

        {/* Switcher */}
        <button
          onClick={() =>
            setMode((m) => (m === "grid" ? "carousel" : "grid"))
          }
          className="
            w-8 h-8
            rounded-lg
            bg-white
            shadow-sm
            flex items-center justify-center
            text-stone-500
            active:scale-95
            transition
          "
        >
          {mode === "grid" ? (
            <GalleryHorizontal className="w-4 h-4" />
          ) : (
            <LayoutGrid className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Layouts */}
      <AnimatePresence mode="wait">
        {mode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="grid grid-cols-2 gap-3"
          >
            {services.map((s) => (
              <ServiceCard key={s.key} service={s} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="
              flex gap-3
              overflow-x-auto
              no-scrollbar
              snap-x snap-mandatory
            "
          >
            {services.map((s) => (
              <div key={s.key} className="snap-start min-w-[65%]">
                <ServiceCard service={s} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------------- CARD ---------------- */

function ServiceCard({
  service,
}: {
  service: {
    key: string;
    image: string;
    color: string;
  };
}) {
  const { t } = useTranslation();

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="
        relative
        w-full
        aspect-square
        bg-white
        rounded-2xl
        p-3
        shadow-sm
        hover:shadow-md
        transition-shadow
        flex flex-col
        justify-between
        text-left
      "
    >
      {/* Favorite */}
      <button
        className="
          absolute top-2 right-2
          w-8 h-8
          rounded-full
          bg-white
          shadow
          flex items-center justify-center
          active:scale-90
          transition
        "
      >
        <Heart className="w-4 h-4 text-stone-500" />
      </button>

      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={service.image}
          alt={t(`services.${service.key}`)}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <span
        className={`
          text-sm
          font-semibold
          ${service.color}
          drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]
        `}
      >
        {t(`services.${service.key}`)}
      </span>
    </motion.button>
  );
}
