import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const topics = [
  { id: "dsa", name: "Data Structures & Algorithms", shortName: "DSA", count: 35 },
  { id: "dbms", name: "Database Management", shortName: "DBMS", count: 32 },
  { id: "os", name: "Operating Systems", shortName: "OS", count: 32 },
  { id: "networks", name: "Computer Networks", shortName: "Networks", count: 32 },
  { id: "aiml", name: "AI & Machine Learning", shortName: "AI/ML", count: 35 },
  { id: "fullstack", name: "Full Stack Development", shortName: "Full Stack", count: 35 },
  { id: "webdev", name: "Web Development", shortName: "Web Dev", count: 32 },
  { id: "sysdesign", name: "System Design", shortName: "Sys Design", count: 32 },
  { id: "security", name: "Cybersecurity", shortName: "Security", count: 32 },
  { id: "cloud", name: "Cloud Computing", shortName: "Cloud", count: 32 },
];

const Topics = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/30">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-md">
            <span className="inline-block px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider rounded-full border border-border/60 bg-card/50 mb-6">
              Topics
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Core CS<span className="text-muted-foreground"> Subjects</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            10 essential topics covering everything from algorithms to cloud computing.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to="/practice"
                className="group block p-4 rounded-xl border border-border/50 bg-card/20 hover:bg-card/50 hover:border-border transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {topic.count}Q
                  </span>
                </div>
                <span className="block text-sm font-medium mb-1 group-hover:text-foreground transition-colors">
                  {topic.shortName}
                </span>
                <span className="flex items-center text-[10px] text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  Practice
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <span>300+ Questions</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>10 Topics</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Updated Regularly</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Topics;
