import React from 'react';
import { Shield, Lock, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#1f2227] py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 text-[#6ac478] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Analiza la Seguridad de Cualquier Sitio Web
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Detecta malware, phishing y amenazas en tiempo real con nuestra 
            avanzada tecnología de escaneo
          </p>
          
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <Lock className="w-8 h-8 text-[#6ac478] mb-2" />
              <h3 className="font-semibold text-white">Seguro</h3>
            </div>
            <div className="flex flex-col items-center">
              <Search className="w-8 h-8 text-[#6ac478] mb-2" />
              <h3 className="font-semibold text-white">Rápido</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}