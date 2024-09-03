// src/components/Header.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css'; // Import the CSS module

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Left Section: Logo */}
            <div className={styles.logo}>
                <Image
                    src="/company-logo.png" // Ensure this path points to your logo file
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </div>

            {/* Center Section: Search Bar */}
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search..." className={styles.searchInput} />
                <button className={styles.searchButton}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            {/* Right Section: User and Cart Icons */}
            <div className={styles.icons}>
                <button className={styles.iconButton}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <button className={styles.iconButton}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </header>
    );
}