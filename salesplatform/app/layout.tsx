import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartProvider from './providers/CartProvider';
import {Toaster} from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'],weight:['400', '700'] })

export const metadata: Metadata = {
  title: 'ESHOP',
  description: 'Plataform for online sales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster toatOptions={{
          style: {
            background: 'rgb(51 65 85)',
            color: '#fff'
          },
        }}/>
        <CartProvider>
        <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <main className='grow'>{children}</main>
        <Footer/>
        </div>
        </CartProvider>
        </body>
    </html>
  )
}
