import { ScanResult } from '../types';

export async function performScan(url: string): Promise<ScanResult> {
  // Simular análisis de seguridad
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const amenazasPosibles = [
    {
      tipo: 'Malware',
      descripcion: 'Código malicioso detectado en script principal',
      ubicacion: '/assets/js/main.min.js',
      nivelRiesgo: 'alto'
    },
    {
      tipo: 'Phishing',
      descripcion: 'Página de inicio sospechosa similar a entidad bancaria',
      ubicacion: '/login/index.html',
      nivelRiesgo: 'alto'
    },
    {
      tipo: 'Inyección SQL',
      descripcion: 'Vulnerabilidad en formulario de contacto',
      ubicacion: '/contacto/form.php',
      nivelRiesgo: 'medio'
    },
    {
      tipo: 'Cross-Site Scripting (XSS)',
      descripcion: 'Script no sanitizado en comentarios',
      ubicacion: '/blog/comments.js',
      nivelRiesgo: 'medio'
    },
    {
      tipo: 'SSL Inválido',
      descripcion: 'Certificado SSL expirado o no válido',
      ubicacion: 'Configuración del servidor',
      nivelRiesgo: 'bajo'
    }
  ];

  // Seleccionar amenazas aleatoriamente
  const amenazasDetectadas = amenazasPosibles
    .filter(() => Math.random() > 0.7);

  return {
    status: amenazasDetectadas.length === 0 ? 'limpio' : 'sospechoso',
    amenazas: amenazasDetectadas,
    detallesTecnicos: {
      tiempoEscaneo: new Date().toLocaleTimeString(),
      archivosProcesados: Math.floor(Math.random() * 1000) + 500,
      direccionIP: '192.168.1.' + Math.floor(Math.random() * 255),
      certificadoSSL: {
        valido: Math.random() > 0.5,
        expiracion: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString()
      }
    }
  };
}