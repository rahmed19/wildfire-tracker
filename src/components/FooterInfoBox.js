import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FooterInfoBox({ showInfo, setShowInfo }) {
    console.log("hello from footer info")
    return (
        <div className="modal-wrapper" onClick={() => setShowInfo(false)}>
            <div className="modal-backdrop" />
            <motion.div className="modal-box"
                animate={{}}>
                <div className="modal-content">
                    <h2>Project Information</h2>
                    <p>
                        This demo ReactJS project was built largely based
                        on <a href="https://www.youtube.com/watch?v=ontX4zfVqK8" target="new">
                            this YouTube tutorial. My additions and changes include:
                </a>
                    </p>
                </div>
            </motion.div>
        </div >
    )
}
