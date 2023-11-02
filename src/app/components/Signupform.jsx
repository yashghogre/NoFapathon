'use client'

import React, { useState } from 'react'
import styles from '@/styles/signupform.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Signupform = () => {

    const router = useRouter();

    const [userdata, setUserdata] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        age: '',
        password: '',
        cpassword: ''
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

    const onSubmit = async(e) => {
        e.preventDefault();

        const res = await fetch('https://npfapathon.onrender.com/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        } )

        console.log(res.json())

        router.push('/Login')
    }

    return (
        <div>
            <form className={styles.form}>
                <label className={styles.label}>First Name</label>
                <input type='text' name='fname' className={styles.input} value={userdata.fname} onChange={setData} />
                <label className={styles.label}>Last Name</label>
                <input type='text' name='lname' className={styles.input} value={userdata.lname} onChange={setData} />
                <label className={styles.label}>email</label>
                <input type='email' name='email' className={styles.input} value={userdata.email} onChange={setData} />
                <label className={styles.label}>Username</label>
                <input type='text' name='username' className={styles.input} value={userdata.username} onChange={setData} />
                <label className={styles.label}>Age</label>
                <input type='number' name='age' className={styles.input} value={userdata.age} onChange={setData} />
                <label className={styles.label}>Password</label>
                <input type='password' name='password' className={styles.input} value={userdata.password} onChange={setData} />
                <label className={styles.label}>Confirm Password</label>
                <input type='password' name='cpassword' className={styles.input} value={userdata.cpassword} onChange={setData} />
                <input type='submit' className={styles.submitBtn} onClick={onSubmit} />
            </form>
            <div className={styles.orDiv}>
                {/* <div className={styles.dash}></div> */}
                <p className={styles.or}>or</p>
                {/* <div className={styles.dash}></div> */}
            </div>
            <div className={styles.signupDiv}>
                <Link href={'/Signup'} className={styles.signupLink}>Login to <span className={styles.signuptext}>NoFapathon</span></Link>
            </div>
        </div>
    )
}

export default Signupform