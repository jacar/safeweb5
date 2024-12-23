import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { ScanResult } from '../types';
import { scanUrl } from '../services/scannerService';
import ScanButton from './ScanButton';
import ScanResults from './ScanResults';
import DebugPanel from './DebugPanel';

export default function ScannerForm() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [debugMode, setDebugMode] = useState(false);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('La URL debe comenzar con http:// o https://');
      return;
    }

    setIsScanning(true);
    setError(null);
    
    try {
      const scanResult = await scanUrl(url);
      setResult(scanResult);
    } catch (err) {
      setError('No se pudo completar el análisis. Por favor, intente nuevamente.');
      console.error(err);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleScan} className="space-y-4">
        <div className="relative">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Ingrese la URL completa (ej: https://ejemplo.com)"
            className="w-full px-4 py-3 bg-gray-900 border border-green-500 rounded-lg 
                     text-green-500 placeholder-gray-500 focus:outline-none focus:ring-2 
                     focus:ring-green-500 focus:border-transparent"
            required
          />
          <Shield className="absolute right-3 top-3 text-green-500" size={20} />
        </div>
        
        <ScanButton isScanning={isScanning} />
        
        {error && (
          <div className="text-red-500 text-sm mt-2 bg-red-500/10 p-2 rounded">
            {error}
          </div>
        )}
        
        <button
          type="button"
          onClick={() => setDebugMode(!debugMode)}
          className="ml-2 text-sm text-gray-500 hover:text-green-500"
        >
          {debugMode ? 'Ocultar Debug' : 'Mostrar Debug'}
        </button>
      </form>

      {debugMode && <DebugPanel url={url} result={result} />}
      {result && <ScanResults result={result} />}
    </div>
  );
}