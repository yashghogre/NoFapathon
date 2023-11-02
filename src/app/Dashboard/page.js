'use client'

import React, { useState } from 'react'
import styles from '@/styles/dashboard.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

  const [statusBtn, setStatusBtn] = useState(0)

  const days = 10;

  const success = async () => {

    setStatusBtn(1);
    const res = await fetch('https://npfapathon.onrender.com/track', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ statusBtn })
    }
    )
    const resData = await res.json();
    console.log(resData)
  }

  const failed = async () => {
    setStatusBtn(0);
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <h1 className={styles.streakCounter}>Your No Fap Streak: {days} days</h1>
        <p className={styles.subText}>Your balls have chip inserted in them, if you choose the incorrect option they will explode. So choose wisely!</p>
        <div className={styles.mainBtnDiv}>
          <div className={styles.btnDiv}>
            <Image src={'/smile.webp'} width={500} height={500} alt='smile' className={styles.smile} />
            <input className={styles.btn} style={{ backgroundColor: 'green' }} value={'I did not Fap today !!!'} name={statusBtn} onClick={success} />
          </div>
          <div className={styles.btnDiv}>
            <Image src={'/sadSmile.png'} width={500} height={500} alt='smile' className={styles.sad} />
            <input className={styles.btn} style={{ backgroundColor: 'red' }} value={'I Fapped today !!!'} name={statusBtn} onClick={failed} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page