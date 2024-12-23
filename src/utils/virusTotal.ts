import { ScanResult } from '../types';
import { formatDateTime } from './formatters';

const VIRUSTOTAL_API_KEY = import.meta.env.VITE_VIRUSTOTAL_API_KEY;
const API_BASE_URL = 'https://www.virustotal.com/vtapi/v2';

export async function analyzeWithVirusTotal(url: string): Promise<ScanResult> {
  if (!VIRUSTOTAL_API_KEY) {
    throw new Error('API key de VirusTotal no configurada');
  }

  try {
    const scanId = await submitUrlForScanning(url);
    const report = await getAnalysisReport(scanId);
    return processReport(report, url);
  } catch (error) {
    console.error('Error en VirusTotal:', error);
    throw new Error('Error al comunicarse con VirusTotal');
  }
}

async function submitUrlForScanning(url: string): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/url/scan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `apikey=${VIRUSTOTAL_API_KEY}&url=${encodeURIComponent(url)}`,
  });

  if (!response.ok) {
    throw new Error('Error al enviar URL para análisis');
  }

  const data = await response.json();
  return data.scan_id;
}

async function getAnalysisReport(scanId: string) {
  const response = await fetch(
    `${API_BASE_URL}/url/report?apikey=${VIRUSTOTAL_API_KEY}&resource=${scanId}`
  );

  if (!response.ok) {
    throw new Error('Error al obtener reporte de análisis');
  }

  return response.json();
}

function processReport(report: any, url: string): ScanResult {
  const amenazas = Object.entries(report.scans)
    .filter(([_, result]: [string, any]) => result.detected)
    .map(([engine, result]: [string, any]) => ({
      tipo: result.result,
      descripcion: `Detectado por ${engine}`,
      ubicacion: url,
      nivelRiesgo: result.result.toLowerCase().includes('malware') ? 'alto' : 'medio'
    }));

  return {
    status: amenazas.length > 0 ? 'infectado' : 'limpio',
    amenazas,
    detallesTecnicos: {
      tiempoEscaneo: formatDateTime(new Date(report.scan_date)),
      archivosProcesados: 1,
      direccionIP: report.ip_address,
      certificadoSSL: {
        valido: true,
        expiracion: null
      }
    }
  };
}