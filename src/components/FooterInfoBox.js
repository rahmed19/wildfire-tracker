import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FooterInfoBox({ showInfo, setShowInfo }) {
    console.log("hello from footer info")
    return (
        <div className="modal-wrapper" >
            <div className="modal-backdrop" />
            <div className="modal-box">
                <div className="modal-image">
                    <img src={process.env.REACT_APP_IMG} />
                </div>
                <div className="modal-content">
                    <h2>Project Information</h2>
                    <p className="modal-close" onClick={() => setShowInfo(false)}>X</p>
                </div>

            </div>
        </div >
    )
}

// 