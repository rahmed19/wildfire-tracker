import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'


export default function Maps ({center, zoom}) {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
    
}

Maps.defaultProps ={
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}