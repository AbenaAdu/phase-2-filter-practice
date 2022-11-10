function StarCard({star}) {
const {name, distance_in_light_years, fun_fact} = star
  return (
    <div className="white-border">

      <h3>{name}</h3>

      <p>Light years away: {distance_in_light_years}</p>

      <p>{fun_fact}</p>

    </div>
  )

}

export default StarCard
