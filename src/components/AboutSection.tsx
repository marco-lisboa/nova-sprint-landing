import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Entregar soluções tecnológicas inovadoras que impulsionem o sucesso dos nossos clientes, tornando a tecnologia acessível e eficiente.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Estamos sempre à frente das tendências, utilizando as tecnologias mais modernas para criar produtos que fazem a diferença.",
  },
  {
    icon: Users,
    title: "Compromisso",
    description:
      "Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e entregando resultados que superam expectativas.",
  },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6">
            A <span className="text-primary neon-text">New Sprint</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos uma startup de tecnologia focada em desenvolvimento de
            software, design e soluções digitais. Combinamos criatividade e
            expertise técnica para transformar ideias em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
