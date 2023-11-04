import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Signupform from '../components/Signupform'
import styles from '@/styles/signup.module.css'
import toast, { Toaster } from 'react-hot-toast'

const page = async () => {

    // await new Promise(resolve => setTimeout(resolve, 2000))

    return (
        <div className={styles.mMDiv}>
            <Toaster />
            {/* <Navbar /> */}
            <div className={styles.titleDiv}>
                <h1>Signup to <span className={styles.nofapathon}>NoFapathon</span></h1>
            </div>
            <div className={styles.mainDiv}>
                <div>
                    <Image src={'/sm.webp'} height={500} width={500} alt='login gif' className={styles.image} />
                </div>
                <div className={styles.formDiv}>
                    <Signupform />
                </div>
                <div>
                    <Image src={'/elon.png'} height={500} width={500} alt='login gif' className={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default page