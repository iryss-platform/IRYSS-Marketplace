export default function B2BHomePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ padding: '1rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>IRYSS Trade</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="/products">Catalogue</a>
          <a href="/orders">Orders</a>
          <a href="/account">Account</a>
        </nav>
      </header>
      <main style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          IRYSS Trade
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          B2B wholesale marketplace for approved resellers and trade buyers.
        </p>
        <p style={{ marginTop: '2rem' }}>
          <a href="/account/login" style={{ padding: '0.75rem 2rem', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
            Sign In to Your Trade Account
          </a>
        </p>
      </main>
    </div>
  )
}
