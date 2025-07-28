
import { Link } from "react-router-dom";
import { Zap, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surefire-dark-gray py-8 relative overflow-hidden">
      <div className="laser-beam h-0.5 w-1/2 -rotate-45 top-0 left-0 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Zap className="h-5 w-5 text-surefire-blue" />
            <h3 className="ml-2 text-lg font-bold tracking-wider text-white">
              SURE<span className="text-surefire-blue">FIRE</span>
            </h3>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="#" icon={<Instagram size={16} />} />
            <SocialLink href="#" icon={<Facebook size={16} />} />
            <SocialLink href="#" icon={<Twitter size={16} />} />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Sure Fire Productions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-surefire-light-gray flex items-center justify-center hover:bg-surefire-green transition-colors duration-300"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <span className="text-white">{icon}</span>
  </a>
);

export default Footer;
