import { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import background from "@/assets/background.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Fixed parallax background container */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-[120%] will-change-transform"
          style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            transform: `translate3d(0, ${-scrollY * 0.5}px, 0)`,
          }}
        />
      </div>
      
      {/* Gradient overlays for readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      
      {/* Subtle vignette effect */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 100%)'
        }}
      />
      
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
