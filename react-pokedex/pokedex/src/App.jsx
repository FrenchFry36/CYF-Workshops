import { Logo } from "./Logo";
import { BestPokemon } from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  function logWhenClicked() {
    console.log("it doesn't matter what the message is");
  }

  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
