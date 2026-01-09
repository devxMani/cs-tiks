import { motion } from "framer-motion";

const topics = [
  { 
    name: "Data Structures & Algorithms", 
    shortName: "DSA",
    count: 40, 
    icon: "∑",
    description: "Arrays, Linked Lists, Trees, Graphs, DP"
  },
  { 
    name: "Database Management", 
    shortName: "DBMS",
    count: 30, 
    icon: "⊞",
    description: "SQL, Normalization, Indexing, Transactions"
  },
  { 
    name: "Operating Systems", 
    shortName: "OS",
    count: 25, 
    icon: "⚙",
    description: "Processes, Memory, Scheduling, Deadlocks"
  },
  { 
    name: "Computer Networks", 
    shortName: "Networks",
    count: 25, 
    icon: "◎",
    description: "TCP/IP, HTTP, DNS, Routing, Security"
  },
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
              Core CS
              <span className="text-muted-foreground"> Subjects</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            DSA, DBMS, OS, Networks — all the essentials for technical interviews.
          </p>
        </motion.div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card p-6 cursor-pointer hover:bg-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <span className="text-2xl">{topic.icon}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-card border border-border rounded-full">
                    {topic.shortName}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">
                {topic.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                {topic.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  {topic.count} questions
                </span>
                <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">
                  Start Practice →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light">120+</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Questions</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light">4</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Core Topics</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Topics;
