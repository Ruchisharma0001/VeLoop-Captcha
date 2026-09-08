import { motion } from "framer-motion";

function WelcomeBonus({ onClaim }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] px-4">
      <motion.div
        className="bg-linear-to-br from-[#1c0f2c] to-[#380e62] rounded-2xl p-8 text-center text-white max-w-sm w-full shadow-2xl border border-purple-500/20"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-5xl mb-4"
        >
          💎
        </motion.div>

        <h2 className="text-2xl font-bold mb-2">Welcome to VELoop!</h2>
        <p className="text-gray-300 mb-6">
          You've got <span className="text-purple-400 font-semibold">15 Gems</span> free on signup 🎉
        </p>

        <button
          onClick={onClaim}
          className="w-full bg-linear-to-r from-purple-600 to-blue-500 text-white font-bold py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          Claim Now
        </button>
      </motion.div>
    </div>
  );
}

export default WelcomeBonus;