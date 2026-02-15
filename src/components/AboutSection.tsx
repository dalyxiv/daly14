import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-8">About</p>

        <blockquote className="text-2xl md:text-3xl font-display font-light leading-relaxed mb-10 border-l-2 border-primary pl-6">
          "Born too late to explore the world, too early to explore the universe, and just right to work with you."
        </blockquote>

        <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
          I am a confident and creative multidisciplinary designer and marketer with a strong background
          in both Product and Graphic Design. Currently pursuing a Master's in Innovation Management at
          Poznań University of Economics and Business. My expertise spans digital fabrication, food industries,
          and high-end customer-driven designs. I am self-motivated and thrive on turning complex briefs
          into immersive stories.
        </p>

        <p className="text-xs text-muted-foreground mt-10 tracking-[0.15em] font-display italic">
          ʟɪᴠɪɴɢ ɪɴ ᴛʜᴇ ᴍᴏᴍᴇɴᴛ — ɪɴ-ʙᴇᴛᴡᴇᴇɴ π · 𝘛𝘩𝘪𝘴 𝘵𝘰𝘰 𝘴𝘩𝘢𝘭𝘭 𝘱𝘢𝘴𝘴 ∞ 🐝
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
