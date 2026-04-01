import { motion } from "framer-motion";

const FunnyFooter = () => {
  return (
    <footer className="py-16 px-4 text-center bg-primary/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <p className="text-6xl mb-4">💖</p>
        <h2 className="text-2xl md:text-4xl font-display text-primary mb-4">
          Here's to 2 More Months...
        </h2>
        <p className="text-lg font-display text-foreground mb-2">
          ...and then 2 more after that...
        </p>
        <p className="text-lg font-display text-foreground mb-6">
          ...and then forever! 🥰
        </p>

        <div className="speech-bubble inline-block text-left">
          <p className="font-body text-foreground text-base">
            <strong>Terms & Conditions:</strong> This relationship has a 
            <span className="text-primary font-bold"> no-return policy</span>. 
            You're stuck with me. Deal with it. 😎❤️
          </p>
        </div>

        <p className="text-sm text-muted-foreground font-body mt-12">
          Made with 💕 and too much free time © 2026
        </p>
      </motion.div>
    </footer>
  );
};

export default FunnyFooter;
