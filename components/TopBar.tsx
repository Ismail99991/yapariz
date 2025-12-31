"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { fadeUp } from "@/lib/motion";

type TopBarProps = {
  name: string;
};

export default function TopBar({ name }: TopBarProps) {
  return (
    <motion.div
      {...fadeUp}
      className="flex items-center justify-between mb-6"
    >
      <div>
        <p className="text-sm text-stone-500">Привет 👋</p>
        <h1 className="text-xl font-semibold text-stone-800">
          {name}
        </h1>
      </div>

      <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center active:scale-95 transition">
        <Bell className="w-5 h-5 text-stone-600" />
      </button>
    </motion.div>
  );
}
