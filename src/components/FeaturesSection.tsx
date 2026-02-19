import { motion } from "framer-motion";
import { MessageSquare, Bot, Workflow, Store, Stethoscope, Utensils } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Automação WhatsApp",
    description: "Atendimento automatizado 24/7 via WhatsApp para seu negócio.",
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Bots personalizados que respondem, agendam e vendem por você.",
  },
  {
    icon: Workflow,
    title: "Integração n8n",
    description: "Fluxos automatizados conectando WhatsApp a CRMs, ERPs e mais.",
  },
  {
    icon: Stethoscope,
    title: "Clínicas & Saúde",
    description: "Agendamento, confirmação e lembretes automáticos para pacientes.",
  },
  {
    icon: Utensils,
    title: "Restaurantes & Food",
    description: "Pedidos, cardápio digital e atendimento automatizado pelo WhatsApp.",
  },
  {
    icon: Store,
    title: "Qualquer Segmento",
    description: "Soluções sob medida para varejo, serviços, educação e muito mais.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6">
            O que oferecemos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Automações inteligentes via WhatsApp para qualquer tipo de negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-7 hover:border-primary/30 transition-all cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(263_100%_65%/0.3)] transition-all">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
