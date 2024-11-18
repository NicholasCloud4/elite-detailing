"use client"
import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr className={styles.hr} />
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <img src="./ELITE NEW.png" alt="" className={styles.img} />
                    <div className={styles.icons}>
                        <a href="https://www.facebook.com/" target='blank'><FaFacebook size={20} /></a>
                        <a href="https://x.com/" target='blank'><FaTwitter size={20} /></a>
                        <a href="https://www.instagram.com/" target='blank'><FaInstagram size={20} /></a>
                        <a href="https://www.youtube.com/" target='blank'><FaYoutube size={20} /></a>
                    </div>
                </div>

                <div className={styles.footerContent}>
                    <h4>Products</h4>
                    <ul>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/meguiars-ultimate-wash-wax-48oz.html" target='blank'>Ultimate Wash & Wax</a></li>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/meguiars-ultimate-quik-detailer-24-oz.html" target='blank'>Quick Interior Detailer</a></li>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/meguiars-ultimate-glass-cleaner-water-repellant-16-oz.html" target='blank'>Glass Cleaner</a></li>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/meguiars-ultimate-all-wheel-cleaner.html" target='blank'>Wheel Cleaner</a></li>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/meguiars-ultimate-ceramic-coating-8-oz.html" target='blank'>Ceramic Coating</a></li>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/meguiars-supreme-shine-drying-towel.html" target='blank'>Microfiber Towel</a></li>
                    </ul>
                </div>

                <div className={styles.footerContent}>
                    <h4>Sponsors</h4>
                    <ul>
                        <li><a className={styles.underline} href="https://www.meguiarsdirect.com/" target='blank'>Meguiar's</a></li>
                        <li><a className={styles.underline} href="https://adamspolishes.com/" target='blank'>Adam's Polishes</a></li>
                        <li><a className={styles.underline} href="https://esrwheels.com/" target='blank'>ESR Wheels</a></li>
                        <li><a className={styles.underline} href="https://libertywalk.shop/" target='blank'>LibertyWalk</a></li>
                        <li><a className={styles.underline} href="https://pandemusa.com/" target='blank'>Pandem</a></li>
                    </ul>
                </div>

                <div className={styles.footerContent}>
                    <h4>About</h4>
                    <ul>
                        <p>12309 Doherty St, Riverside, CA 92503</p>
                        <p>+1 (888) 993 4545</p>
                        <p>info@elitedetailing.com</p>
                        <p>Monday - Friday: 9:00am to 5:00pm</p>
                        <p>Saturday & Sunday: Closed</p>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer