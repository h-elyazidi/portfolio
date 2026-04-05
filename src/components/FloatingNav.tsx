import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { Globe, Menu, X } from "lucide-react";
import { t } from "@/lib/i18n";
import { useState } from "react";

const navItems = ["about", "experience", "projects", "education"] as const;

const FloatingNav = () => {
  const { lang, toggle } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-2 py-2 hidden lg:flex items-center gap-1 shadow-2xl"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
          >
            {t(`nav.${item}`, lang)}
          </a>
        ))}
        <button
          onClick={toggle}
          className="ml-1 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 rounded-full transition-colors"
        >
          <Globe size={14} />
          {lang === "en" ? "Français" : "English"}
        </button>
      </motion.nav>

      {/* Mobile nav trigger */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-4 right-4 z-50 lg:hidden"
      >
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass-nav rounded-full p-3 shadow-2xl"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
        </button>
      </motion.div>

      {/* Mobile lang toggle */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        <button
          onClick={toggle}
          className="glass-nav rounded-full p-3 shadow-2xl flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          <Globe size={14} />
          {lang === "en" ? "Français" : "English"}
        </button>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {t(`nav.${item}`, lang)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
