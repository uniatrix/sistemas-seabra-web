import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

// Ovelha estilizada (usada para "Pequenos Ruminantes")
export function SheepIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Corpo lanudo (nuvem) */}
      <path d="M5.5 14.5a2.5 2.5 0 0 1 .8-4.86 3 3 0 0 1 5.7-1.4 3 3 0 0 1 5.5 1.66 2.5 2.5 0 0 1 .5 4.6" />
      <path d="M5.5 14.5h13" />
      {/* Cabeça */}
      <ellipse cx="17" cy="13" rx="2" ry="1.6" />
      <circle cx="17.4" cy="12.7" r="0.4" fill="currentColor" />
      {/* Orelha */}
      <path d="M15.4 12.3c-.5-.2-1-.6-1.1-1.1" />
      {/* Patas */}
      <path d="M8 16v3" />
      <path d="M11 16v3" />
      <path d="M14 16v3" />
      <path d="M17 14.6v2" />
    </svg>
  );
}

// Cabeça de bovino (usada para "Bovinos de Corte")
export function CowIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Chifres */}
      <path d="M6 7c-1.5-.5-3-2-2.5-3.5C5 3.8 6.8 5 7.5 6.5" />
      <path d="M18 7c1.5-.5 3-2 2.5-3.5C19 3.8 17.2 5 16.5 6.5" />
      {/* Cabeça/rosto */}
      <path d="M6.5 7.5C6.5 5.6 8.9 4 12 4s5.5 1.6 5.5 3.5v3.2c0 1.7-1.3 3.1-2.9 3.3l-.6 1.2a1 1 0 0 1-.9.6h-2.2a1 1 0 0 1-.9-.6l-.6-1.2c-1.6-.2-2.9-1.6-2.9-3.3V7.5Z" />
      {/* Focinho */}
      <ellipse cx="12" cy="12.3" rx="2.6" ry="1.8" />
      {/* Narinas */}
      <circle cx="11" cy="12.3" r="0.45" fill="currentColor" stroke="none" />
      <circle cx="13" cy="12.3" r="0.45" fill="currentColor" stroke="none" />
      {/* Olhos */}
      <circle cx="9.3" cy="9" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14.7" cy="9" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Cabra estilizada (caprinos) — chifres curvos e barbicha
export function GoatIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Chifres curvos para trás */}
      <path d="M9 5c-.8-1.3-2.5-2-3.5-1.2-1 .8-.5 2.5.8 3.5" />
      <path d="M15 5c.8-1.3 2.5-2 3.5-1.2 1 .8.5 2.5-.8 3.5" />
      {/* Cabeça alongada */}
      <path d="M8 7.5c0-1.6 1.8-3 4-3s4 1.4 4 3v4c0 1.4-.9 2.6-2.2 3l-.4 2.2a1 1 0 0 1-1 .8h-.8a1 1 0 0 1-1-.8L10.2 14.5C8.9 14.1 8 12.9 8 11.5V7.5Z" />
      {/* Olhos */}
      <circle cx="10" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
      {/* Focinho */}
      <path d="M11 12.5c.5.5 1.5.5 2 0" />
      {/* Barbicha */}
      <path d="M12 17.5v2" />
    </svg>
  );
}
