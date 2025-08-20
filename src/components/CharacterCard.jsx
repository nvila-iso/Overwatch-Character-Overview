const CharacterCard = ({ character }) => {
  return (
    <div className="grid">
      <div className="character-container">
        <div className="chara-img">
          <img src={character.portrait} />
        </div>
        <div className="chara-name">{character.name}</div>
        <div className="chara-role">{character.role}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
