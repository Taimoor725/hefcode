// layout.js
import "./globals.css";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className="antialiased text-color overflow-x-hidden"
        style={{ fontFamily: 'var(--font-eb-garamond)' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}