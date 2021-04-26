import React, { useState } from 'react'
import FooterInfoBox from './FooterInfoBox'
import { motion } from 'framer-motion'

export default function Footer() {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <motion.footer className="footer"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div className="footer-flex-container">
                <div className="footer-column">
                    <h3 onClick={() => setShowInfo((prevState) => !prevState)}
                        className="footer-h3">Learn more about this demo ReactJS project.</h3>
                    {showInfo && <FooterInfoBox showInfo={showInfo} setShowInfo={setShowInfo} />}
                </div>
            </div>
        </motion.footer >


    )
}
