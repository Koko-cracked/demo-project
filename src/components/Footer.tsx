import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                {/* Customer Support Section */}
                <div className={styles.footerColumn}>
                    <h3>Customer Support</h3>
                    <ul>
                        <li>FAQ & Contact</li>
                        <li>Order Tracking</li>
                        <li>My Account</li>
                        <li>Delivery & Shipping</li>
                        <li>Returns</li>
                        <li>Cookies & Privacy Policy</li>
                    </ul>
                </div>

                {/* Visit the Store Section */}
                <div className={styles.footerColumn}>
                    <h3>Visit the Store</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street Name, City, Country
                        </li>
                    </ul>
                </div>

                {/* Useful Links Section */}
                <div className={styles.footerColumn}>
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Sell Shirts</li>
                        <li>About Us</li>
                        <li>Requests</li>
                        <li>Careers</li>
                        <li>Marketing Enquiries</li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className={styles.footerColumn}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
                        <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                        <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
