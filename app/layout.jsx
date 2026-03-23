import './globals.css';

export const metadata = {
  metadataBase: new URL('https://elevateatsmountain.com'),
  title: 'Elevate @ South Mountain | Newly Renovated Apartments in South Phoenix',
  description:
    'Newly renovated studio, 1, and 2-bedroom apartments in South Phoenix. Resort-style pool, One Check billing, $499 move-in special. Pet-friendly community managed by CALCAP.',
  keywords:
    'apartments Phoenix, South Phoenix apartments, Elevate South Mountain, CALCAP, renovated apartments, pet-friendly Phoenix',
  openGraph: {
    title: 'Elevate @ South Mountain | Elevate Your Lifestyle Today!',
    description:
      'Newly renovated studio, 1, and 2-bedroom apartments in South Phoenix. One check pays for all: rent, utilities, internet, filtered water.',
    url: 'https://elevateatsmountain.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-navy text-white">{children}</body>
    </html>
  );
}
