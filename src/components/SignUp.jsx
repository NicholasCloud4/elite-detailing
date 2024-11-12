'use client';

import React, { useState } from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: false, email: false });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({ name: false, email: false });
        setMessage('');

        if (!name && !email) {
            setMessage("Please enter a name and email");
            setErrors({ name: true, email: true });
            return;
        }

        if (!name) {
            setMessage('Please enter a name');
            setErrors({ name: true });
            return;
        }

        if (!email) {
            setMessage('Please enter an email');
            setErrors({ email: true });
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email');
            setErrors({ email: true });
            return;
        }

        try {
            // First request: Save user in the database
            const userRes = await fetch('./api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (!userRes.ok) {
                throw new Error('Error adding user');
            }

            const userData = await userRes.json();

            // Second request: Send a welcome email
            const emailRes = await fetch('./api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (emailRes.ok) {
                setMessage(`Thank you ${userData.name} for signing up! A welcome email has been sent.`);
                setName('');
                setEmail('');
            } else {
                throw new Error('Error sending email');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred. Please try again.');
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
                    className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className={styles.button}>Sign Up</button>
            </form>
            {message && <p className={`${styles.message} ${errors.name || errors.email ? styles.error : styles.success}`}>{message}</p>}
        </div>
    );
};

export default SignUp;
