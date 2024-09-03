// src/pages/index.tsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css'; // Import the CSS module

const inter = Inter({ subsets: ['latin'] });

const images = [
  '/jerseynum1.webp',
  '/jerseynum2.webp',
  '/landing-background.jpg',
  '/landing-background.jpg'
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={`main ${inter.className}`}>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollImages} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, index) => (
              <div className={styles.scrollImage} key={index}>
                <Image src={src} alt={`Item ${index + 1}`} layout="fill" objectFit="cover" />
                {/* Add Number Overlay */}
                <span className={styles.imageNumber}>{index + 1}</span>
              </div>
            ))}
          </div>
          <button className={`${styles.scrollButton} ${styles.left}`} onClick={handlePrev}>
            &lt;
          </button>
          <button className={`${styles.scrollButton} ${styles.right}`} onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.card}>
            <h2>New Drops</h2>
            <p>Check out the latest collection now available in store!</p>
          </div>
          <div className={styles.card}>
            <h2>Clearance Sale</h2>
            <p>Don't miss out on huge discounts on select items!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
