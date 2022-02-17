import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'
import { getScript } from 'utils/getScript'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Beacon Performance Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          This page renders Beacon using Next.js's Script component from
          Production (Cloudfront).
        </p>
      </main>

      <Footer />

      <Script id="beacon-embed" strategy="lazyOnload">
        {getScript('https://beacon-v2.helpscout.net/')}
      </Script>
    </div>
  )
}
