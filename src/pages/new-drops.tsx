// src/pages/new-drops.tsx
import Layout from '../components/Layout';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/NewDrops.module.css';

const jerseyData = {
    retro: [
        { src: '/jersey1.jpg', name: 'Retro Jersey 1', price: '$50' },
        { src: '/jersey2.jpg', name: 'Retro Jersey 2', price: '$60' },
        { src: '/jersey3.jpg', name: 'Retro Jersey 3', price: '$55' },
        { src: '/jersey4.jpg', name: 'Retro Jersey 4', price: '$45' },
        { src: '/jersey5.jpg', name: 'Retro Jersey 5', price: '$70' },
        { src: '/jersey6.jpg', name: 'Retro Jersey 6', price: '$65' }, // More jerseys...
    ],
    concept: [
        { src: '/jersey7.jpg', name: 'Concept Jersey 1', price: '$80' },
        { src: '/jersey8.jpg', name: 'Concept Jersey 2', price: '$85' },
        { src: '/jersey9.jpg', name: 'Concept Jersey 3', price: '$90' },
        { src: '/jersey10.jpg', name: 'Concept Jersey 4', price: '$95' },
        { src: '/jersey11.jpg', name: 'Concept Jersey 5', price: '$100' },
        { src: '/jersey12.jpg', name: 'Concept Jersey 6', price: '$105' }, // More jerseys...
    ],
    newSeason: [
        { src: '/jersey13.jpg', name: 'New Season Jersey 1', price: '$110' },
        { src: '/jersey14.jpg', name: 'New Season Jersey 2', price: '$115' },
        { src: '/jersey15.jpg', name: 'New Season Jersey 3', price: '$120' },
        { src: '/jersey16.jpg', name: 'New Season Jersey 4', price: '$125' },
        { src: '/jersey17.jpg', name: 'New Season Jersey 5', price: '$130' },
        { src: '/jersey18.jpg', name: 'New Season Jersey 6', price: '$135' }, // More jerseys...
    ],
};

const Row = ({ title, jerseys }: { title: string; jerseys: { src: string; name: string; price: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? jerseys.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === jerseys.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.row}>
            <h2 className={styles.rowTitle}>{title}</h2>
            <div className={styles.cardWrapper}>
                <div className={styles.cardGrid} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {jerseys.map((jersey, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardImage}>
                                <Image src={jersey.src} alt={jersey.name} layout="fill" objectFit="cover" />
                            </div>
                            <div className={styles.cardTitle}>{jersey.name}</div>
                            <div className={styles.cardPrice}>{jersey.price}</div>
                        </div>
                    ))}
                </div>
                <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>
                    &lt;
                </button>
                <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default function NewDrops() {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>New Drops</h1>
                <Row title="Retro" jerseys={jerseyData.retro} />
                <Row title="Concept" jerseys={jerseyData.concept} />
                <Row title="New Season" jerseys={jerseyData.newSeason} />
            </div>
        </Layout>
    );
}
