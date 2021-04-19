import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Map from './components/Map'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

  }, [])


  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}

    </div>
  );
}

export default App;
