// src/components/Footer.tsx
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css'; // Import the CSS module

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Left Section: Logo */}
            <div className={styles.logo}>
                <Image
                    src="/company-logo.png" // Ensure this path points to your logo file with a transparent background
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <p>© 2024 Retro Kit Nepal. All rights reserved.</p>
            </div>

            {/* Middle Section: Navigation Links */}
            <div className={styles.navLinks}>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/products">Products</a>
                <a href="/contact">Contact</a>
            </div>

            {/* Right Section: Social Media Icons */}
            <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
            </div>
        </footer>
    );
}
