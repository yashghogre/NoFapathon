'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from '@/styles/navbar.module.css'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  const [opacity, setOpacity] = useState('0')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://npfapathon.onrender.com/isLogin', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        credentials: 'include'
      })

      const resData = response.json();

      if (response.status === 400) {
        setIsLogin(false);
      }
      else if (response.status === 200) {
        setIsLogin(true);
      }
    }

    fetchData();
  }, [])

  const logOut = async () => {

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
  }

  return (
    <div className={styles.mMDiv}>
      <div className={styles.mainDiv}>
        <div>
          <Link href={'/'} className={styles.logoLink}><h1 className={styles.logo}>NoFapathon</h1></Link>
        </div>
        <div>
          <ul className={styles.list}>
            {/* <li className={styles.listItem}><Link href={'/Dashboard'} className={styles.listLink}>Dashboard</Link></li> */}
            <li className={styles.listItem}><Link href={'/#about'} className={styles.listLink}>About</Link></li>

            {isLogin ?
              <div className={styles.cDiv}>
                <li className={styles.listItem}><Link href={'/Dashboard'} className={styles.listLink}>Dashboard</Link></li>
                <button className={styles.lOBtn} onClick={logOut}>Log Out</button> </div> : <div className={styles.cDiv}>
                <li className={styles.listItem}><Link href={'/Login'} className={styles.listLink}>Login</Link></li>
                <li className={styles.listItem}><Link href={'/Signup'} className={styles.listLink}>SignUp</Link></li> </div>
            }

            <div onClick={() => {
              if (opacity === '0') setOpacity('1')
              else setOpacity('0')
            }}>
              <li className={styles.menuIcon}><FaBars size={24} color='white' /></li>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.menuDiv} style={{ opacity: `${opacity}` }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10vh', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
          <li style={{ listStyle: 'none' }}><Link href={'/#about'} className={styles.menuItem}>About</Link></li>

          {isLogin ?
            <div className={styles.resCDiv}>
              <li className={styles.listItem} style={{ listStyle: 'none' }}><Link href={'/Dashboard'} className={styles.listLink}>Dashboard</Link></li>
              <button className={styles.lOBtn} onClick={logOut}>Log Out</button>
            </div> :
            <div className={styles.resCDiv}>
              <li style={{ listStyle: 'none' }}><Link href={'/Login'} className={styles.menuItem}>Login</Link></li>
              <li style={{ listStyle: 'none' }}><Link href={'/Signup'} className={styles.menuItem}>Signup</Link></li>
            </div>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar