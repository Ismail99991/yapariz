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
import { fadeUp } from "@/lib/motion";

const categories = [
  { label: "Монтаж", icon: Wrench },
  { label: "Электрика", icon: Zap },
  { label: "Сантехника", icon: Droplet },
  { label: "Мебель", icon: Sofa },
  { label: "Бассейн", icon: Waves },
  { label: "Стройка", icon: HardHat },
  { label: "Другое", icon: MoreHorizontal },
];

export default function CategoryTabs() {
  return (
  <motion.div variants={fadeUp} 
  initial="initial" 
  animate="animate"
  className="mb-6"
  >

      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <motion.button
              key={cat.label}
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
              {cat.label}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
