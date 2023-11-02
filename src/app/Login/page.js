import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Form from '../components/Form'
import styles from '@/styles/login.module.css'

const page = () => {
    return (
        <div className={styles.mainMainDiv}>
            {/* <Navbar /> */}
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>Login to <span className={styles.nofapathon}>NoFapathon</span></h1>
            </div>
            <div className={styles.mainDiv}>
                <Image src={'/andrewtate.webp'} height={500} width={500} alt='andrew tate' className={styles.image}/>
                <div className={styles.formDiv}>
                    <Form />
                </div>
                <div>
                <Image src={'/andrewtate.webp'} height={500} width={500} alt='andrew tate' className={styles.image1} />
                    {/* <Image src={'/login.gif'} height={500} width={500} alt='login gif' className={styles.image} /> */}
                </div>
            </div>
        </div>
    )
}

export default page