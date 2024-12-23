import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f2227] border-t border-[#6ac478]/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 SafeWeb5. Diseño y desarrollo por{' '}
            <a 
              href="https://webcincodev.com" 
              className="text-[#6ac478] hover:text-[#6ac478]/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              webcincodev.com
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/jacar"
              className="text-[#6ac478] hover:text-[#6ac478]/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}