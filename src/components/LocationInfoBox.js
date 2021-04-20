import React from 'react'

export default function LocationInfoBox({ info, setLocationInfo }) {
    return (
        <div className="location-info" onClick={() => setLocationInfo(null)}>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
                <li>LATITUDE: <strong>{info.lat}</strong></li>
                <li>LONGTITUDE: <strong>{info.lng}</strong></li>
            </ul>
        </div>
    )
}
