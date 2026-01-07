import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">{t.services.title}</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">{t.services.description}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border bg-card p-8 hover:shadow-medium hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
