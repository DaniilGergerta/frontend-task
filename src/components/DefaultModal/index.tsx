import { Suspense, lazy, memo, useCallback, useState } from 'react';
import type { FC } from 'react';
import defaultContent from '../../assets/content.json';

const ModalContent = lazy(() => import('../ModalContent'));
const ModalWrapper = lazy(() => import('../ModalWrapper'));

export const DefaultModal: FC = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<number>();

  const handleOpen = () => {
    setIsOpen(true);
    const id = setTimeout(() => {
      setLoading(false);
    }, 2000);

    setTimeoutId(id);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);

    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
      setLoading(true);
    }
  }, [timeoutId]);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <Suspense>
          <ModalWrapper open={isOpen} onClose={handleClose}>
            <ModalContent {...{ loading, handleClose, ...defaultContent.default }} />
          </ModalWrapper>
        </Suspense>
      )}
    </div>
  );
});
