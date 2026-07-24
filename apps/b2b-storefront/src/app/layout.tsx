import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IRYSS Trade — B2B Marketplace',
  description: 'Wholesale purchasing and reseller access on IRYSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
