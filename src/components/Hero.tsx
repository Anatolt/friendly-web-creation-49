import { Button } from "@/components/ui/button";
import { MoonIcon, SparklesIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="stars star-1"></div>
      <div className="stars star-2"></div>
      <div className="stars star-3"></div>
      <div className="stars star-4"></div>
      <div className="stars star-5"></div>
      
      <div className="absolute top-10 right-20">
        <MoonIcon className="text-yellow-200 w-8 h-8 animate-float" />
      </div>
      
      <div className="container px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Make Your Child the Hero of Their Story
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Create personalized fairytales where your child becomes the main character of magical adventures
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <SparklesIcon className="mr-2 h-5 w-5" />
          Create Your Story
        </Button>
      </div>
    </div>
  );
};