import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "20M+", label: "Students worldwide" },
  { value: "100+", label: "Transformational programs" },
  { value: "200+", label: "World-class authors" },
  { value: "195", label: "Countries reached" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Entrepreneur",
    text: "This platform completely changed how I approach personal growth. The programs are world-class and the community is incredibly supportive.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Software Engineer",
    text: "I've tried many self-improvement platforms, but nothing comes close to the depth and quality of content here. Truly life-changing.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Teacher",
    text: "The meditation and mindfulness programs helped me find balance in my hectic life. I recommend this to everyone I know.",
    rating: 5,
  },
];

const SocialProofSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Stats */}
    <div className="container mx-auto px-6 mb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2">
              {stat.value}
            </div>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Testimonials */}
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Loved by <span className="text-gradient">millions</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed text-sm">
              "{t.text}"
            </p>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
