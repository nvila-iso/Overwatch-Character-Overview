import useOverwatch from "./getCharacters";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { data } = useOverwatch();
  //   console.log(data);
  return (
    <>
      <div className="grid">
        {data.map((character) => {
          return <CharacterCard key={character.key} character={character} />;
        })}
      </div>
    </>
  );
};

export default CharacterList;
