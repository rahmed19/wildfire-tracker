import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

export default function Header() {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Widfire Tracker (Powered by ReactJS)</h1>

        </header>
    )
}
