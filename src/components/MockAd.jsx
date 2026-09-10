import { useEffect } from "react";
import { motion } from "framer-motion";
import { Gem } from "lucide-react";
function MockAd({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-[65vh] items-center justify-center" >

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0c0c25] p-8 text-center">

        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-yellow-400/20 to-purple-500/20">
          <Gem
            size={40} className="text-yellow-400" />
        </motion.div>

        <h2 className="mt-6 text-2xl font-bold">
          Preparing your reward...
        </h2>

        <p className="mt-2 text-sm text-white/40">
          Your next challenge is almost ready.
        </p>

        <div className="mt-6 flex justify-center gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400 [animation-delay:300ms]" />
        </div>

      </div>

    </motion.div>
  );
}

export default MockAd;