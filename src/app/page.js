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
          <Link href={'/#about'}>
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
          <p className={styles.aboutText}>Stop Fapping and get hold of yourself. NoFapathon will help you prevent touching your wood. If you are someone with a weak will, someone who has no aim in life, someone who cannot control himself, PLEASE DO NOT REGISTER!!!</p>
          <p className={styles.aboutText}>Once you break the streak, you wont be able to continue the streak, until next November! So be cautious!!!</p>
          <p className={styles.aboutText}>Register Now and conquer NNN!!!</p>
          <Link href={'/Signup'} className={styles.linkBtn}>
            <button className={styles.button}>
              <span className={styles.buttonContent}>Register Now !!! 🍌</span>
            </button>
          </Link>
        </div>
        <div className={styles.videoDiv}>
          <h2 className={styles.videoDivTitle}>Few Words from our Mentor</h2>
          <div>
            {/* <Videoplayer /> */}
            {/* <video src="./video.mp4" autoPlay loop width="640" height="360">
              <source src="/jsvideo.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video> */}
            <iframe src="https://www.youtube-nocookie.com/embed/9LsfSnb9_u0?autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=9LsfSnb9_u0" width="560" height="315" title="Johnny Sins Cameo for Fortnite gamers No Nut November pledge" frameborder="0" className={styles.video}></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
