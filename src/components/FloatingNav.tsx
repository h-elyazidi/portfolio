import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { Globe, Menu, X, Moon, Sun } from "lucide-react";
import { t } from "@/lib/i18n";
import { useState } from "react";
import habibLogo from "@/assets/HABIB-Logo.webp";

const navItems = ["about", "experience", "projects", "education"] as const;

const BrandLogo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-6 px-8 py-2.5 border-r border-border/50 mr-6">
      <img 
        src={habibLogo} 
        alt="HABIB" 
        className={`h-14 w-auto object-contain transition-all ${theme === 'light' ? 'mix-blend-multiply' : 'brightness-110 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]'}`} 
      />
    </div>
  );
};

const FloatingNav = () => {
  const { lang, toggle } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-3xl p-2 hidden lg:flex items-center shadow-xl border border-border/40 max-w-[min(1000px,95vw)] w-auto"
      >
        <BrandLogo />
        <div className="flex items-center gap-1 pr-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-6 py-3 text-sm font-semibold tracking-wide text-muted-foreground hover:text-primary transition-all rounded-2xl hover:bg-primary/5 whitespace-nowrap"
            >
              {t(`nav.${item}`, lang).toUpperCase()}
            </a>
          ))}
          <div className="h-8 w-px bg-border/60 mx-4" />
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-3 px-6 py-4 text-xs font-black text-primary hover:bg-primary/10 rounded-2xl transition-all tracking-widest uppercase"
            >
              <Globe size={20} />
              {lang === "en" ? "FR" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-2xl transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav trigger */}
      <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 lg:hidden">
        <motion.div
           initial={{ x: -20, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           className="glass-nav rounded-2xl px-5 py-3 shadow-lg border border-border/30"
        >
           <img src={habibLogo} alt="HABIB" className={`h-10 w-auto object-contain ${theme === 'light' ? 'mix-blend-multiply' : 'brightness-110'}`} />
        </motion.div>

        <div className="flex items-center gap-3">
          <button
              onClick={toggleTheme}
              className="glass-nav rounded-2xl p-4 shadow-lg flex items-center gap-1 text-muted-foreground border border-border/30"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button
            onClick={toggle}
            className="glass-nav rounded-2xl p-4 shadow-lg flex items-center gap-1 text-xs font-bold text-primary border border-border/30"
          >
            <Globe size={18} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="glass-nav rounded-2xl p-4 shadow-lg border border-border/30"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} className="text-foreground" /> : <Menu size={26} className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/99 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="mb-16 text-center">
              <img src={habibLogo} alt="HABIB" className="h-28 w-auto object-contain mx-auto mb-8 mix-blend-multiply" />
              <div className="h-1 w-16 bg-primary/30 mx-auto rounded-full" />
            </div>
            
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="w-full text-center px-8 py-5 rounded-3xl bg-secondary/50 text-xl font-display font-bold text-foreground hover:bg-primary hover:text-primary-foreground shadow-sm transition-all active:scale-95 tracking-wide"
                >
                  {t(`nav.${item}`, lang).toUpperCase()}
                </motion.a>
              ))}
            </nav>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-16 text-muted-foreground text-xs font-bold tracking-[0.3em] uppercase"
            >
              © 2024 HABIB EL YAZIDI
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default FloatingNav;
