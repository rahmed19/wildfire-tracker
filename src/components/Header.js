import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

export default function Header() {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Global Events Tracker (Powered by ReactJS & NASA open API)</h1>

        </header>
    )
}
