'use client'

import React, { useState } from 'react'
import styles from '@/styles/loginform.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Form = () => {

    const router = useRouter();

    const [userdata, setUserdata] = useState({
        email: '',
        password: ''
    })
    
    const setData = (e) => {
        const {value, name} = e.target;

        setUserdata(prev=> {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('https://npfapathon.onrender.com/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata),
            credentials: 'include'
        } )

        const resdata = await res.json()
        console.log(resdata.message)

        if (resdata.status === 201)
        {
            console.log('Running...')
        }
    }
    
    return (
        <div>
            <form className={styles.form}>
                <label className={styles.label}>email</label>
                <input name='email' type='email' className={styles.input} value={userdata.email} onChange={setData} />
                <label className={styles.label}>password</label>
                <input name='password' type='password' className={styles.input} value={userdata.password} onChange={setData} />
                <input type='submit' className={styles.submitBtn} onClick={onSubmit} />
            </form>
            <div className={styles.orDiv}>
                {/* <div className={styles.dash}></div> */}
                <p>or</p>
                {/* <div className={styles.dash}></div> */}
            </div>
            <div className={styles.signupDiv}>
                <Link href={'/Signup'} className={styles.signupLink}>SignUp to <span className={styles.signuptext}>NoFapathon</span></Link>
            </div>
        </div>
    )
}

export default Form