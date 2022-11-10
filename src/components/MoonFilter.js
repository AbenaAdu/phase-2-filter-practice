
function MoonFilter({searchMoon, setSearchMoon}) {

  return (
    <>

      <label htmlFor="moon-search">Search for a moon:</label>

      <input type="text" 
      name="moon-search" 
      onChange={(e) => setSearchMoon(e.target.value)}
      value={searchMoon}/>

    </>
  )

}

export default MoonFilter
