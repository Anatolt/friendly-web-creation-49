import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 bg-secondary/40">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            {t.footer.rights}
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-300 hover:text-primary">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary">
              {t.footer.links.terms}
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary">
              {t.footer.links.contact}
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-300">
          {t.footer.madeWith} <Heart className="inline-block w-4 h-4 text-primary" /> {t.footer.forDreamers}
        </div>
      </div>
    </footer>
  );
};