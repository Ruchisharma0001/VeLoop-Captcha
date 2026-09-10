import { motion } from "framer-motion";
function Verify() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen w-full items-center justify-center bg-[#070719] px-4">

      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto mb-6 h-16 w-16 rounded-full border-2 border-cyan-400/20 border-t-cyan-400"/>

        <h2 className="text-2xl font-bold">
          Verifying selection
        </h2>

        <p className="mt-2 text-sm text-white/40">
          Checking your CAPTCHA...
        </p>

      </div>

    </motion.div>
  );
}

export default Verify;