import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import alertIcon from '../../assets/alert.svg';

import styles from './styles.module.scss';

interface ModalContentProps {
  loading: boolean;
  handleClose: () => void;
  title?: ReactNode;
  content?: ReactNode;
}

export const ModalContent: FC<ModalContentProps> = memo(({ loading, handleClose, title, content }) => {
  return (
    <div className={styles.modalContent}>
      <img src={alertIcon} alt="AlertIcon" />
      <p className={styles.modalPrimaryText}>{title}</p>
      <p className={styles.modalSecondaryText}>{content}</p>
      <div className={styles.modalButtons}>
        <button onClick={handleClose} className={styles.modalButtonsCancel}>
          Cancel
        </button>
        <button onClick={handleClose} disabled={loading} className={styles.modalButtonsDelete}>
          Delete
        </button>
      </div>
    </div>
  );
});
