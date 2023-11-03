'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/styles/navbar.module.css'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  const [opacity, setOpacity] = useState('0')

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
            <li className={styles.listItem}><Link href={'/Login'} className={styles.listLink}>Login</Link></li>
            <li className={styles.listItem}><Link href={'/Signup'} className={styles.listLink}>SignUp</Link></li>
            <div onClick={() => {
              if (opacity === '0') setOpacity('1')
              else setOpacity('0')
            }}>
              <li className={styles.menuIcon}><FaBars size={24} color='white' /></li>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.menuDiv} style={{ opacity: `${ opacity }` }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10vh', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
          <li style={{ listStyle: 'none' }}><Link href={'/#about'} className={styles.menuItem}>About</Link></li>
          <li style={{ listStyle: 'none' }}><Link href={'/Login'} className={styles.menuItem}>Login</Link></li>
          <li style={{ listStyle: 'none' }}><Link href={'/Signup'} className={styles.menuItem}>Signup</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar