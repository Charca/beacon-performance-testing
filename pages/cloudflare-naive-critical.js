import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
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
          This page renders a Critical (WIP) Beacon using a div with
          `dangerouslySetInnerHTML` from Cloudflare Pages.
        </p>
      </main>

      <Footer />

      <div
        dangerouslySetInnerHTML={{
          __html: `<script>${getScript(
            'https://bembed-337-optimize-critical.beacon2.pages.dev/loader.js'
          )}</script>`,
        }}
      ></div>
    </div>
  )
}
