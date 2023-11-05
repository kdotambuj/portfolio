

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ambuj Kulshrestha | Portfolio',
  description: 'Ambuj Kulshrestha is a 2nd Year Undergraduate at DEI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` bg-gray-50 text-gray-950 ${inter.className} `}>
        <div className='bg-[#EC98D2] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]'></div>
        <div className='bg-[#98A6EC] -z-10 absolute top-[-1rem] left-[15rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.7rem] md:left-[10rem] lg:left-[7rem] xl:left-[5rem]' ></div>
        <Header />
        {children}
        </body>
    </html>
  )
}
