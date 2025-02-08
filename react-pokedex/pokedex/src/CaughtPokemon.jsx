import { useState } from "react"; // exactly imports useState | { useState as foo }
import PropTypes from "prop-types"; // exactly imports PropTypes, but you may rename it

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    const pokemonList = [
      "Pikachu",
      "Charmander",
      "Bulbasaur",
      "Squirtle",
      "Eevee",
      "Jigglypuff",
      "Snorlax",
      "Meowth",
      "Psyduck",
    ];

    const newPokemon =
      pokemonList[Math.floor(Math.random() * pokemonList.length)];
    setCaught(caught.concat(newPokemon));
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon;

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};
