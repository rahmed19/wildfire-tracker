import React from 'react'
import GoogleMapReact from 'google-map-react'


export const Maps = ({centre, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{}}
            >

            </GoogleMapReact>
        </div>
    )
    
}
