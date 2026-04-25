import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { t } from "@/lib/i18n";
import { Linkedin, Mail } from "lucide-react";
import habibLogo from "@/assets/HABIB-Logo.webp";

const Footer = () => {
  const { lang } = useLang();
  const { theme } = useTheme();

  return (
    <footer className="py-20 border-t border-border bg-card transition-colors duration-500">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={habibLogo} 
              alt="HABIB" 
              className={`h-14 w-auto object-contain mb-4 transition-all ${theme === 'light' ? 'mix-blend-multiply' : 'brightness-110'}`} 
            />
            <p className="text-muted-foreground text-sm font-medium tracking-wide">
              © {new Date().getFullYear()} HABIB EL YAZIDI. {t("footer.rights", lang)}
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="mailto:m.habibelyazidi@gmail.com" className="group flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Mail</span>
            </a>
            
            <a href="https://linkedin.com/in/habib-el-yazidi" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                <Linkedin size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
