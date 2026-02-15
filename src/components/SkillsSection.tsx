import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Design & Digital Marketing",
    skills: ["UX/UI", "Branding", "Content Strategy", "Print & Digital Design"],
  },
  {
    label: "R&D & Innovation",
    skills: ["Product Design", "Digital Manufacturing", "SolidWorks", "Fusion 360", "Blender"],
  },
  {
    label: "Software & Tools",
    skills: ["Photoshop", "Illustrator", "After Effects", "HTML/CSS", "JavaScript"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.p
        className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Expertise
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <h3 className="font-display font-semibold text-sm tracking-wider uppercase mb-6 text-foreground">
              {group.label}
            </h3>
            <div className="space-y-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
