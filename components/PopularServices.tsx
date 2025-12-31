"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";

const services = [
  { title: "Электрика", image: "/illustrations/services/electrician.svg" },
  { title: "Сантехника", image: "/illustrations/services/plumber.svg" },
  { title: "Клининг", image: "/illustrations/services/cleaning.svg" },
  { title: "Мебель", image: "/illustrations/services/furniture.svg" },
];

export default function PopularServices() {
  return (
   <motion.div variants={fadeUp} initial="initial" animate="animate">

      <h2 className="text-lg font-semibold text-stone-800 mb-4">
        Популярные услуги
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {services.map((s) => (
          <motion.button
            key={s.title}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-2xl p-4 shadow-sm text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-700">
                {s.title}
              </span>
              <Image
                src={s.image}
                alt={s.title}
                width={56}
                height={56}
                className="opacity-90"
              />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
