import { useState } from 'react';
import Styles from './Footer.module.css';
import Modal from '../Modal/Modal';


export const Footer = () => {
  const [email, setEmail] = useState(''); // State to hold the email input
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Show the modal immediately when the form is submitted
    setIsModalOpen(true);

    // Clear the email input after showing the modal
    setEmail('');
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when the user clicks close
  };

  return (
    <>
      <div className={Styles.footer}>
        <div className={Styles.container}>
          <a href="/">
            <img className={Styles.flogo} src="/Images/waveslogo.png" alt="River Store Logo" />
          </a>
          <div className={Styles.logoSection}>
            <h1 className={Styles.logo}>River Store</h1>
            <p className={Styles.description}>
              Your go-to place for the latest products and deals. Stay connected with us by subscribing to our newsletter.
            </p>
          </div>
          <div className={Styles.linksSection}>
            <h3>Support</h3>
            <ul>
              <li>Lagos, Nigeria</li>
              <li><a href="#about">Privacy Policy</a></li>
              <li><a href="tel:+2349057685422">+234 905 768 5422</a></li>
              <li><a href="mailto:riverstore@gmail.com">riverstore@gmail.com</a></li>
            </ul>
          </div>
          <div className={Styles.newsletterSection}>
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates and offers.</p>
            <form onSubmit={handleFormSubmit} className={Styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Controlled input
                className={Styles.input}
              />
              <button type="submit" className={Styles.button}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className={Styles.bottom}>
          <p>&copy; 2025 River Store. All Rights Reserved.</p>
          <ul className={Styles.socialLinks}>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && (
      <Modal closeModal={closeModal} />
      )}
    </>
  );
};
