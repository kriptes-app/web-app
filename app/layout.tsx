import './styles/global.css';
import './styles/stars-bg.css';
import '@/app/lib/fontawesome';

import { Poppins } from 'next/font/google';
import ToasterContext from './context/ToasterContext';
import Provider from './context/SessionProvider';

const font = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kriptes - Most advanced privacy protection tool',
  creator: 'Matteo Sala',
  authors: [{ name: 'Sal Boh', url: 'https://salboh.xyz' }],
  description:
    'Prevent social media and companies from tracking your online life. Learn how to stay safe and anonimous in best way possible.',
  keywords: [
    'privacy',
    'privacy manager',
    'manage privacy',
    'data privacy',
    'social privacy',
    'social media',
    'privacy guard',
    'privacy wall',
    'online privacy',
    'google privacy',
    'facebook privacy',
    'instagram data policy',
    'privacy shield',
    'google privacy policy',
    'youtube privacy policy',
    'cookie policy',
  ],
  icons: {
    icon: '/assets/icons/favicon-16x16.png',
    apple: '/assets/icons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
