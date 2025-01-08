import Styles from './Modal.module.css'; 

const Modal = ({ closeModal }) => {
  return (
    <div className={Styles.modalContainer}>
      <div className={Styles.modal}>
        <h2 className={Styles.h2}>Thank you for subscribing</h2>
        <p>You will receive the latest updates in your mail.</p>
        <button className={Styles.closeButton} onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
