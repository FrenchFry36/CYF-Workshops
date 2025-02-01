import { Logo } from "./Logo";
import { BestPokemon } from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
