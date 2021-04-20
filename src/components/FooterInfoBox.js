import React, { useState } from 'react'

export default function FooterInfoBox({ showInfo, setShowInfo }) {
    console.log("hello from footer info")
    return (
        <div className="footer-info" onClick={() => setShowInfo(false)}>
            <h2>Footer Info</h2>
        </div>
    )
}
