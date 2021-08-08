import { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import { useStyles } from "../theme/PokedexTheme";
import { PokemonCard } from "./PokemonCard";

const Pokedex = ({ match, history }) => {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const itemsPerPage = 20;
  const numberOfPage = Math.ceil(numberOfItems / itemsPerPage);

  const getPokemonPage = (page) => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${
          (page - 1) * 20
        }`
      )
      .then(function (response) {
        const { count, results } = response.data;

        setNumberOfItems(count);
        setPokemons(results); // "cache" the response to remove some load for the API (requested by the devs and a good idea to keep it free)
      });
  };

  const handlePaginationChange = (_event, page) => {
    getPokemonPage(page);
    history.push(`/${page}`);
  };

  useEffect(() => {
    getPokemonPage(match.params.page);
  }, [match]);

  return (
    <div className={classes.pokedexContainer}>
      <Pagination
        count={numberOfPage}
        onChange={handlePaginationChange}
        className={classes.pagination}
      />
      {pokemons ? (
        <Grid container spacing={3}>
          {pokemons.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} history={history} />
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
      <Pagination
        count={numberOfPage}
        onChange={handlePaginationChange}
        className={classes.pagination}
      />
    </div>
  );
};

export default Pokedex;
