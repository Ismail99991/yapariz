"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";

const banners = [
  {
    title: "Починим розетку",
    subtitle: "Быстро, аккуратно и безопасно",
    image: "/illustrations/fix_socket.svg",
    gradient: "from-emerald-100 to-emerald-200",
  },
  {
    title: "Поменяем раковину",
    subtitle: "Без шума и лишних забот",
    image: "/illustrations/sink.svg",
    gradient: "from-sky-100 to-sky-200",
  },
  {
    title: "Без потопов и стресса",
    subtitle: "Надёжные мастера рядом",
    image: "/illustrations/no_flood.svg",
    gradient: "from-amber-100 to-amber-200",
  },
];

export default function BannerCarousel() {
  return (
    <motion.div variants={fadeUp} 
    initial="initial" 
    animate="animate"
    className="mb-8"
    >

      <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {banners.map((banner) => (
          <motion.div
            key={banner.title}
            whileTap={{ scale: 0.96 }}
            className={`
              relative
              snap-start
              min-w-[300px]
              h-[150px]
              rounded-[32px]
              p-5
              bg-gradient-to-br ${banner.gradient}
              overflow-hidden
            `}
          >
            {/* Text */}
            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-lg font-semibold text-stone-800 leading-tight">
                {banner.title}
              </h3>
              <p className="text-sm text-stone-600 mt-2">
                {banner.subtitle}
              </p>
            </div>

            {/* Illustration */}
            <Image
              src={banner.image}
              alt={banner.title}
              width={140}
              height={140}
              className="
                absolute
                -right-4
                -bottom-6
                opacity-90
                pointer-events-none
              "
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-white/10 rounded-[32px]" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
