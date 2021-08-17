import React, { useMemo } from "react";
import queryString from "query-string";

import { useLocation } from "react-router";
import { useForm } from "../../customHooks/useForm";

import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const [{ heroSearched }, handleInputChange] = useForm({ heroSearched: q });
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${heroSearched}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-md-5">
          <h4>Search form</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="heroSearched"
              className="form-control"
              placeholder="find your hero"
              onChange={handleInputChange}
              value={heroSearched}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-7">
          <h4>Results</h4>
          <hr />
          {q === "" &&
            heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There's no hero with the name {q}
            </div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
