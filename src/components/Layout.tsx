import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import heroBg from "@/assets/hero-bg.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative min-h-screen bg-background">
      {/* Global parallax background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          y
        }}
      />
      {/* Global gradient overlays */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-background/80 via-background/30 to-background/20" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
