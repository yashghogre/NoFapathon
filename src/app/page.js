import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Videoplayer from './components/Videoplayer'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <p>Get all the information about No Nut November here</p>
          <button className={styles.button}>
            <span className={styles.buttonContent}>Join the Revolution 🍌</span>
          </button>

        </div>
        <div className={styles.rightDiv}>
          <Videoplayer />
        </div>
      </div>
    </main>
  )
}
