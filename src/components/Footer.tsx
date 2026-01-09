import { Link } from "react-router-dom";

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
    <footer className="border-t border-border/30 py-16">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background text-sm font-semibold">//</span>
              </div>
              <span className="text-sm font-medium">CS_DUELS</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Master CS fundamentals through quizzes and competitive 1v1 duels.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-medium mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
