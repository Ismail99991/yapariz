"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Zap,
  Droplet,
  Sofa,
  Waves,
  HardHat,
  MoreHorizontal,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeUp } from "@/lib/motion";

const categories = [
  { key: "installation", icon: Wrench },
  { key: "electricity", icon: Zap },
  { key: "plumbing", icon: Droplet },
  { key: "furniture", icon: Sofa },
  { key: "pool", icon: Waves },
  { key: "construction", icon: HardHat },
  { key: "other", icon: MoreHorizontal },
];

export default function CategoryTabs() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="mb-6"
    >
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <motion.button
              key={cat.key}
              whileTap={{ scale: 0.96 }}
              className="
                flex items-center gap-2
                px-4 py-2.5
                bg-white
                rounded-full
                shadow-sm
                text-sm font-medium
                text-stone-700
                whitespace-nowrap
              "
            >
              <Icon className="w-4 h-4 text-emerald-600" />
              {t(`categories.${cat.key}`)}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
