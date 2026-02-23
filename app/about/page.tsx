export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>About Greenprint Framework</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <p>
          Greenprint Framework is a modern web application starter built with Next.js 14
          and pre-configured with Vercel Speed Insights for performance monitoring.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Why Speed Insights?</h2>
        <p>Vercel Speed Insights helps you:</p>
        <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
          <li>Track Core Web Vitals automatically</li>
          <li>Monitor real user performance data</li>
          <li>Identify performance bottlenecks</li>
          <li>Improve user experience</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Tracked Metrics</h2>
        <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
          <li><strong>LCP (Largest Contentful Paint):</strong> Loading performance</li>
          <li><strong>FID (First Input Delay):</strong> Interactivity</li>
          <li><strong>CLS (Cumulative Layout Shift):</strong> Visual stability</li>
          <li><strong>FCP (First Contentful Paint):</strong> Initial render</li>
          <li><strong>TTFB (Time to First Byte):</strong> Server responsiveness</li>
          <li><strong>INP (Interaction to Next Paint):</strong> Responsiveness</li>
        </ul>
      </section>

      <nav style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          ← Back to Home
        </a>
      </nav>
    </main>
  );
}
