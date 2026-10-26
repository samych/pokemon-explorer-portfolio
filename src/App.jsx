import { useState } from "react";
import * as d3 from "d3";
import { pokemons } from "./data/pokemons";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const types = ["All", ...new Set(pokemons.map((pokemon) => pokemon.type))];
const maxStat = d3.max(pokemons.flatMap((pokemon) => [pokemon.hp, pokemon.attack]));
const scale = d3.scaleLinear().domain([0, maxStat]).range([0, 100]);

export default function App() {
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [favorites, setFavorites] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  function toggleFavorite(id) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  const visiblePokemons = pokemons
    .filter((pokemon) => selectedType === "All" || pokemon.type === selectedType)
    .filter((pokemon) => !onlyFavorites || favorites.includes(pokemon.id))
    .sort((a, b) => {
      if (sortBy === "hp") return b.hp - a.hp;
      if (sortBy === "attack") return b.attack - a.attack;
      if (sortBy === "total") return (b.hp + b.attack) - (a.hp + a.attack);
      return a.id - b.id;
    });

  return (
    <main className="app-shell">
      <header className="app-header">
        <div><p className="eyebrow">REACT × D3 / DATA EXPLORER</p><h1>Pokémon <em>Explorer.</em></h1><p className="intro">Explore 20 iconic Pokémon through their stats. Filter, sort and save your favorites.</p></div>
        <div className="dataset-count"><strong>{visiblePokemons.length}</strong><span>shown / {pokemons.length}</span></div>
      </header>
      <section className="controls" aria-label="Explore Pokémon">
        <div className="type-filters" aria-label="Filter by type">
          {types.map((type) => <button key={type} type="button" className={`filter-button ${selectedType === type ? "active" : ""}`} aria-pressed={selectedType === type} onClick={() => setSelectedType(type)}>{type}</button>)}
        </div>
        <div className="control-bottom">
          <label className="sort-label">Sort by <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option value="id">Pokédex ID</option><option value="hp">Highest HP</option><option value="attack">Highest Attack</option><option value="total">Highest total</option></select></label>
          <label className="favorites-label"><input type="checkbox" checked={onlyFavorites} onChange={(event) => setOnlyFavorites(event.target.checked)} /> Favorites only <span>({favorites.length})</span></label>
        </div>
      </section>
      <div className="legend"><span><i className="legend-dot hp-dot" />HP</span><span><i className="legend-dot attack-dot" />Attack</span><small>All bars share a 0–{maxStat} scale</small></div>
      {visiblePokemons.length ? (
        <section className="pokemon-grid" aria-label="Pokémon cards">
          {visiblePokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} scale={scale} favorite={favorites.includes(pokemon.id)} onToggleFavorite={toggleFavorite} />)}
        </section>
      ) : <p className="empty-state">No Pokémon match your filters. Try another type or disable “Favorites only”.</p>}
      <footer className="app-footer">Built with React, Vite & D3 · Sprites by PokeAPI</footer>
    </main>
  );
}
