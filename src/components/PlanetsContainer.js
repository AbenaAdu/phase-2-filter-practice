import { useEffect, useState } from "react"
import PlanetFilter from "./PlanetFilter"
import PlanetCard from "./PlanetCard"

function PlanetsContainer() {

  // const planetsURL = "http://localhost:4000/planets"
  const [planets, setPlanets] = useState([])
  const [filteredPlanet, setFilteredPlanet ] = useState("all")

  useEffect(() => {
    fetch("http://localhost:4000/planets")
    .then(response => response.json())
    .then(data => setPlanets(data))
  }, [])

  const filPlan = planets.filter ((planet) => {
    if (filteredPlanet === "all") {
      return true
    } else return planet.is_planet === true
  }
)
  const planetCard = filPlan.map((planet) => (
    <PlanetCard 
    key={planet.id}
    planet={planet}/>
  )
  )
  return (
    <div className="white-border-top">

      <h2>Planets of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the planets, map through and display them. Use the PlanetFilter component to allow users to filter true planets from planetoids.</p>

      <PlanetFilter filteredPlanet={filteredPlanet} setFilteredPlanet={setFilteredPlanet}/>
     

      <div className="grid column-3">

        {planetCard}

      </div>



    </div>
  )

}

export default PlanetsContainer
