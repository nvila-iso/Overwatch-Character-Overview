import HeroCard from "./HeroCard";
import useQuery from "../api/useQuery";

const HeroDisplay = () => {
  const { data: heroes, loading, error } = useQuery("/heroes", "heroes");

  if (loading || !heroes) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  console.log(heroes);

  return (
    <>
      <div className="heroes-container">
        {heroes.map((hero) => {
          return <HeroCard key={hero.key} hero={hero} />;
        })}
      </div>
    </>
  );
};

export default HeroDisplay;
