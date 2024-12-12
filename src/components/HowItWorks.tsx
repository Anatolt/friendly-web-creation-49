import { Upload, BookOpen, Wand2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const icons = {
  "Upload Photo": Upload,
  "Choose Story": BookOpen,
  "Create Magic": Wand2,
  "Загрузите фото": Upload,
  "Выберите сказку": BookOpen,
  "Создайте магию": Wand2,
};

export const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          {t.howItWorks.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = icons[step.title as keyof typeof icons];
            return (
              <Card key={index} className="bg-secondary/20 border-accent/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};