import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>ZheQi Shen Page</title>
    </Head>
    <h1>ZheQi Shen Page</h1>
    <p>
      This is a sample page for ZheQi Shen.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}