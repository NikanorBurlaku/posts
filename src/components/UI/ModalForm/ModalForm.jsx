import React from 'react';
import classes from './ModalForm.module.css';

const ModalForm = ({ setVisible, isVisible, children }) => {

    const styles = [classes.modal]

    if (isVisible) {
        styles.push(classes.active);
    }
    return (
        <div className={styles.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalForm;