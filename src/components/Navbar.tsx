import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Programs", "Community", "Events", "Pricing"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="/" className="text-2xl font-bold tracking-tight text-foreground">
          Mind<span className="text-gradient">valley</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
          <Button size="sm" className="bg-hero-gradient border-0 text-primary-foreground hover:opacity-90">
            Become a Member
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card mt-2 mx-4 rounded-lg p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="bg-hero-gradient border-0 text-primary-foreground w-full mt-2">
            Become a Member
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
