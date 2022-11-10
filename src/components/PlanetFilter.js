function PlanetFilter({filteredPlanet, setFilteredPlanet}) {
  return (
    <select onChange={(e) => setFilteredPlanet(e.target.value)} value={filteredPlanet}>
      <option value="all">All</option>
      <option value="only_planets">True Planets</option>
    </select>
  )
}

export default PlanetFilter
