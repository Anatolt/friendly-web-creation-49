import { Button } from "@/components/ui/button";
import { MoonIcon, SparklesIcon, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="stars star-1"></div>
      <div className="stars star-2"></div>
      <div className="stars star-3"></div>
      <div className="stars star-4"></div>
      <div className="stars star-5"></div>
      
      <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 bg-secondary/20 hover:bg-secondary/30 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
      >
        <Languages className="w-5 h-5" />
        {language.toUpperCase()}
      </button>

      <div className="absolute top-10 left-20">
        <MoonIcon className="text-yellow-200 w-8 h-8 animate-float" />
      </div>
      
      <div className="container px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <SparklesIcon className="mr-2 h-5 w-5" />
          {t.hero.button}
        </Button>
      </div>
    </div>
  );
};