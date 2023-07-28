import { memo } from 'react';
import ReactDOM from 'react-dom';
import type { FC, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface IModalWrapperProps {
  open: boolean;
  onClose: () => void;
}

export const ModalWrapper: FC<PropsWithChildren<IModalWrapperProps>> = memo(({ open, onClose, children }) => {
  if (!open) return null;

  const portalElement = document.getElementById('portal');

  if (!portalElement) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>{children}</div>
      </div>
    </>,
    portalElement,
  );
});
