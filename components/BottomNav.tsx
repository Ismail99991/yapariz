"use client";

import { motion } from "framer-motion";
import { useRequestModal } from "@/lib/useRequestModal";
import {
  Home,
  Heart,
  HardHat,
  Wallet,
  User,
} from "lucide-react";

export default function BottomNav() {
    const { open, setOpen } = useRequestModal();

  return (
    <motion.nav
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        w-[calc(100%-2rem)]
        max-w-md
        bg-white
        rounded-2xl
        shadow-lg
        px-6 py-3
        z-50
      "
    >
      <div className="flex items-center justify-between">
        {/* Home */}
        <NavItem icon={Home} label="Главная" />

        {/* Favorites */}
        <NavItem icon={Heart} label="Избранное" />

        {/* Center CTA */}
        <motion.button
        onClick={() => setOpen(true)}
          whileTap={{ scale: 0.9 }}
          className="
         -mt-6
         translate-y-2
         w-14 h-14
         rounded-full
         bg-emerald-500
         flex items-center justify-center
         text-white
         shadow-[0_10px_30px_rgba(16,185,129,0.35)]
         active:shadow-[0_6px_20px_rgba(16,185,129,0.45)]
          "
        >
          <HardHat className="w-6 h-6" />
        </motion.button>

        {/* Balance */}
        <NavItem icon={Wallet} label="Баланс" />

        {/* Profile */}
        <NavItem icon={User} label="Профиль" />
      </div>
    </motion.nav>
  );
}

function NavItem({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="
        flex flex-col items-center gap-1
        text-stone-500
        text-xs
      "
    >
      <Icon className="w-5 h-5" />
      {label}
    </motion.button>
  );
}
