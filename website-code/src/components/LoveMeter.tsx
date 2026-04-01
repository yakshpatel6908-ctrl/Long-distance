import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoveMeter = () => {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLevel(101), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4">
      <motion.h2
        className="text-3xl md:text-5xl font-display text-center text-primary mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        💕 Love-O-Meter™
      </motion.h2>

      <motion.div
        className="max-w-md mx-auto cartoon-border bg-card p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-8 bg-muted rounded-full overflow-hidden border-2 border-foreground">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, hsl(340 82% 62%), hsl(0 84% 60%), hsl(340 82% 62%))" }}
            initial={{ width: "0%" }}
            whileInView={{ width: `${Math.min(level, 100)}%` }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
        </div>

        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5 }}
        >
          <p className="text-4xl font-display text-primary">101%</p>
          <p className="text-muted-foreground font-body italic">
            Error: Love exceeded maximum capacity! 💥
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveMeter;
