import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 shadow-xl shadow-accent/30"
      >
        <span className="text-white font-sora font-bold text-2xl">A</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="font-sora font-semibold text-gray-800 text-lg mb-8"
      >
        Aryan Kanchan
      </motion.p>

      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="loader-dot w-2 h-2 rounded-full bg-accent"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </motion.div>
  );
}
