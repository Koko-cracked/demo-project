// src/components/Header.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Header() {
    return (
        <header className={`${styles.header} ${inter.className}`}>
            {/* Logo Section */}
            <div className={styles.logo}>
                <Image
                    src="/company-logo.png" // Replace with your logo path in the public directory
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </div>

            {/* Search Bar Section */}
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    aria-label="Search"
                />
                <button className={styles.searchButton} aria-label="Search Button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            {/* Navbar Icon Section */}
            <div className={styles.navIcon}>
                <button className={styles.navButton} aria-label="Menu Button">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
}
