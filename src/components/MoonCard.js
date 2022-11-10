function MoonCard({moon}) {
const {name, fun_fact} = moon
  return (
    <div className="white-border">

      <h3>{name}</h3>

      <p>{fun_fact}</p>

    </div>
  )

}

export default MoonCard
