import { motion } from "framer-motion";

const AnimatedArrow = ({ active }) => {
  return (
    <div className="relative flex h-16 w-full items-center justify-center">

      {/* Vertical Line */}
      <div
        className={`h-full w-1 rounded-full transition-all duration-500 ${
          active ? "bg-blue-600" : "bg-slate-300"
        }`}
      />

      {/* Moving Dot */}
      {active && (
        <motion.div
          initial={{ y: -25 }}
          animate={{ y: 25 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-4 w-4 rounded-full bg-blue-600 shadow-lg shadow-blue-400"
        />
      )}
    </div>
  );
};

export default AnimatedArrow;