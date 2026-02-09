import { motion } from "framer-motion";
import { Brain, Heart, Zap, Users, Target, Sparkles } from "lucide-react";

const categories = [
  { icon: Brain, title: "Mind", description: "Meditation, focus & mental fitness programs", color: "from-[hsl(280,80%,60%)] to-[hsl(300,70%,50%)]" },
  { icon: Heart, title: "Body", description: "Nutrition, fitness & longevity training", color: "from-[hsl(340,75%,55%)] to-[hsl(360,70%,50%)]" },
  { icon: Sparkles, title: "Soul", description: "Purpose, spirituality & inner peace", color: "from-[hsl(40,90%,55%)] to-[hsl(20,90%,55%)]" },
  { icon: Target, title: "Career", description: "Leadership, productivity & entrepreneurship", color: "from-[hsl(200,80%,55%)] to-[hsl(220,70%,50%)]" },
  { icon: Users, title: "Relationships", description: "Communication, love & parenting", color: "from-[hsl(160,70%,45%)] to-[hsl(180,60%,40%)]" },
  { icon: Zap, title: "Performance", description: "Peak states, habits & biohacking", color: "from-[hsl(50,90%,55%)] to-[hsl(30,85%,50%)]" },
];

const ProgramsSection = () => (
  <section id="programs" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Transform <span className="text-gradient">every area</span> of your life
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Choose from 100+ programs designed by the world's best teachers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-8 group cursor-pointer hover:border-primary/30 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <cat.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{cat.title}</h3>
            <p className="text-muted-foreground text-sm">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
