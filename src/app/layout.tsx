import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Personal portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}