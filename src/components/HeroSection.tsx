import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { t, tArray } from "@/lib/i18n";
import { downloadVCard } from "@/lib/vcard";
import { UserPlus, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const { lang } = useLang();
  const roles = tArray("hero.roles", lang);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container text-center pt-24 pb-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative inline-block mb-10"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-[4px] bg-gradient-to-br from-primary via-accent to-primary glow-border overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover scale-110 transition-transform duration-500 hover:scale-125"
              width={224}
              height={224}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-sm tracking-widest uppercase mb-3"
        >
          {t("hero.greeting", lang)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground"
        >
          {t("hero.name", lang)}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-8 mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg sm:text-xl text-gradient font-medium"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={downloadVCard}
            className="save-contact-pulse inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-full hover:brightness-110 transition-all text-sm"
          >
            <UserPlus size={18} />
            {t("hero.saveContact", lang)}
          </button>
          <a
            href="https://linkedin.com/in/habib-el-yazidi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 glass text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-secondary/80 transition-all text-sm"
          >
            <Linkedin size={18} />
            {t("hero.connectLinkedIn", lang)}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
