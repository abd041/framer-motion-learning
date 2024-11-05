import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1
    }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                className='modal-backdrop'
                exit="hidden"
            >

                <motion.div className="modal"
                    variants={modal}
                >
                    <p>Want to make another Pizza?</p>
                    <Link to="/">
                        <button onClick={()=> setShowModal(false)}>Start Again</button>
                    </Link>
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default Modal