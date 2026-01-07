import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-lg mt-6">{t.contact.description}</p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{t.contact.phone}</h3>
                <a href="tel:+41796527416" className="text-foreground/70 hover:text-primary transition">
                  +41 79 652 74 16
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{t.contact.email}</h3>
                <a href="mailto:emanuela@example.com" className="text-foreground/70 hover:text-primary transition">
                  emanuela.clementi@example.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{t.contact.address}</h3>
                <p className="text-foreground/70">
                  Gerliswilstrasse 35<br />
                  6020 Emmenbrücke<br />
                  Schweiz
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full mt-8">
              <a href="tel:+41796527416">{t.contact.callNow}</a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.876543210987!2d8.277471!3d47.073298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479071234567890%3A0xabcdef1234567890!2sGerliswilstrasse%2035%2C%206020%20Emmenbr%C3%BCcke!5e0!3m2!1sde!2sch!4v1234567890123"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
