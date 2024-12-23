import React from 'react';
import { Shield, AlertTriangle, Lock, Search } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#6ac478]" />,
    title: 'Análisis en Tiempo Real',
    description: 'Escaneo instantáneo de URLs para detectar amenazas activas'
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#6ac478]" />,
    title: 'Detección de Malware',
    description: 'Identificación de software malicioso y código dañino'
  },
  {
    icon: <Lock className="w-8 h-8 text-[#6ac478]" />,
    title: 'Verificación SSL',
    description: 'Comprobación de certificados de seguridad'
  },
  {
    icon: <Search className="w-8 h-8 text-[#6ac478]" />,
    title: 'Análisis Profundo',
    description: 'Revisión exhaustiva de archivos y scripts'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-[#1f2227]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Características Principales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-[#1f2227] border border-[#6ac478]/20 rounded-lg
                         hover:border-[#6ac478] transition-colors duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}