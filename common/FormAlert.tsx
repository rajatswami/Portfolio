"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi2";

interface FormAlertProps {
  status: "success" | "error" | null;
  message?: string;
}

/** Animated inline success/error banner for forms. */
const FormAlert = ({ status, message }: FormAlertProps) => (
  <AnimatePresence>
    {status && message && (
      <motion.div
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -10, height: 0 }}
        className={`flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2.5 text-sm ${
          status === "success"
            ? "bg-green-500/10 text-green-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        {status === "success" ? (
          <HiOutlineCheckCircle size={18} className="shrink-0" />
        ) : (
          <HiOutlineExclamationCircle size={18} className="shrink-0" />
        )}
        <span>{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default FormAlert;
