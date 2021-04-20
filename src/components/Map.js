import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


export default function Map({ eventData, center, zoom }) {

    const [locationInfo, setLocationInfo] = useState(null)
    const [eventCategory, setEventCategory] = useState("wildfires")

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
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={() => setLocationInfo(null)}
            >
                {markers}

            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )

}

Map.defaultProps = {
    center: {
        lat: 43.246292,
        lng: -97.1384
    },
    zoom: 5
}