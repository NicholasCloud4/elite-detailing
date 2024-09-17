import React from 'react'
import styles from './SignUp.module.css'

const SignUp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text} >
                <p id='signup' className={styles.title}>STAY IN TOUCH</p>
                <p>Sign up for our mailing list to receive new product alerts, special offers, and coupon codes.</p>
            </div>
            <form className={styles.form} action="">
                <input className={styles.input} type="text" placeholder='Name' />
                <input className={styles.input} type="text" placeholder='Email' />
                <button className={styles.button}>Subscribe</button>
            </form>
        </div>
    )
}

export default SignUp