import { ScanResult } from '../types';
import { getRandomIP, formatDateTime } from './formatters';

export async function simulateScan(url: string): Promise<ScanResult> {
  // Simular tiempo de procesamiento
  await new Promise(resolve => setTimeout(resolve, 2000));

  const isInfected = Math.random() > 0.5;
  const amenazas = isInfected ? [
    {
      tipo: 'Malware',
      descripcion: 'Código malicioso detectado en archivo JavaScript',
      ubicacion: `${url}/assets/js/main.js`,
      nivelRiesgo: 'alto'
    }
  ] : [];

  return {
    status: isInfected ? 'infectado' : 'limpio',
    amenazas,
    detallesTecnicos: {
      tiempoEscaneo: formatDateTime(new Date()),
      archivosProcesados: Math.floor(Math.random() * 100) + 50,
      direccionIP: getRandomIP(),
      certificadoSSL: {
        valido: true,
        expiracion: formatDateTime(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
      }
    }
  };
}