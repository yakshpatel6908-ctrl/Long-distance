import { motion } from "framer-motion";

const emojis = ["💕", "🎉", "🥳", "💖", "✨", "🎊", "💘", "🌟"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Floating emojis */}
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl md:text-5xl select-none pointer-events-none"
          style={{
            left: `${10 + (i * 11) % 80}%`,
            top: `${5 + (i * 13) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-center z-10"
      >
        <motion.div
          className="text-7xl md:text-9xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🎉
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-display text-primary mb-4 drop-shadow-sm">
          2 Months!
        </h1>
        <p className="text-2xl md:text-4xl font-display text-foreground mb-2">
          We Actually Made It! 🥳
        </p>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground font-body mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          April 2, 2026 — The day we hit this legendary milestone
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-10 speech-bubble max-w-md text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-lg font-body font-bold text-foreground">
          "2 months together and you still haven't run away... 
          <br />That's basically a world record!" 😂
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
