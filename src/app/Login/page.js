import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Form from '../components/Form'
import styles from '@/styles/login.module.css'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.titleDiv}>
                <h1>Login to <span className={styles.nofapathon}>NoFapathon</span></h1>
            </div>
            <div className={styles.mainDiv}>
                <div className={styles.formDiv}>
                    <Form />
                </div>
                <div>
                    <Image src={'/login.gif'} height={500} width={500} alt='login gif' className={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default page