import React from 'react'
import styles from '@/styles/loginform.module.css'

const Form = () => {
    return (
        <div>
            <form className={styles.form}>
                <label className={styles.label}>email</label>
                <input type='email' className={styles.input} />
                <label className={styles.label}>password</label>
                <input type='password' className={styles.input} />
                <input type='submit' />
            </form>
            <div className={styles.orDiv}>
                <div className={styles.dash}></div>
                <p>or</p>
                <div className={styles.dash}></div>
            </div>
            <button>Signup to NoFapathon</button>
        </div>
    )
}

export default Form