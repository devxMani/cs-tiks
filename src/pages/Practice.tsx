import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const topics = [
  { id: "dsa", name: "DSA", questions: 40, description: "Arrays, Trees, Graphs, DP", icon: "⚡" },
  { id: "dbms", name: "DBMS", questions: 30, description: "SQL, Normalization, Transactions", icon: "🗄️" },
  { id: "os", name: "Operating Systems", questions: 30, description: "Processes, Memory, Scheduling", icon: "💻" },
  { id: "networks", name: "Networks", questions: 20, description: "TCP/IP, OSI, Protocols", icon: "🌐" },
];

const Practice = () => {
  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="status-badge mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              PRACTICE MODE
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mt-6 mb-4">
              Solo Practice
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Pick a topic and answer 10 random questions. Immediate feedback after each answer.
              No time pressure, just pure learning.
            </p>
          </motion.div>

          {/* Topic cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-foreground/20 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-accent flex items-center justify-center text-2xl">
                    {topic.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {topic.questions} Questions
                  </span>
                </div>
                <h3 className="text-xl font-light mb-2 group-hover:text-foreground transition-colors">
                  {topic.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{topic.description}</p>
                <button className="w-full py-3 text-sm font-medium border border-border rounded-lg hover:bg-foreground hover:text-background transition-all">
                  Start Practice
                </button>
              </motion.div>
            ))}
          </div>

          {/* Info section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 glass-card p-8"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <span className="text-3xl font-light">10</span>
                <p className="text-sm text-muted-foreground mt-1">Questions per session</p>
              </div>
              <div>
                <span className="text-3xl font-light">∞</span>
                <p className="text-sm text-muted-foreground mt-1">No time limit</p>
              </div>
              <div>
                <span className="text-3xl font-light">✓</span>
                <p className="text-sm text-muted-foreground mt-1">Immediate feedback</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Practice;
