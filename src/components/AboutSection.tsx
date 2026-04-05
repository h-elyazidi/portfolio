import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import me from "@/assets/me.jpeg";
import me2 from "@/assets/me2.jpeg";

const AboutSection = () => {
  const { lang } = useLang();

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            {t("about.title", lang)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-12">
            {t("about.subtitle", lang)}
          </h2>

          <div className="space-y-12 sm:space-y-20">
            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="glass rounded-2xl p-8 hover:border-primary/20 transition-colors">
                <p className="text-secondary-foreground leading-relaxed text-sm lg:text-base">
                  {t("about.p1", lang)}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto shadow-sm"
              >
                <img
                  src={me}
                  alt="Professional development"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-sm order-last md:order-first"
              >
                <img
                  src={me2}
                  alt="Collaborative work"
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="glass rounded-2xl p-8 hover:border-accent/20 transition-colors">
                <p className="text-secondary-foreground leading-relaxed text-sm lg:text-base">
                  {t("about.p2", lang)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
