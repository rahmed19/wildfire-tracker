import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Map from './components/Map'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [eventCategory, setEventCategory] = useState("wildfires")

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

  }, [])


  return (
    <div className="App">
      <Header setEventCategory={setEventCategory} eventCategory={eventCategory} />
      {!loading ? <Map eventData={eventData} eventCategory={eventCategory} /> : <Loader />}

    </div>
  );
}

export default App;
