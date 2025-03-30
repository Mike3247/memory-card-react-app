export default function Card ({ pokemonName, imageUrl, onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="pokemon__container">
        <img className="card__pokemon" src={imageUrl} alt={pokemonName} />
      </div>
      <h2 className="card__title">{pokemonName}</h2>
    </div>
  )
}