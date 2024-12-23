import { ScanResult } from '../types';
import { simulateScan } from '../utils/mockScanner';
import { analyzeWithVirusTotal } from '../utils/virusTotal';

const USE_MOCK = true; // Cambiar a false cuando VirusTotal esté configurado

export async function scanUrl(url: string): Promise<ScanResult> {
  try {
    if (USE_MOCK) {
      return await simulateScan(url);
    }
    return await analyzeWithVirusTotal(url);
  } catch (error) {
    console.error('Error en el servicio de escaneo:', error);
    throw new Error('No se pudo completar el análisis de seguridad');
  }
}