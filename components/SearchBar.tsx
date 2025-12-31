"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function SearchBar() {
  return (
  <motion.div variants={fadeUp} initial="initial" animate="animate">

      {/* Search */}
      <div className="flex items-center gap-2 flex-1 bg-white rounded-2xl px-4 py-3 shadow-sm">
        <Search className="w-5 h-5 text-stone-400" />
        <input
          placeholder="Что нужно починить?"
          className="flex-1 outline-none text-sm text-stone-700 placeholder:text-stone-400"
        />
      </div>

      {/* Filter */}
      <button className="w-12 h-12 rounded-2xl bg-emerald-500 text-white shadow-sm flex items-center justify-center active:scale-95 transition">
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
