import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { GraduationCap } from "lucide-react";
import universityImg from "@/assets/university.jpg";
import schoolLogo from "@/assets/school-logo.png"; // User will add this later

const EducationSection = () => {
  const { lang } = useLang();

  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            {t("education.title", lang)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
            {t("education.subtitle", lang)}
          </h2>

          <div className="glass rounded-2xl overflow-hidden max-w-3xl">
            <div className="relative h-48 overflow-hidden">
              <img
                src={universityImg}
                alt="University campus"
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
            <div className="p-5 sm:p-8 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card/80 border border-border flex items-center justify-center shrink-0 overflow-hidden">
                  {schoolLogo ? (
                    <img
                      src={schoolLogo}
                      alt={t("education.school", lang)}
                      loading="lazy"
                      width={40}
                      height={40}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // If image fails to load, replace with Icon
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) parent.classList.add('bg-primary/10');
                      }}
                    />
                  ) : (
                    <GraduationCap className="text-primary" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{t("education.degree", lang)}</h3>
                  <p className="text-primary text-sm mb-1">{t("education.school", lang)}</p>
                  <p className="text-muted-foreground text-xs font-mono mb-3">{t("education.period", lang)}</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">
                    {t("education.description", lang)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
