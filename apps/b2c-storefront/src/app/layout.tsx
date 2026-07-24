import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IRYSS Marketplace',
  description: 'Discover curated brands and products on IRYSS',
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
