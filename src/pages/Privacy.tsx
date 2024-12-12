import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Privacy = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">{t.privacy.title}</h1>
        <div className="prose prose-invert max-w-none">
          {t.privacy.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-200">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;