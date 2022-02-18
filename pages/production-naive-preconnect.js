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
        <link rel="preconnect" href="https://beacon-v2.helpscout.net"></link>
        <link
          rel="preconnect"
          href="https://d3hb14vkzrxvla.cloudfront.net"
        ></link>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          This page renders Beacon using a div with `dangerouslySetInnerHTML`
          from Production (Cloudfront) and using link preconnect tags.
        </p>
      </main>

      <Footer />

      <div
        dangerouslySetInnerHTML={{
          __html: `<script>${getScript(
            'https://beacon-v2.helpscout.net/'
          )}</script>`,
        }}
      ></div>
    </div>
  )
}
