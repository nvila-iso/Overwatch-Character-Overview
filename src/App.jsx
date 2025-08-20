import "./App.css";
import CharacterCard from "./components/CharacterCard";
import useOverwatch from "./components/getCharacters";
function App() {
  const { data } = useOverwatch();
  return (
    <>
      <CharacterCard />
    </>
  );
}

export default App;
