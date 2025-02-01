import PropTypes from "prop-types";

function BestPokemon(props) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export { BestPokemon };

BestPokemon.propTypes = {
  abilities: PropTypes.array.isRequired,
};
