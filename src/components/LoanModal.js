import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import '../components/stylesheets/customcss/modal.css'
// import Modal from 'react-modal'
// import Modal from 'react-bootstrap/Modal'

// // react-modal component
// export default function LoanModal() {
//     const [ modalIsOpen, setModalIsOpen ] = useState(false)

//     function openModal() {
//         setModalIsOpen(true)
//     }

//     function closeModal() {
//         setModalIsOpen(false)
//     }

//   return (
//     <div>
//         <button className='em-c-btn' onClink={openModal}>Loan</button>
//         <Modal

//         parentSelector={() => document.querySelector('#root')}

//         isOpen={modalIsOpen}
//         onAfterClose={closeModal}
//         contentLabel='LoanConfirm'
//         >
//         <div className='loan-modal'>This is to confirm</div>
//         </Modal>
//     </div>
//   )
// }


// // bootstrap modal 
// export default function LoanModal() {
//     const [ modalOpen, setModalOpen ] = useState(false)
//     const handleClose = () => setModalOpen(false)
//     const handleOpen = () => setModalOpen(true)
            
//   return (
//     <div className=''>
//         <button className='em-c-btn em-c-btn--primary' onClick={handleOpen}>Loan</button>
//             <Modal 

//             // parentSelector={() => document.querySelector('#root')}

//             show = {modalOpen} 
//             onHide={handleClose} 
//             animation={true}
//             ariaHideApp={false}>
//                 <Modal.Header>
//                     <div className='em-c-modal__header'>
//                         Confirmation
//                     </div>
//                 </Modal.Header>
//                 <Modal.Body>Hi</Modal.Body>
//                 <Modal.Footer>
//                     <button className='em-c-btn--bare em-c-modal__close-btn' onClick={handleClose}>Close</button>
//                 </Modal.Footer>
//             </Modal>
//             {/* end of modal */}
//         </div>
//   )
// }

// // token
// // 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



const LoanModal = ({ isShowing, hide }) => 
isShowing ? ReactDom.createPortal 

(
    <React.Fragment>
        <div className='modal-container' />
        <div className='modal-wrapper'>
            <div className='modal'>
                <div className='modal-header'>
                    <h3 className='em-c-modal__title'>Confirmation</h3>
                    <button className='em-c-btn--bare' onClick={hide}>
                        <span className='em-c-btn__text'>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null

export default LoanModal