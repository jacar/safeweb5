import React from 'react';
import { Shield, Menu } from 'lucide-react';
import { Link } from './Link';

export default function Header() {
  return (
    <header className="bg-[#1f2227] border-b border-[#6ac478]/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://www.strongmeropower.com/wp-content/uploads/2024/12/logo.png" 
              alt="SafeWeb5 Logo" 
              className="h-10 w-auto"
            />
            <span className="text-[#6ac478] text-xl font-bold">SafeWeb5</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">Inicio</Link>
            <Link href="https://www.webcincodev.com/">Sobre mí</Link>
            <Link href="https://www.webcincodev.com/blog/">Blog</Link>
          </div>

          <button className="md:hidden">
            <Menu className="text-[#6ac478]" />
          </button>
        </div>
      </nav>
    </header>
  );
}