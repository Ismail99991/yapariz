"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRequestModal } from "@/lib/useRequestModal";
import {
  Home,
  Heart,
  Wallet,
  User,
} from "lucide-react";

export default function BottomNav() {
  const { setOpen } = useRequestModal();

  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="
        fixed bottom-2 left-1/2 -translate-x-1/2
        w-[calc(100%-2rem)]
        max-w-md
        bg-white
        rounded-2xl
        shadow-lg
        px-4 py-2.5
        z-50
      "
    >
      {/* GRID = ровное распределение */}
      <div className="grid grid-cols-5 items-center">
        <NavIcon icon={Home} />
        <NavIcon icon={Heart} />

        {/* CENTRAL CTA */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="
              -mt-6
              w-14 h-14
              rounded-full
              bg-emerald-500
              flex items-center justify-center
              shadow-[0_10px_30px_rgba(16,185,129,0.35)]
              active:shadow-[0_6px_20px_rgba(16,185,129,0.45)]
            "
          >
            <Image
              src="/icons/helmet.svg"
              alt="Request specialist"
              width={45}
              height={45}
              className="text-white drop-shadow-sm"
            />
          </motion.button>
        </div>

        <NavIcon icon={Wallet} />
        <NavIcon icon={User} />
      </div>
    </motion.nav>
  );
}

function NavIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="
        flex justify-center
        text-stone-500
        active:text-stone-800
        transition
      "
    >
      <Icon className="w-5 h-5" />
    </motion.button>
  );
}
