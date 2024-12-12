import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/40">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2024 StoryMagic. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-300 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-primary">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-300">
          Made with <Heart className="inline-block w-4 h-4 text-primary" /> for little dreamers
        </div>
      </div>
    </footer>
  );
};