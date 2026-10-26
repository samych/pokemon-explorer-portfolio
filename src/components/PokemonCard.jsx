import StatBar from "./StatBar";

export default function PokemonCard({ pokemon, scale, favorite, onToggleFavorite }) {
  const total = pokemon.hp + pokemon.attack;
  return (
    <article className="pokemon-card">
      <div className="card-top">
        <span className="pokemon-id">#{String(pokemon.id).padStart(3, "0")}</span>
        <button className={`favorite ${favorite ? "is-favorite" : ""}`} type="button" onClick={() => onToggleFavorite(pokemon.id)} aria-label={`${favorite ? "Remove" : "Add"} ${pokemon.name} ${favorite ? "from" : "to"} favorites`} aria-pressed={favorite}>
          {favorite ? "♥" : "♡"}
        </button>
      </div>
      <img className="sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} loading="lazy" />
      <h2>{pokemon.name}</h2>
      <span className={`type-pill type-${pokemon.type.toLowerCase()}`}>{pokemon.type}</span>
      <div className="stats">
        <StatBar label="HP" value={pokemon.hp} scale={scale} color="#819099" />
        <StatBar label="Attack" value={pokemon.attack} scale={scale} color="#f07955" />
      </div>
      <div className="card-bottom"><span>Total HP + Attack</span><strong>{total}</strong></div>
    </article>
  );
}
