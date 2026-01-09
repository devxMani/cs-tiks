const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-coral text-xl font-bold">//</span>
            <span className="text-xl font-bold tracking-tight">CS-DUELS</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 CS-DUELS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
