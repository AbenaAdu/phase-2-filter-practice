function StarFilter({filteredStars, setFilteredStars }) {

  return (
    <>

      <label htmlFor="star-search">Lightyears away:</label>

      <input type="number" name="star-search" 
      value={filteredStars} 
      onChange={(e) => setFilteredStars(e.target.value)}
      />

    </>
  )

}

export default StarFilter
