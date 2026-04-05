import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";
import { Linkedin, Mail } from "lucide-react";

const WhatsApp = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.299-.771.967-.944 1.167-.171.197-.343.223-.644.073-.3-.15-1.259-.465-2.397-1.48-.885-.79-1.482-1.764-1.656-2.064-.173-.301-.018-.465.132-.615.136-.135.301-.351.451-.525.15-.174.199-.299.3-.501.1-.198.05-.375-.025-.524-.075-.15-.672-1.62-.921-2.22-.244-.588-.493-.507-.673-.517-.173-.01-.371-.01-.57-.01-.198 0-.525.074-.798.375-.274.299-1.047 1.025-1.047 2.502S7.025 10.3 7.15 10.45c.124.15 2.136 3.259 5.174 4.569.723.311 1.287.496 1.727.635.726.231 1.387.198 1.911.12.583-.087 1.767-.721 2.016-1.417.25-.697.25-1.295.174-1.418-.076-.123-.274-.198-.554-.347" />
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Habib. {t("footer.rights", lang)}
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:m.habibelyazidi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors line-height-0">
            <Mail size={18} />
          </a>
          <a href="https://wa.me/212611398941" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors line-height-0">
            <WhatsApp size={18} />
          </a>
          <a href="https://linkedin.com/in/habib-el-yazidi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors line-height-0">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
