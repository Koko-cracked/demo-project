// src/pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.pageWrapper}> {/* Wrapper for the entire page */}
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        {/* Main content */}
        {/* Auto-Scrolling Image Section */}
        <div className={styles.autoScrollSection}>
          <div className={styles.scrollContainer}>
            <Image src="/landing-background.jpg" alt="Item 1" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 2" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 3" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 4" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 5" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 6" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 7" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 8" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 1" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 2" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 3" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 4" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 5" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 6" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 7" width={200} height={300} />
            <Image src="/landing-background.jpg" alt="Item 8" width={200} height={300} />
          </div>
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
      <Footer /> {/* Ensure Footer is within the main wrapper */}
    </div>
  );
}
