import React from 'react';
import { ScanResult } from '../types';

interface DebugPanelProps {
  url: string;
  result: ScanResult | null;
}

export default function DebugPanel({ url, result }: DebugPanelProps) {
  return (
    <div className="mt-4 p-4 bg-gray-900 border border-yellow-500 rounded-lg text-xs font-mono">
      <h4 className="text-yellow-500 mb-2">Debug Information</h4>
      <div className="space-y-2">
        <div>
          <span className="text-gray-500">URL: </span>
          <span className="text-green-500">{url || 'No URL entered'}</span>
        </div>
        <div>
          <span className="text-gray-500">Last Scan Result: </span>
          <pre className="text-green-500 mt-1">
            {result ? JSON.stringify(result, null, 2) : 'No scan performed'}
          </pre>
        </div>
      </div>
    </div>
  );
}