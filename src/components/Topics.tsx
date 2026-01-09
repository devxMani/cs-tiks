import { motion } from "framer-motion";

const topics = [
  { name: "Arrays & Strings", count: 45, icon: "[]" },
  { name: "Linked Lists", count: 32, icon: "→" },
  { name: "Trees & Graphs", count: 58, icon: "◇" },
  { name: "Dynamic Programming", count: 41, icon: "∑" },
  { name: "System Design", count: 28, icon: "⚙" },
  { name: "OOP Concepts", count: 35, icon: "◈" },
  { name: "Database & SQL", count: 42, icon: "⊞" },
  { name: "Networking", count: 24, icon: "◎" },
];

const Topics = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/30 relative">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="status-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
              TOPICS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-4">
              Cover all the
              <span className="text-muted-foreground"> essentials</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            From fundamentals to advanced concepts. Choose your path.
          </p>
        </motion.div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass-card p-6 cursor-pointer hover:bg-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <span className="text-lg">{topic.icon}</span>
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-medium mb-1 group-hover:text-foreground transition-colors">
                {topic.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {topic.count} questions
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
