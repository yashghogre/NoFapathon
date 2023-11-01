import Link from 'next/link'
import React from 'react'
import styles from '@/styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
        <div>
            <Link href={'/'} className={styles.logoLink}><h1 className={styles.logo}>NoFapathon</h1></Link>
        </div>
        <div>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link href={'/About'} className={styles.listLink}>About</Link></li>
                <li className={styles.listItem}><Link href={'/Login'} className={styles.listLink}>Login</Link></li>
                <li className={styles.listItem}><Link href={'/Signup'} className={styles.listLink}>SignUp</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar