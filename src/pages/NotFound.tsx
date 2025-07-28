
import React from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative px-4 text-center">
      {/* Background effects */}
      <div className="laser-beam h-0.5 w-screen -rotate-45 top-1/4 -left-1/4"></div>
      <div className="laser-beam h-0.5 w-screen rotate-45 bottom-1/3 -right-1/4"></div>
      <div className="light-glow w-64 h-64 bg-surefire-red/10 top-1/4 right-1/4"></div>
      <div className="light-glow w-64 h-64 bg-surefire-red/10 bottom-1/4 left-1/4"></div>
      
      <div className="z-10">
        <Zap className="h-16 w-16 text-surefire-red mx-auto mb-4" />
        
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 glitch-text">404</h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wider">
          <span className="text-white">PAGE</span>
          <span className="text-surefire-red"> NOT FOUND</span>
        </h2>
        
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="px-8 py-3 bg-surefire-red text-white font-bold tracking-wider rounded hover:bg-surefire-red/90 transition-all duration-300 inline-flex items-center neon-border"
        >
          <ArrowLeft className="mr-2" />
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
