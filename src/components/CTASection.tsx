import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden bg-hero-gradient p-12 sm:p-20 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Start your transformation
            <br />
            today
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto mb-10">
            Join millions who are upgrading their lives with world-class programs, guided meditations, and a global community.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground px-10 py-6 text-base font-semibold hover:bg-secondary rounded-full"
          >
            Start Your Free Trial
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
