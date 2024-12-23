export function formatDateTime(date: Date): string {
  return date.toLocaleString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export function getRandomIP(): string {
  return Array.from({ length: 4 }, () => 
    Math.floor(Math.random() * 256)
  ).join('.');
}