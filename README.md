# Pokémon Explorer — React + D3

Copy the `src` folder contents into a Vite **React JavaScript** project (replace existing App.jsx, App.css, index.css; keep Vite's main.jsx).

From the project directory:

```bash
npm install
npm install d3
npm run dev
```

## What to study

- `src/data/pokemons.js`: data objects exported as a named export.
- `src/App.jsx`: `useState`, `.filter()`, `.sort()`, `.map()`, and D3's `max` / `scaleLinear`.
- `src/components/PokemonCard.jsx`: props and reusable cards.
- `src/components/StatBar.jsx`: passing a D3 scale as a prop and using JSX inline styles.
- `src/App.css`: responsive grid and visual design.

The favorite selections are kept in React state only and reset on a full page reload. Sprites load from GitHub/PokeAPI, so an internet connection is required.

## Portfolio theme + sprite hover

This edition matches the SC / DATAVIZ palette: dark `#16191d`, orange `#f07955`, light text `#f3f1ec`, Montserrat font family. Pokémon sprites use a sepia/orange CSS filter by default and reveal their original colors when hovering over or focusing within a card.

To load Montserrat from Google Fonts, add this to the `<head>` of your Vite `index.html` (or use a locally installed font):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```
