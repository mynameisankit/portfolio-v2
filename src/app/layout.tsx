import { Alegreya_Sans_SC } from 'next/font/google';
import type { Metadata } from "next";

// Components
import Navbar from '@molecules/navbar';

// Styles
import './_styles/global.css';

const alegreyaSansSC = Alegreya_Sans_SC({
  weight: '500',
  subsets: ["latin"],
  style: ["normal", "italic"]
});

// TODO
export const metadata: Metadata = {
  title: "",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" className={alegreyaSansSC.className}>
    <body className='bg-primary text-primary flex flex-col h-[100vh]'>
      <Navbar />

      <div className='grow'>
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
