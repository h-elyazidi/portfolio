import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { t, tArray } from "@/lib/i18n";
import { downloadVCard } from "@/lib/vcard";
import { UserPlus, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.webp";
import habibLogo from "@/assets/HABIB-Logo.webp";

const HeroSection = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const roles = tArray("hero.roles", lang);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle Blue Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -mr-40 -mt-40 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 blur-[100px] -ml-20 -mb-20 rounded-full" />

      <div className="section-container relative z-10 pt-20">
        <div className="flex flex-col items-center">
          {/* Logo Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <img 
              src={habibLogo} 
              alt="HABIB" 
              className={`h-36 sm:h-48 w-auto object-contain transition-all duration-500 ${theme === 'light' ? 'mix-blend-multiply' : 'brightness-110 contrast-125 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]'}`} 
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-foreground mb-8 tracking-tight leading-[1.1]">
                  {t("hero.name", lang)}
                </h1>

                <div className="h-20 mb-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl sm:text-2xl text-primary font-semibold tracking-wide uppercase"
                    >
                      {roles[roleIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={downloadVCard}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold px-10 py-5 rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/20 text-lg"
                  >
                    <UserPlus size={22} />
                    {t("hero.saveContact", lang)}
                  </button>
                  <a
                    href="https://linkedin.com/in/habib-el-yazidi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary/80 text-foreground font-bold px-10 py-5 rounded-2xl hover:bg-secondary transition-all border border-border/50 text-lg"
                  >
                    <Linkedin size={22} />
                    {t("hero.connectLinkedIn", lang)}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-secondary">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover object-[center_20%] transition-all duration-700"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-primary/20 rounded-tr-[3rem] pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-primary/20 rounded-bl-[3rem] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

