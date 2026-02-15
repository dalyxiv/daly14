import { motion } from "framer-motion";

const timeline = [
  { year: "2024 – Present", title: "Master's in Innovation Management", place: "Poznań University of Economics and Business, Poland" },
  { year: "2022 – 2024", title: "R&D Engineer", place: "Skydive Pharaohs, Cairo, Egypt" },
  { year: "2021 – 2022", title: "Erasmus Exchange", place: "Cardiff Metropolitan University, UK" },
];

const TimelineSection = () => {
  return (
    <section id="resume" className="section-padding max-w-5xl mx-auto">
      <motion.p
        className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Timeline
      </motion.p>

      <div className="space-y-10 border-l border-border pl-8">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[2.55rem] top-1.5 w-3 h-3 border-2 border-primary bg-background rounded-full" />
            <p className="text-xs text-primary font-display tracking-wider mb-1">{item.year}</p>
            <h4 className="font-display font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.place}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
