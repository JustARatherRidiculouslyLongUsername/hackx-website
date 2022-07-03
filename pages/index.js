import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hack-X</title>
        <meta name="description" content="The cybersecurity club of MIT-WPU" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          Hack-X
        </h1>

        <p className={styles.description}>
          The cybersecurity club of MIT-WPU
        </p>
      </main>
    </div>
  )
}
