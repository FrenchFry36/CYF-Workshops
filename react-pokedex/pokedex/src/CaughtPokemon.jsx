import PropTypes from "prop-types";

function CaughtPokemon(props) {
  return <p>Caught 0 Pokemon on {props.date}</p>;
}

export default CaughtPokemon;

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};
