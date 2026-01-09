import { motion } from "framer-motion";
import { Code2, Swords, Trophy } from "lucide-react";

const features = [
  {
    icon: Code2,
    tag: "PRACTICE",
    title: "Solo Practice",
    description:
      "Sharpen your skills with curated questions across Data Structures, Algorithms, System Design, and more.",
  },
  {
    icon: Swords,
    tag: "COMPETE",
    title: "1v1 Duels",
    description:
      "Challenge friends or random opponents to real-time quiz battles. Answer faster, score higher.",
  },
  {
    icon: Trophy,
    tag: "RANK UP",
    title: "Leaderboard",
    description:
      "Track your progress, earn badges, and climb the global rankings. Show recruiters your skills.",
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32">
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
            FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 max-w-3xl mx-auto">
            EVERYTHING YOU NEED TO{" "}
            <span className="text-coral">ACE YOUR INTERVIEWS</span>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-lg border border-border bg-card hover:border-coral/30 transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-4 right-4 text-muted-foreground font-mono text-sm">
                [+]
              </div>

              {/* Icon */}
              <div className="mb-6 w-12 h-12 rounded flex items-center justify-center bg-surface-elevated group-hover:bg-coral/10 transition-colors">
                <feature.icon className="w-6 h-6 text-coral" />
              </div>

              {/* Tag */}
              <span className="badge-coral mb-4">{feature.tag}</span>

              {/* Title */}
              <h3 className="text-xl font-bold mt-4 mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
