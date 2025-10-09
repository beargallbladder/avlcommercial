import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '530 Merrimon Avenue - AVLCommercial.com',
  description: 'Prime commercial property in Asheville, NC. Retail, office, and medical spaces available with new roof, ample parking, and excellent visibility.',
  keywords: 'commercial real estate, Asheville, NC, retail space, office space, medical space, Merrimon Avenue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
