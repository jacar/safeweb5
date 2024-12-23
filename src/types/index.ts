export interface ScanResult {
  status: 'limpio' | 'infectado' | 'sospechoso';
  amenazas: {
    tipo: string;
    descripcion: string;
    ubicacion: string;
    nivelRiesgo: 'bajo' | 'medio' | 'alto';
  }[];
  detallesTecnicos: {
    tiempoEscaneo: string;
    archivosProcesados: number;
    direccionIP?: string;
    certificadoSSL?: {
      valido: boolean;
      expiracion?: string;
    };
  };
}