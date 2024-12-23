import React from 'react';
import { AlertTriangle, CheckCircle, Shield, FileWarning } from 'lucide-react';
import { ScanResult } from '../types';

interface ScanResultsProps {
  result: ScanResult;
}

export default function ScanResults({ result }: ScanResultsProps) {
  return (
    <div className="mt-8 animate-fadeIn">
      <div className="p-6 bg-gray-900 border border-green-500 rounded-lg relative overflow-hidden">
        {/* Animación de escaneo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent 
                      animate-scanner" />
        
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-6">
            {result.status === 'limpio' ? (
              <CheckCircle className="text-green-500 animate-pulse" size={32} />
            ) : (
              <AlertTriangle className="text-yellow-500 animate-bounce" size={32} />
            )}
            <h3 className="text-2xl font-bold text-green-500">
              {result.status === 'limpio' ? 'URL Segura' : 'Amenazas Detectadas'}
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-black/50 rounded">
                <p className="text-gray-400">Tiempo de Escaneo</p>
                <p className="text-green-500 font-mono">{result.detallesTecnicos.tiempoEscaneo}</p>
              </div>
              <div className="p-3 bg-black/50 rounded">
                <p className="text-gray-400">Archivos Analizados</p>
                <p className="text-green-500 font-mono">{result.detallesTecnicos.archivosProcesados}</p>
              </div>
            </div>

            {result.amenazas.length > 0 && (
              <div className="mt-6">
                <h4 className="text-yellow-500 font-semibold mb-4 flex items-center">
                  <FileWarning className="mr-2" />
                  Amenazas Detectadas
                </h4>
                <div className="space-y-3">
                  {result.amenazas.map((amenaza, index) => (
                    <div key={index} 
                         className="p-4 bg-black/50 rounded border-l-4 border-yellow-500 animate-slideIn">
                      <div className="flex justify-between items-start">
                        <h5 className="text-red-400 font-semibold">{amenaza.tipo}</h5>
                        <span className={`px-2 py-1 rounded text-xs ${
                          amenaza.nivelRiesgo === 'alto' ? 'bg-red-500/20 text-red-400' :
                          amenaza.nivelRiesgo === 'medio' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          Riesgo {amenaza.nivelRiesgo}
                        </span>
                      </div>
                      <p className="text-gray-400 mt-2">{amenaza.descripcion}</p>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-500">Ubicación: </span>
                        <code className="text-green-500">{amenaza.ubicacion}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 p-4 bg-black/50 rounded">
              <h4 className="text-green-500 font-semibold mb-2">Detalles Técnicos</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">IP Analizada</p>
                  <p className="text-green-500 font-mono">{result.detallesTecnicos.direccionIP}</p>
                </div>
                <div>
                  <p className="text-gray-400">Certificado SSL</p>
                  <p className={result.detallesTecnicos.certificadoSSL?.valido ? 
                     'text-green-500' : 'text-red-500'}>
                    {result.detallesTecnicos.certificadoSSL?.valido ? 'Válido' : 'No válido'}
                    {result.detallesTecnicos.certificadoSSL?.expiracion && 
                     ` (Expira: ${result.detallesTecnicos.certificadoSSL.expiracion})`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}