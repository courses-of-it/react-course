import { heroes } from "../../data/heroes";

export const getHeroesByName = (name) => {
  if (name.toLowerCase() === "") {
    return [];
  }

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
