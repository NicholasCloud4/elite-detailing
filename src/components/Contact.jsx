import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <>
            <hr />
            <div id='contact' className={styles.container}>

                <div className={styles.leftText}>
                    <p className={styles.title}>Elite Detailing</p>
                    <p>12309 Doherty St, Riverside, CA 92503</p>
                    <p>+1 (888) 993 4545</p>
                    <p>info@elitedetailing.com</p>
                    <p>Monday - Friday: 9:00am to 5:00pm</p>
                    <p>Saturday & Sunday: Closed</p>
                </div>
                <div className={styles.rightText}>
                    <p>We know that your car is more than just a mode of transportation—it’s a reflection of who you are.
                        That’s why we’ve developed a range of detailing solutions designed to meet the unique needs of
                        every car enthusiast. From our advanced waxes and polishes to our cutting-edge cleaners
                        and protectants, each product is meticulously formulated to provide unmatched performance and
                        long-lasting results.
                    </p>
                    <p>Our team of experts combines a deep understanding of automotive care with a relentless pursuit of innovation.
                        We’re committed to using the finest ingredients and the latest technology to ensure that every product we
                        offer meets the highest standards of quality and effectiveness. Whether you’re a professional detailer or
                        a weekend warrior, Elite Detailing has the products you need to keep your car looking its best.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact