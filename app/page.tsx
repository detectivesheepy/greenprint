export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Greenprint Framework</h1>
      <p>A new website structure made to deploy on Vercel with Speed Insights enabled.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>✅ Next.js 14 with App Router</li>
          <li>✅ TypeScript support</li>
          <li>✅ Vercel Speed Insights integrated</li>
          <li>✅ Ready for deployment</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Speed Insights Status</h3>
        <p>
          Speed Insights is now enabled and will automatically track performance metrics
          once deployed to Vercel. The tracking script is loaded at{' '}
          <code style={{ backgroundColor: '#e0e0e0', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>
            /_vercel/speed-insights/script.js
          </code>
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Next Steps</h3>
        <ol>
          <li>Enable Speed Insights in your Vercel project dashboard</li>
          <li>Deploy your app: <code style={{ backgroundColor: '#e0e0e0', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>vercel deploy</code></li>
          <li>View metrics in the Speed Insights tab</li>
        </ol>
      </section>

      <nav style={{ marginTop: '2rem' }}>
        <a href="/about" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          Learn more about Speed Insights →
        </a>
      </nav>
    </main>
  );
}
