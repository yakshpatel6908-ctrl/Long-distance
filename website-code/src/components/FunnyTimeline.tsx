import { motion } from "framer-motion";

const milestones = [
  { day: "Day 1", event: "Started dating 🥰", detail: "Two brave souls entered the unknown" },
  { day: "Day 3", event: "First awkward silence 😶", detail: "It lasted 4.7 seconds. Felt like 4.7 years." },
  { day: "Day 7", event: "Exchanged memes 📱", detail: "The real love language was discovered" },
  { day: "Day 14", event: "Survived first argument 🤝", detail: "Topic: Who hangs up first. Answer: Neither." },
  { day: "Day 30", event: "1 Month! 🎂", detail: "Officially longer than most Netflix shows" },
  { day: "Day 45", event: "Started finishing each other's... 🍟", detail: "...sentences. And fries. Mostly fries." },
  { day: "Day 60", event: "2 MONTHS! 🏆", detail: "Achievement Unlocked: Legendary Couple Status!" },
];

const FunnyTimeline = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <motion.h2
        className="text-3xl md:text-5xl font-display text-center text-primary mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        🗓️ Our Epic Journey
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="cartoon-border-sm bg-card p-5 flex gap-4 items-start cursor-default"
          >
            <div className="bg-primary text-primary-foreground font-display text-sm px-3 py-1 rounded-lg whitespace-nowrap shrink-0">
              {m.day}
            </div>
            <div>
              <h3 className="font-display text-lg text-foreground">{m.event}</h3>
              <p className="text-muted-foreground font-body text-sm">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FunnyTimeline;
