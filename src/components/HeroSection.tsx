import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] w-20 h-20 rounded-xl border border-primary/30 bg-primary/5"
          animate={{
            y: [-20, 20, -20],
            rotateX: [0, 15, 0],
            rotateY: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ perspective: 800 }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-14 h-14 rounded-full border border-neon-blue/30 bg-neon-blue/5"
          animate={{
            y: [15, -25, 15],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-10 h-10 rounded-lg border border-accent/40 bg-accent/10"
          animate={{
            y: [10, -15, 10],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[25%] w-16 h-16 rounded-2xl border border-primary/20 bg-primary/5"
          animate={{
            y: [-15, 20, -15],
            rotateZ: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
        >
          Automatize seu negócio com{" "}
          <span className="text-primary neon-text">WhatsApp inteligente</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Criamos automações poderosas via WhatsApp com n8n para clínicas,
          restaurantes e qualquer segmento. Mais eficiência, menos trabalho manual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-pulse"
          >
            Automatize agora
            <ArrowRight size={18} />
          </a>
          <a
            href="#quem-somos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg glass text-foreground font-semibold hover:border-primary/50 transition-colors neon-border"
          >
            Saiba mais
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
