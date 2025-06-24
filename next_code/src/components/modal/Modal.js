'use client';

import { useEffect } from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modalComponentClass" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
