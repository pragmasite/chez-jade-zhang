import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.contact.title1} <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Phone */}
            <motion.a
              href="tel:+41229010746"
              whileHover={{ x: 4 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.contact.phone}</p>
                <p className="text-muted-foreground">+41 22 901 07 46</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:jiangbei0927@gmail.com"
              whileHover={{ x: 4 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.contact.email}</p>
                <p className="text-muted-foreground">jiangbei0927@gmail.com</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              whileHover={{ x: 4 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.contact.address}</p>
                <p className="text-muted-foreground">
                  Rue de Lausanne 26<br />
                  1201 Genève<br />
                  Switzerland
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41229010746">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium border border-border h-96 md:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.1234567890!2d6.144967!3d46.212137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1c0c0c0c0c0d%3A0x0!2sRue%20de%20Lausanne%2026%2C%201201%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1609459200000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chez Jade Zhang Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
