import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/emanuela.jpg"
              alt="Emanuela Clementi"
              className="rounded-2xl shadow-medium"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              {t.about.title1}
              <br />
              <span className="text-primary">{t.about.title2}</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-4">{t.about.p1}</p>
            <p className="text-foreground/70 text-lg mb-8">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-6 py-8 border-y">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-foreground/60">{t.about.stat1}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-foreground/60">{t.about.stat2}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">4.6★</div>
                <div className="text-sm text-foreground/60">{t.about.stat3}</div>
              </div>
            </div>

            <div className="grid gap-4 mt-8">
              {t.about.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-foreground/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
