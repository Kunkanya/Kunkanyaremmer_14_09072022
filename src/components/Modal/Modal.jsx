import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../Modal/Modal.css'

/**
 * 
 * @param {string} param0 
 * @returns 
 */
const Modal = ({ show, content, onClose }) => {
        
    if (!show) {
        return null
    }

    return (
        <>
            {show ?
                <div className="modal" onClick={onClose} >
                    <div className='modalContentBG' onClick={(e) => e.stopPropagation()}>
                        <p className="modalContent">{content}</p>
                        <div className='modalFooter'>
                            <button className='buttonClose' onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
                : ""
            }
        </>
    )
}

Modal.propTypes = {

    content: PropTypes.string , 
    show: PropTypes.bool.isRequired
}

export default Modal
