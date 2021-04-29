import React from 'react'
import { motion } from 'framer-motion'

import {
    CloseModalMarker

} from './FooterInfoBoxStyles'

export default function LocationInfoBox({ info, setLocationInfo }) {

    return (
        <motion.div className="location-info" onClick={() => setLocationInfo(null)}
            animate={{ x: -40 }}
        >
            <CloseModalMarker color={'white'} onClick={() => setLocationInfo(null)} />
            <motion.div animate={{ opacity: 1 }}>
                <h2>{info.event.charAt(0).toUpperCase() + info.event.slice(1)} Location Info</h2>
                <ul>
                    <li>ID: <strong>{info.id}</strong></li>
                    <li>TITLE: <strong>{info.title}</strong></li>
                    <li>LATITUDE: <strong>{info.lat.toFixed(3)}</strong></li>
                    <li>LONGTITUDE: <strong>{info.lng.toFixed(3)}</strong></li>
                </ul>
            </motion.div>
        </motion.div>
    )
}
