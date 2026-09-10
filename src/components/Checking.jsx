import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
function Checking() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex min-h-screen items-center justify-center px-4"  >

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0c0c25] p-6 sm:p-8 text-center">

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mx-auto mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-linear-to-br from-cyan-400/20 to-purple-500/20">
          <ShieldCheck size={36} className="text-cyan-400 sm:hidden" />
          <ShieldCheck size={40} className="hidden sm:block text-cyan-400" />
        </motion.div>

        <h2 className="text-xl sm:text-2xl font-bold">
          Checking your answer
        </h2>

        <p className="mt-2 text-sm text-white/40">
          Verifying your challenge securely
        </p>

        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, repeat: Infinity }}
            className="h-full w-1/2 bg-linear-to-r from-cyan-400 to-purple-500" />
        </div>

      </div>

    </motion.div>
  );
}

export default Checking;