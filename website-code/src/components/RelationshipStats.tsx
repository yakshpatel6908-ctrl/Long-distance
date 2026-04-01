import { motion } from "framer-motion";

const stats = [
  { emoji: "📱", label: "Texts Sent", value: "4,827+", note: "(mostly memes)" },
  { emoji: "🍕", label: "Pizzas Shared", value: "23", note: "(fights over last slice: 19)" },
  { emoji: "😴", label: "Fell Asleep on Call", value: "47 times", note: "(both pretend it didn't happen)" },
  { emoji: "🤣", label: "Inside Jokes Created", value: "∞", note: "(nobody else gets them)" },
  { emoji: "😡", label: "Arguments", value: "0.5", note: "(that half one was about pineapple on pizza)" },
  { emoji: "❤️", label: "Times Said 'I Love You'", value: "999+", note: "(and still counting)" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40, rotate: -5 },
  show: { opacity: 1, y: 0, rotate: 0 },
};

const RelationshipStats = () => {
  return (
    <section className="py-16 px-4">
      <motion.h2
        className="text-3xl md:text-5xl font-display text-center text-primary mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        📊 Official Relationship Stats
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="cartoon-border bg-card p-6 text-center cursor-default"
          >
            <span className="text-5xl block mb-3">{stat.emoji}</span>
            <h3 className="font-display text-xl text-foreground mb-1">{stat.label}</h3>
            <p className="text-3xl font-display text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground font-body mt-1 italic">{stat.note}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RelationshipStats;
