// src/pages/index.tsx
import Layout from '../components/Layout';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const images = [
  '/landing-background.jpg',
  '/landing-background.jpg',
  '/landing-background.jpg',
  '/landing-background.jpg',
];

// Sample data for "Legacy Jersey" cards
const legacyJerseys = [
  { id: 1, image: '/legacy-jersey1.jpg', name: 'Pele Brazil', price: '$50' },
  { id: 2, image: '/legacy-jersey2.jpg', name: 'Diego Maradona Argentina', price: '$60' },
  { id: 3, image: '/legacy-jersey3.jpg', name: 'David Beckham England', price: '$55' },
  { id: 4, image: '/legacy-jersey1.jpg', name: 'David Beckham Man Utd', price: '$50' },
  { id: 5, image: '/legacy-jersey1.jpg', name: 'Roberto Carlos Brazil', price: '$50' },
  { id: 6, image: '/legacy-jersey3.jpg', name: 'Franc Beckenbauer Germany', price: '$55' },
  { id: 7, image: '/legacy-jersey1.jpg', name: 'David Beckham Man Utd', price: '$50' },
  { id: 8, image: '/legacy-jersey1.jpg', name: 'David Beckham Man Utd', price: '$50' },
  { id: 9, image: '/legacy-jersey1.jpg', name: 'David Beckham Man Utd', price: '$50' }
  // Add more jerseys as needed
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
    <Layout>
      {/* Scroll Container */}
      <div className={styles.scrollContainer}>
        <div className={styles.scrollImages} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div className={styles.scrollImage} key={index}>
              <Image src={src} alt={`Item ${index + 1}`} layout="fill" objectFit="cover" />
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

      {/* Cards Section */}
      <div className={styles.cardSection}>
        {/* New Drops Card */}
        <Link href="/new-drops">
          <div className={styles.card}>
            <h2>New Drops</h2>
            <p>Check out the latest collection now available in store!</p>
          </div>
        </Link>

        {/* Clearance Sale Card */}
        <div className={styles.card}>
          <h2>Clearance Sale</h2>
          <p>Don't miss out on huge discounts on select items!</p>
        </div>
      </div>

      {/* New Row: Legacy Jersey */}
      <div className={styles.legacySection}>
        <h2>Legacy Jersey</h2>
        <div className={styles.legacyJerseyRow}>
          {legacyJerseys.map((jersey) => (
            <div key={jersey.id} className={styles.jerseyCard}>
              <Image src={jersey.image} alt={jersey.name} width={80} height={100} objectFit="cover" />
              <h3>{jersey.name}</h3>
              <p>{jersey.price}</p>
              {/* Add to cart icon (use FontAwesome or another icon library) */}
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
