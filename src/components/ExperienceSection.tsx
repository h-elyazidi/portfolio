import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t, tExperience } from "@/lib/i18n";
import { Briefcase } from "lucide-react";
import company1 from "@/assets/company-1.png";
import company2 from "@/assets/company-2.png";
import company3 from "@/assets/company-3.png";

const companyLogos = [company1, company1, company2];

const ExperienceSection = () => {
  const { lang } = useLang();
  const roles = tExperience(lang);

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            {t("experience.title", lang)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-12">
            {t("experience.subtitle", lang)}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="glass rounded-2xl p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-card/80 border border-border flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={companyLogos[i]}
                        alt={role.company}
                        loading="lazy"
                        width={40}
                        height={40}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="font-semibold text-foreground">{role.title}</h3>
                        <span className="text-xs text-muted-foreground font-mono">{role.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase size={14} className="text-primary" />
                        <span className="text-sm text-primary">{role.company}</span>
                      </div>
                      <p className="text-secondary-foreground text-sm leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
