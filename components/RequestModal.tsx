"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRequestModal } from "@/lib/useRequestModal";
import { useTranslation } from "react-i18next";

export default function RequestModal() {
  const { open, setOpen } = useRequestModal();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-6"
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            exit={{ y: 400 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-stone-800 mb-2">
              {t("modal.title")}
            </h3>

            <p className="text-sm text-stone-500 mb-6">
              {t("modal.description")}
            </p>

            <textarea
              placeholder={t("modal.description_placeholder")}
              className="w-full h-24 border border-stone-200 rounded-xl p-3 text-sm outline-none mb-4"
            />

            <button className="w-full py-3 rounded-xl bg-emerald-500 text-white font-medium">
              {t("modal.submit")}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
