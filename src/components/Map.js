import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


export default function Map({ eventData, eventCategory }) {

    const [locationInfo, setLocationInfo] = useState(null)
    const [centerProperty, setCenterProperty] = useState({ lat: 43.246292, lng: -97.1384 })

    useEffect(() => {
        if (eventCategory === "volcanoes") {
            setCenterProperty({ lat: 1.48, lng: 127.63 })
        } else {
            setCenterProperty({ lat: 43.246292, lng: -97.1384 })
        }
    }, [eventCategory])

    // let center = centerProperty
    // let zoom = 5



    const markers = eventData.map(ev => {
        if (ev.categories[0].id === eventCategory) {
            if (ev.geometry[0].coordinates.length === 2) {

                return <LocationMarker
                    lat={ev.geometry[0].coordinates[1]}
                    lng={ev.geometry[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            id: ev.id,
                            title: ev.title,
                            lat: ev.geometry[0].coordinates[1],
                            lng: ev.geometry[0].coordinates[0]
                        })}

                />
            }

        }

        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={{ lat: 43.246292, lng: -97.1384 }}
                center={centerProperty}
                defaultZoom={5}
                onClick={() => setLocationInfo(null)}
            >
                {markers}

            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )

}