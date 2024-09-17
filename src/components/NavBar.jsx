"use client";
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from './NavBar.module.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.container}>
            <div className={styles.navbar}>
                <Image
                    src={"/ELITE NEW.png"}
                    width={500}
                    height={500}
                    alt="logo"
                    className={styles.logo}
                />
                <ul className={styles.desktopMenu}>
                    <li><a href="">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <button>
                        <a href="#signup">Sign Up</a>
                    </button>
                </ul>

                <div className={styles.menuIcon} onClick={handleMenuToggle}>
                    {menuOpen ? (
                        <AiOutlineClose size={30} />
                    ) : (
                        <AiOutlineMenu size={30} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className={styles.mobileMenu}>
                    <li><a href="">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <button>
                        <a href="#signup">Sign Up</a>
                    </button>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
