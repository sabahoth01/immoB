import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ImmoB',
  description: 'Votre meilleur choix immobilier!',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-FR">
      <body className={inter.className}>
      <Navigation />
      {children}</body>
    </html>
  )
}
