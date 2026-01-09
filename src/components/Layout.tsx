import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import heroBg from "@/assets/hero-bg.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Global parallax background */}
      <div 
        className="fixed inset-0 z-0 will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
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
