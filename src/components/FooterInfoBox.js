import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FooterInfoBox({ showInfo, setShowInfo }) {
    console.log("hello from footer info")
    return (
        <>
            <motion.div className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            />
            <motion.div className="modal-wrapper"
                initial={{ y: "100vh" }}
                animate={{ y: "0" }}>

                <div className="modal-box">
                    <div className="modal-image">
                        <img src={process.env.REACT_APP_IMG} />
                    </div>
                    <div className="modal-content modal-border">
                        <h2>Project Informationdsfdfdf</h2>
                        <a href="#" className="modal-close" onClick={() => setShowInfo(false)} />
                    </div>




                </div>
            </motion.div >
        </>
    )
}

// 