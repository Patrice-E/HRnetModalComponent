import { useEffect, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import './index.css';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  title?: string;
  onConfirm: () => void;
  onCancel: () => void;
}>;

export default function Modal({
  isOpen,
  title,
  onConfirm,
  onCancel,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onCancel]);

  return (
    isOpen &&
    createPortal(
      <div className='modal'>
        <dialog open className='content'>
          <header>{title ?? 'Confirmer ?'}</header>
          {children}
          <footer>
            <button type='button' onClick={onCancel}>
              Cancel
            </button>
            <button type='button' onClick={onConfirm} className='confirm'>
              Confirm
            </button>
          </footer>
        </dialog>
      </div>,
      document.body
    )
  );
}
