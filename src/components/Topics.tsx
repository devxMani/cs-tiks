import { motion } from "framer-motion";

const topics = [
  { name: "Arrays & Strings", count: 45 },
  { name: "Linked Lists", count: 32 },
  { name: "Trees & Graphs", count: 58 },
  { name: "Dynamic Programming", count: 41 },
  { name: "System Design", count: 28 },
  { name: "OOP Concepts", count: 35 },
  { name: "Database & SQL", count: 42 },
  { name: "Networking", count: 24 },
];

const Topics = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-coral mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            TOPICS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4">
            COVER ALL THE <span className="text-coral">ESSENTIALS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-mono uppercase tracking-wide text-sm">
            From fundamentals to advanced concepts
          </p>
        </motion.div>

        {/* Topics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 rounded border border-border bg-card hover:border-coral/40 hover:bg-surface-elevated transition-all cursor-pointer"
            >
              <p className="font-medium text-foreground group-hover:text-coral transition-colors">
                {topic.name}
              </p>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                {topic.count} questions
              </p>

              {/* Hover arrow */}
              <span className="absolute bottom-4 right-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
