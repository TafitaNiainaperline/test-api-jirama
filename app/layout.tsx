import type { Metadata } from 'next'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Test API Jirama',
  description: 'API Test Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
