import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl -mt-24 mx-auto flex items-center justify-between p-5">
      <div className="mr-4">
        <Link to="/">
          <img src="/images/logo-pic.jpg" alt="Logo" className="w-32 h-32 object-contain text" />
        </Link>
      </div>

      <nav className="hidden lg:flex w-full">
        <ul className="flex items-center gap-6 ml-auto">
          <li><Link to="/" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Home</Link></li>
          <li><Link to="/about" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">About</Link></li>
          <li><Link to="/skill" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Skill</Link></li>
          <li><Link to="/projects" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Projects</Link></li>
          <li><Link to="/contact" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Contact</Link></li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <CgMenuLeft className="text-3xl cursor-pointer" />
        </button>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed top-5 right-0 w-[35%] h-[45%] border rounded-2xl bg-white text-black flex flex-col items-center space-y-6 py-10 transition-all duration-800 ease-in-out z-[9999] shadow-lg lg:hidden"
        >
          <Link to="/" className="text-lg relative pb-1 hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-lg relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/skill" className="text-lg relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black" onClick={() => setIsMenuOpen(false)}>Skill</Link>
          <Link to="/projects" className="text-lg relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="text-lg relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
