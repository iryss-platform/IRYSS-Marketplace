type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Welcome to IRYSS
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Discover curated brands and products from across Europe.
        </p>
        <p style={{ marginTop: '1rem', color: '#999' }}>
          Storefront: {locale.toUpperCase()}
        </p>
      </section>
    </div>
  )
}
