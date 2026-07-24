import { Routes, Route, Link } from 'react-router-dom'

function PublicLanding() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>IRYSS Retail</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', margin: '1rem 0' }}>
        Become an IRYSS reseller. Access curated products, approved content, and seamless Shopify integration.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <Link to="/apply" style={{ padding: '0.75rem 2rem', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
          Apply Now
        </Link>
        <Link to="/portal" style={{ padding: '0.75rem 2rem', border: '1px solid #000', textDecoration: 'none', borderRadius: '4px' }}>
          Sign In
        </Link>
      </div>
    </div>
  )
}

function Portal() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '240px', borderRight: '1px solid #eee', padding: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>IRYSS Retail</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/portal">Dashboard</Link>
          <Link to="/portal/products">Products</Link>
          <Link to="/portal/orders">Orders</Link>
          <Link to="/portal/shopify">Shopify Connection</Link>
          <Link to="/portal/analytics">Analytics</Link>
          <Link to="/portal/settings">Settings</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '2rem' }}>
        <h2>Reseller Dashboard</h2>
        <p>Welcome to the IRYSS Reseller Portal.</p>
      </main>
    </div>
  )
}

function ApplyPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Become a Reseller</h2>
      <p style={{ color: '#666', margin: '1rem 0' }}>Application form will be connected to the marketplace API.</p>
    </div>
  )
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLanding />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/portal/*" element={<Portal />} />
    </Routes>
  )
}
