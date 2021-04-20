import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


export default function Map({ eventData, center, zoom }) {

    const [locationInfo, setLocationInfo] = useState(null)
    const [eventCategory, setEventCategory] = useState(12)

    const markers = eventData.map(ev => {

        if (ev.categories[0].id === "wildfires") {
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


        // if (ev.categories[0].id === 8) {
        //     return <LocationMarker
        //         lat={ev.geometries[0].coordinates[1]}
        //         lng={ev.geometries[0].coordinates[0]}
        //         onClick={() =>
        //             setLocationInfo({
        //                 id: ev.id,
        //                 title: ev.title,
        //                 lat: ev.geometries[0].coordinates[1],
        //                 lng: ev.geometries[0].coordinates[1]
        //             })}

        //     />
        // }

        return null
    })

    // function handleRemove() {
    //     setLocationInfo(null)

    //     // if (locationInfo === null &&  ) {
    //     //     const activeDiv = document.querySelector('.location-info')
    //     //     activeDiv.classList.add('hidden')
    //     // } else {
    //     //     activeDiv.classList.remove('hidden')
    //     // }
    //     // activeDiv.classList.add('hidden')
    //     // setLocationInfo(null)
    //     // console.log(locationInfo)

    // }

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