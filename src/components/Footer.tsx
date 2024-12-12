import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Link } from "react-router-dom";

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
            <Link to="/privacy" className="text-sm text-gray-300 hover:text-primary">
              {t.footer.links.privacy}
            </Link>
            <Link to="/terms" className="text-sm text-gray-300 hover:text-primary">
              {t.footer.links.terms}
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-300">
          {t.footer.madeWith} <Heart className="inline-block w-4 h-4 text-primary" /> {t.footer.forDreamers}
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">{t.footer.support.title}</h3>
          <div className="space-y-2">
            <p className="text-gray-300">
              {t.footer.support.telegram}: {' '}
              <a href="https://t.me/yavskazke_community" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                @yavskazke_community
              </a>
            </p>
            <p className="text-gray-300">
              {t.footer.support.email}: {' '}
              <a href="mailto:help@yavskazke.site" className="text-primary hover:underline">
                help@yavskazke.site
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};