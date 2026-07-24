import type { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: `IRYSS Marketplace — ${locale.toUpperCase()}`,
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  return (
    <div data-locale={locale}>
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>IRYSS</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href={`/${locale}/products`}>Products</a>
          <a href={`/${locale}/brands`}>Brands</a>
          <a href={`/${locale}/cart`}>Cart</a>
          <a href={`/${locale}/account`}>Account</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
