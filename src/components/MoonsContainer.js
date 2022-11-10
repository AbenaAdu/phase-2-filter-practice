import { useState, useEffect } from "react"
import MoonFilter from "./MoonFilter"
import MoonCard from './MoonCard'

function MoonsContainer() {
  const [moonsData, setMoonsData] = useState([])
  const [searchMoon, setSearchMoon] = useState("")

  // const moonsURL = "http://localhost:4000/moons"
  useEffect(() => {
    fetch("http://localhost:4000/moons")
    .then(response => response.json())
    .then (data => setMoonsData(data))
  }, [])

  const filteredMoons = moonsData.filter((moon) => {
    return moon.name.toLowerCase().includes(searchMoon.toLowerCase())
  })

  const eachMoon = filteredMoons.map(moon => {
    return <MoonCard key={moon.id} moon={moon}/>
  })
  
  return (
    <div className="white-border-top">

      <h2>Moons</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the moons, map through and display them. Use the MoonFilter component to allow users to see moons based on name. This should happen as the user types into the form.</p>

      <MoonFilter searchMoon={searchMoon} setSearchMoon={setSearchMoon}/>

      <div className="grid column-3">

        {eachMoon}

      </div>

    </div>
  )

}

export default MoonsContainer
