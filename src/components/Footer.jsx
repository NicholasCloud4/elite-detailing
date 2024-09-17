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
                        <a href=""><FaFacebook size={20} /></a>
                        <a href=""><FaTwitter size={20} /></a>
                        <a href=""><FaInstagram size={20} /></a>
                        <a href=""><FaYoutube size={20} /></a>
                    </div>
                </div>

                <div className={styles.footerContent}>
                    <h4>Products</h4>
                    <ul>
                        <li><a href="">Ultimate Wash & Wax</a></li>
                        <li><a href="">Quick Interior Detailer</a></li>
                        <li><a href="">Glass Cleaner</a></li>
                        <li><a href="">Wheel Cleaner</a></li>
                        <li><a href="">Ceramic Coating</a></li>
                        <li><a href="">Microfiber Towel</a></li>
                    </ul>
                </div>

                <div className={styles.footerContent}>
                    <h4>Sponsors</h4>
                    <ul>
                        <li><a href="">Meguiar's</a></li>
                        <li><a href="">Adam's Polishes</a></li>
                        <li><a href="">ESR Wheels</a></li>
                        <li><a href="">LibertyWalk</a></li>
                        <li><a href="">Pandem</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer