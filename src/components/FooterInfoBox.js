import React from 'react'
import { motion } from 'framer-motion'

export default function FooterInfoBox({ showInfo, setShowInfo }) {

    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-column">
                        Column 1
                    </div>
                    <div className="modal-column">
                        Column 2
                    </div>
                    <div className="modal-column">
                        Column 3
                    </div>
                </div>
            </div>
        </>
    )
}

// 