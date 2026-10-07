import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Triggers de activación – Envío Nube | Resultados',
  description:
    'Resultados de los triggers in-app de activación de Envío Nube (Agregar medio de envío y Agregar envío personalizado).',
  robots: { index: false, follow: false },
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
