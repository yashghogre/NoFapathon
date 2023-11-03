'use client'

import React, {useEffect, useState} from 'react'
import styles from '@/styles/dashboard.module.css'
import Image from 'next/image'

function Page() {


  const [days, setDays] = useState(0)
  const [refresh, setRefresh] = useState(false)
  let statusBtn = 0

  useEffect(() => {
    async function fetchData()
    {
      const response = await fetch('https://npfapathon.onrender.com/dashboard', {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials : "include"
      })
      const resData = await response.json()
      // setDays(resData.days)
      setDays(resData.days)
      console.log(resData)

    }

    fetchData()
  }, [days, refresh])

  const success = async () => {

    // setStatusBtn(1)
    statusBtn = 1

    const res = await fetch('https://npfapathon.onrender.com/track', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status :  statusBtn }),
      credentials : "include"
    }
    )
    const resData = await res.json();
    console.log(resData)
    setRefresh(prev => {
      if (prev === false) return true
      else false
    })
    
  }

  const failed = async () => {
    statusBtn = 0

    const res = await fetch('https://npfapathon.onrender.com/track', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status :  statusBtn }),
      credentials : "include"
    }
    )
    const resData = await res.json();
    console.log(resData)
    setRefresh(prev => {
      if (prev === false) return true
      else false
    })
    
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <h1 className={styles.streakCounter}>Your No Fap Streak: {days} days</h1>
        <p className={styles.subText}>Your balls have chip inserted in them, if you choose the incorrect option they will explode. So choose wisely!</p>
        <div className={styles.mainBtnDiv}>
          <div className={styles.btnDiv}>
            <Image src={'/smile.webp'} width={500} height={500} alt='smile' className={styles.smile} />
            <input className={styles.btn} type='submit' style={{ backgroundColor: 'green' }} value={'I did not Fap today !!!'} name={statusBtn} onClick={success} />
          </div>
          <div className={styles.btnDiv}>
            <Image src={'/sadSmile.png'} width={500} height={500} alt='smile' className={styles.sad} />
            <input className={styles.btn} type='submit' style={{ backgroundColor: 'red' }} value={'I Fapped today !!!'} name={statusBtn} onClick={failed} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page