import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t, tExperience } from "@/lib/i18n";
import { Briefcase, Building2 } from "lucide-react";
import company1 from "@/assets/company-1.webp";
import company2 from "@/assets/company-2.webp";
import company3 from "@/assets/company-3.webp";

// Map of icons/images
const logoMap: Record<string, string> = {
  "company-1.webp": company1,
  "company-2.webp": company2,
  "company-3.webp": company3,
};

const ExperienceSection = () => {
  const { lang } = useLang();
  const roles = tExperience(lang);

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-primary/40 rounded-full" />
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              {t("experience.title", lang)}
            </p>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-foreground">
            {t("experience.subtitle", lang)}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent" />

          <div className="space-y-12">
            {roles.map((role: any, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 sm:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/10 border-2 border-background z-10" />
                
                <div className="glass rounded-[2rem] p-6 sm:p-8 hover:bg-card/40 transition-all duration-300 group border border-border/50">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Company Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center shrink-0 overflow-hidden shadow-inner transform group-hover:scale-110 transition-transform duration-300">
                      {logoMap[role.icon] ? (
                        <img
                          src={logoMap[role.icon]}
                          alt={role.company}
                          loading="lazy"
                          width={48}
                          height={48}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <Building2 size={24} className="text-muted-foreground" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </h3>
                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider self-start md:self-center">
                          {role.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center">
                          <Briefcase size={12} className="text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                          {role.company}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                        {role.description}
                      </p>
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

