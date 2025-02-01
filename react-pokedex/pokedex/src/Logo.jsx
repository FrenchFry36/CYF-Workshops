import { PropTypes } from "prop-types";

function Logo(props) {
  console.log(props);
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </header>
  );
}

export { Logo };

Logo.propTypes = {
  appName: PropTypes.string.isRequired,
};
