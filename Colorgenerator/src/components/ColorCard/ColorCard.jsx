import React from 'react'
import { FaClipboardCheck } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'
import { motion } from "motion/react"

export default function ColorCard ({ hex }) {
  const handleCopy = color => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(color)
        return  toast.success('The color code has been copied!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            draggable: true,
            progress: undefined
          })
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.2,
      scale: { type: 'spring', visualDuration: 0.2, bounce: 0.3 }
    }}
    className='single-card'
    style={{ background: `#${hex}` }}
  >
    
      <ToastContainer />
      <div className='content'>
        <p>#{hex}</p>
        <button onClick={() => handleCopy(`#${hex}`)}>
        <FaClipboardCheck />
      </button>
      </div>
      
    </motion.div>
  )
}
