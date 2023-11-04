'use client'

import React, { useState } from 'react'
import styles from '@/styles/loginform.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

const Form = () => {

    const router = useRouter();

    const [userdata, setUserdata] = useState({
        username: '',
        password: ''
    })

    const setData = (e) => {
        const { value, name } = e.target;

        setUserdata(prev => {
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
        })

        const resdata = await res.json()
        console.log(res.status)

        if (res.status === 201) {
            console.log('Running...');
            toast.success('Login Successful')
            router.push('/Dashboard');
        }
        else if (res.status === 409) {
            console.log('User not registered');
            toast.error('User not Registered!')
        }
        else if (res.status === 401) {
            console.log('Password incorrect')
            toast.error('Password incorrect!')
        }
        else {
            console.log('else');
            toast.error('Password incorrect!')
        }
    }

    return (
        <div>
            <Toaster />
            <form className={styles.form}>
                <label className={styles.label}>email / username</label>
                <input name='username' type='text' className={styles.input} value={userdata.username} onChange={setData} />
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