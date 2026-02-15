import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-4">Contact</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
          Ready to innovate? Let's connect.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="mailto:dalyxiv@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm">dalyxiv@gmail.com</span>
          </a>
          <a href="tel:+48453112269" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm">+48 453 112 269</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm">Poznań, Poland</span>
          </div>
        </div>

        <div className="flex gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-display tracking-wider uppercase"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-display tracking-wider uppercase"
          >
            Behance
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
