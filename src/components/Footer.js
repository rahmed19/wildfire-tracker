import React, { useState } from 'react'
import FooterInfoBox from './FooterInfoBox'

export default function Footer() {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <footer className="footer">
            <div className="footer-flex-container">
                <div className="footer-column">
                    <h3 onClick={() => setShowInfo((prevState) => !prevState)}
                        className="footer-h3">Learn more about this demo ReactJS project.</h3>
                    {showInfo && <FooterInfoBox showInfo={showInfo} setShowInfo={setShowInfo} />}
                </div>
            </div>
        </footer >


    )
}
