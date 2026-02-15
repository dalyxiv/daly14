import { motion } from "framer-motion";

const projects = [
  {
    category: "R&D & Engineering",
    title: "Skydive Pharaohs",
    role: "R&D Engineer",
    description:
      "Developed innovative systems and optimized dropzones for safety and efficiency by 45%. Designed the 'Aerial Sports Hub' website, generating over 27M EGP in the first year.",
    tags: ["Product Design", "Web Dev", "Safety Systems"],
  },
  {
    category: "Graphic Design & Branding",
    title: "Traffic Digital Solutions",
    role: "Head of Design",
    description:
      "Managed design initiatives and created brand identities for over 20 regional and international clients.",
    tags: ["Branding", "Art Direction", "Client Management"],
  },
  {
    category: "Graphic Design & Marketing",
    title: "KOINZ",
    role: "Senior Graphic Designer",
    description:
      "Created new design themes for marketing and played a crucial role in growing network presence in Egypt and Saudi Arabia.",
    tags: ["Marketing Design", "Brand Growth", "Regional Expansion"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding max-w-6xl mx-auto">
      <motion.p
        className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Selected Works
      </motion.p>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group grid md:grid-cols-[200px_1fr] gap-6 pb-16 border-b border-border last:border-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">{project.category}</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-primary text-sm mb-4 font-display">{project.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-border text-muted-foreground font-display tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
