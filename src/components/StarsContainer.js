import { useState, useEffect } from "react"
import StarFilter from "./StarFilter"
import StarCard from "./StarCard"

function StarsContainer() {
const [stars, setStars] = useState([])
const [filteredStars, setFilteredStars] = useState(0)

 useEffect(() => {
  fetch("http://localhost:4000/stars")
  .then(response => response.json())
  .then(data => setStars(data))
 }, [])
  // const starsURL = "http://localhost:4000/stars"
  
  const filStar = stars.filter(star => {
   return star.distance_in_light_years >= 
    filteredStars
  })

  const starCard = filStar.map ((star) => {
  return <StarCard 
    key={star.id}
    star={star}/>
})
  return (
    <div className="white-border-top">

      <h2>Stars of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the stars, map through and display them. Use the StarFilter component to allow users to find stars that many light years or further from the sun.</p>

      <StarFilter filteredStars={filteredStars} setFilteredStars={setFilteredStars}/>

      <div className="grid column-3">

        {starCard}

      </div>

    </div>
  )

}

export default StarsContainer
