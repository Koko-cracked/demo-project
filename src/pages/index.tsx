// src/pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css'; // Import the CSS module

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        {/* Background Image Section */}
        <div className={styles.imageContainer}>
          <Image
            src="/landing-background.jpg"
            alt="Landing Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Card Section for New Drops and Clearance Sale */}
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

        {/* Auto-Scrolling Image Section */}
        <div className={styles.autoScrollSection}>
          <div className={styles.scrollContainer}>
            <Image src="/landing-background.jpg" alt="Item 1" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 2" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 3" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 4" width={200} height={300} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
