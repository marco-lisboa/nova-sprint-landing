import { motion } from "framer-motion";

const clients = [
  { name: "CTIS", logo: "/clients/ctis.png" },
  { name: "OI Telecom", logo: "/clients/oi.png" },
  { name: "L2M", logo: "/clients/l2m.png" },
  { name: "GlobalWeb", logo: "/clients/globalweb.png" },
  { name: "SKY", logo: "/clients/sky.png" },
  { name: "Instituto de Informática", logo: "/clients/instituto-informatica.png" },
];

const ClientsCarousel = () => {
  // Duplicate for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Clientes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
            Quem <span className="text-primary neon-text">confia</span> em nós
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Empresas que já contaram com nossos serviços.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          {doubledClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 glass-card rounded-2xl px-10 py-6 flex flex-col items-center justify-center min-w-[180px] h-[120px] hover:border-primary/30 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain mb-2 opacity-70 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Hide broken image icon, show name only
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
