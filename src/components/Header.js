import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/globe'
import { motion } from 'framer-motion'

export default function Header({ setEventCategory, eventCategory }) {

    function handleChange() {
        eventCategory === "wildfires" ? setEventCategory("volcanoes") : setEventCategory("wildfires")
    }

    return (
        <motion.header className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="wrapper">
                <div className="flex-container">
                    <div className="column">
                        <h1><Icon icon={locationIcon} /> &nbsp;
                            {eventCategory.charAt(0).toUpperCase() + eventCategory.slice(1) + " "}
                            Event Tracker</h1>
                    </div>
                    <div className="column">
                        <h1 className="a" onClick={() => handleChange()}>
                            {eventCategory === "volcanoes" ? "Switch to wildfires tracker" : "Switch to volcanoes tracker"}
                        </h1>
                    </div>
                    <div className="column">
                        <h1>Powered by ReactJS & NASA open API</h1>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
