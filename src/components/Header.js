import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/globe'

export default function Header({ setEventCategory, eventCategory }) {

    function handleChange() {
        eventCategory === "wildfires" ? setEventCategory("volcanoes") : setEventCategory("wildfires")
    }

    return (
        <header className="header">
            <div className="wrapper">
                <div className="flex-container">
                    <div className="column">
                        <h1><Icon icon={locationIcon} /> Global Events Tracker (Powered by ReactJS & NASA open API)</h1>
                    </div>
                    <div className="column">
                        <h3 onClick={() => handleChange()}>
                            {eventCategory === "volcanoes" ? "Switch to Wildfires tracker" : "Switch to Volcano tracker"}
                        </h3>
                    </div>
                </div>
            </div>
        </header>
    )
}
