
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-surefire-blue" />
              <span className="ml-2 text-xl font-bold tracking-wider text-white">
                SURE<span className="text-surefire-blue">FIRE</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="px-3 py-2 text-sm font-medium tracking-widest text-white hover:text-surefire-green transition-colors">
                SERVICES
              </a>
              <a href="#projects" className="px-3 py-2 text-sm font-medium tracking-widest text-white hover:text-surefire-green transition-colors">
                PROJECTS
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium tracking-widest text-white hover:text-surefire-green transition-colors">
                CONTACT
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-surefire-green"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
          <a href="#services" className="block px-3 py-3 text-base font-medium tracking-widest border-b border-surefire-green/20 text-white hover:text-surefire-green" onClick={() => setIsOpen(false)}>
            SERVICES
          </a>
          <a href="#projects" className="block px-3 py-3 text-base font-medium tracking-widest border-b border-surefire-green/20 text-white hover:text-surefire-green" onClick={() => setIsOpen(false)}>
            PROJECTS
          </a>
          <a href="#contact" className="block px-3 py-3 text-base font-medium tracking-widest border-b border-surefire-green/20 text-white hover:text-surefire-green" onClick={() => setIsOpen(false)}>
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                 (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium tracking-widest relative ${
        isActive 
          ? "text-surefire-green" 
          : "text-white hover:text-surefire-green"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-surefire-green -translate-x-1/2 transform"></span>
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                 (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`block px-3 py-3 text-base font-medium tracking-widest border-b border-surefire-green/20 ${
        isActive 
          ? "text-surefire-green neon-border" 
          : "text-white hover:text-surefire-green"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
