'use client';

import React, { useState } from 'react';
import styles from './SignUp.module.css';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            setMessage('Please enter a name');
            return;
        }

        if (!email) {
            setMessage('Please enter an email');
            return;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email');
            return;
        }

        try {
            const res = await fetch('./api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(`Thank you ${data.name} for signing up to our mailing list!`);
                setName('');
                setEmail('');
            }
        } catch (error) {
            setMessage('Error adding user');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p id='signup' className={styles.title}>STAY IN TOUCH</p>
                <p>Sign up to our mailing list to receive new product alerts, special offers, and coupon codes.</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className={styles.button}>Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default SignUp;