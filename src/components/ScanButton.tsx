import React from 'react';
import { Shield, Loader2 } from 'lucide-react';

interface ScanButtonProps {
  isScanning: boolean;
}

export default function ScanButton({ isScanning }: ScanButtonProps) {
  return (
    <button
      type="submit"
      disabled={isScanning}
      className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-bold 
               rounded-lg transition-colors flex items-center justify-center space-x-2"
    >
      {isScanning ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          <span>Scanning...</span>
        </>
      ) : (
        <>
          <Shield size={20} />
          <span>Scan URL</span>
        </>
      )}
    </button>
  );
}