import { Upload, BookOpen, Wand2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Upload Photo",
    description: "Add your child's photo to start the magic",
    icon: Upload,
  },
  {
    title: "Choose Story",
    description: "Select from our magical story templates",
    icon: BookOpen,
  },
  {
    title: "Create Magic",
    description: "Watch as your child becomes the hero",
    icon: Wand2,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          How the Magic Happens
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-secondary/20 border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};