import React from 'react'

const Modal = ({ children, onClose }) => {

  return (
    <>
        {/* Modal 배경 흐릿한(blur) 부분 */}
        <div onClick={onClose} data-cy="modal-backdrop" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(12px)', // Tailwind의 backdrop-blur-md
            zIndex: 1
        }}></div>

        {/* Modal dialog 부분 */}
        <div style={{
            position: 'fixed',
            zIndex: 20,
            width: '50%',
            padding: '2rem',
            margin: 0,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            backgroundColor: '#64748b'
        }}>
            {children}
        </div>
    </>
  )
}

export default Modal