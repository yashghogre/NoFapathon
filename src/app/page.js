'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Videoplayer from './components/Videoplayer'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <h2 className={styles.text}>Get all the information about No Nut November here</h2>
          <Link href={'/Signup'}>
            <button className={styles.button}>
              <span className={styles.buttonContent}>Join the Revolution 🍌</span>
            </button>
          </Link>
        </div>
        {/* <div className={styles.rightDiv}>
          <Videoplayer />
        </div> */}
      </div>
      <div className={styles.aboutDiv} id='about'>
        <div className={styles.aboutTitleDiv}>
          <h1 className={styles.aboutTitle}>About NoFapathon</h1>
        </div>
        <div className={styles.aboutTextDiv}>
          <p className={styles.aboutText}>Stop Fapping and get hold of yourself. NoFapathon will help you prevent touching your wood. Register now and start tracking NNN!</p>
        </div>
        <div className={styles.video}>
          <h2>Our Inspiration</h2>
          <Videoplayer />
        </div>
      </div>
    </main>
  )
}
