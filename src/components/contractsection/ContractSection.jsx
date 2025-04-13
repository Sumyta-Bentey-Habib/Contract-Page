import React from 'react';
import styles from '../ContractSection.module.css';
import { MdMessage, MdPhoneInTalk, MdEmail } from 'react-icons/md';

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.buttonRow}>
          <button className={styles.blackButton}><MdMessage /> VIA SUPPORT CHAT</button>
          <button className={styles.blackButton}><MdPhoneInTalk /> VIA CALL</button>
        </div>
        <button className={styles.whiteButton}><MdEmail /> VIA EMAIL FORM</button>

        <form className={styles.form}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          
          <label>E-Mail</label>
          <input type="email" placeholder="Enter your email" />
          
          <label>TEXT</label>
          <textarea placeholder="Write your message here..." rows="5" />

          <button type="submit" className={styles.blackButton}>SUBMIT</button>
        </form>
      </div>

      <div className={styles.right}>
      <img src="/images/Service.svg" alt="24/7 Service" /> 
      </div>
    </section>
  );
};

export default ContactSection;
