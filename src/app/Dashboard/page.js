'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/dashboard.module.css'
import Dbloader from '../components/Dbloader'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

function Page() {

  const router = useRouter();

  const [days, setDays] = useState(0)
  const [refresh, setRefresh] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [todayStatus, setTodayStatus] = useState(false)
  const [loginStatus, setloginStatus] = useState()

  let statusBtn = 0
  const date = new Date();

  useEffect(() => {
    async function fetchData() {
      setShowLoader(true)
      const response = await fetch('https://npfapathon.onrender.com/dashboard', {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const resData = await response.json()
      // setDays(resData.days)
      setDays(resData.days)
      console.log(resData)
      setTodayStatus(resData.todayStatus)
      setShowLoader(false)
    }

    fetchData()
  }, [days, refresh, todayStatus])

  const success = async () => {

    // setStatusBtn(1)
    statusBtn = 1
    setShowLoader(true)

    const time = new Date();
    const date = time.getDate();

    const res = await fetch('https://npfapathon.onrender.com/track', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: statusBtn, date }),
      credentials: "include"
    }
    )
    const resData = await res.json();
    setTodayStatus(resData.todayStatus)
    console.log(resData)
    setRefresh(prev => {
      if (prev === false) return true
      else false
    })
    setShowLoader(false)
    if (res.status === 200) {
      toast.success('Streak added Successfully!')
    }
  }

  const failed = async () => {
    statusBtn = 0
    setShowLoader(true)

    const res = await fetch('https://npfapathon.onrender.com/track', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: statusBtn }),
      credentials: "include"
    }
    )
    const resData = await res.json();
    console.log(resData)
    setRefresh(prev => {
      if (prev === false) return true
      else false
    })
    setShowLoader(false)
  }

  const logOut = async () => {

    setShowLoader(true);

    const response = await fetch('https://npfapathon.onrender.com/logout', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      credentials: 'include'
    })

    // const resData = await response.json();
    console.log(resData);

    setRefresh(prev => {
      if (prev === false) return true
      else false
    })

    if (response.status === 200) {
      toast.success('Logged out successfully!')
      router.push('/')
    }

    setShowLoader(false)
  }

  return (
    <main className={styles.main}>

      <Toaster />

      {showLoader ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <Dbloader className={styles.loader} />
      </div> : null}

      <div className={styles.lODiv}>
        <button className={styles.lOBtn} onClick={logOut}>Log Out</button>
      </div>

      <div className={styles.mainDiv}>
        <h1 className={styles.streakCounter}>Your No Fap Streak: {days} days</h1>
        <p className={styles.subText}>Your balls have chip inserted in them, if you choose the incorrect option they will explode. So choose wisely!</p>
        {todayStatus ? <h1>You have submitted the response today</h1> : <div className={styles.mainBtnDiv}>
          <div className={styles.btnDiv}>
            <Image src={'/smile.webp'} width={500} height={500} alt='smile' className={styles.smile} />
            <input className={styles.btn} type='submit' style={{ backgroundColor: 'green' }} value={'I did not Fap today !!!'} name={statusBtn} onClick={success} />
          </div>
          <div className={styles.btnDiv}>
            <Image src={'/sadSmile.png'} width={500} height={500} alt='smile' className={styles.sad} />
            <input className={styles.btn} type='submit' style={{ backgroundColor: 'red' }} value={'I Fapped today !!!'} name={statusBtn} onClick={failed} />
          </div>
        </div>
        }
      </div>
    </main>
  )
}

export default Page