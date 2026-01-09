import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const links = {
    Product: [
      { name: "Practice", href: "/practice" },
      { name: "Duel", href: "/duel" },
      { name: "Leaderboard", href: "/leaderboard" },
    ],
    Topics: [
      { name: "DSA", href: "/practice" },
      { name: "DBMS", href: "/practice" },
      { name: "System Design", href: "/practice" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "GitHub", href: "#" },
    ],
  };

  return (
    <footer className="relative py-16 border-t border-border/10">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-foreground/[0.02] blur-[100px] rounded-full" />
      </div>
      
      <div className="container px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-background text-sm font-bold">//</span>
              </div>
              <span className="text-sm font-medium">CS_DUELS</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Master CS fundamentals through quizzes and competitive 1v1 duels.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([title, items], index) => (
            <motion.div 
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-sm font-medium mb-4 text-foreground/80">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-xs text-muted-foreground">
            © 2026 CS_DUELS. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
