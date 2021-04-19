import React from 'react'
import spinner from './spinner.gif'

export default function Loader() {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Loading Data</h1>

        </div>
    )
}
