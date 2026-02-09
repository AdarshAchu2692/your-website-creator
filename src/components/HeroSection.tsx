import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const rotatingWords = ["every day", "in mind", "in body", "in soul", "in career"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cosmic energy background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6">
            A better you
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-gradient inline-block"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Be part of the world's most powerful life transformation platform
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-hero-gradient border-0 text-primary-foreground px-8 py-6 text-base font-semibold hover:opacity-90 glow-primary rounded-full"
            >
              Become a Member
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground px-8 py-6 text-base font-semibold hover:bg-secondary rounded-full"
            >
              Explore Programs
            </Button>
          </div>
        </motion.div>

        {/* Featured on */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 mb-8"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Featured on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-40">
            {["New York Times", "Forbes", "USA Today", "CNN", "BBC"].map((name) => (
              <span key={name} className="text-sm sm:text-base font-semibold text-foreground tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
