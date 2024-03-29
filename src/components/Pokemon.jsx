import { useState, useEffect } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { upperCaseFirst } from "utils";
import { useStyles } from "../theme/PokedexTheme";
import axios from "axios";

const Pokemon = (props) => {
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const { front_default } = sprites;

    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {upperCaseFirst(name)}
          <img src={front_default} alt="Sprites" />
        </Typography>
        <img
          style={{ width: "300px", height: "300px" }}
          src={fullImageUrl}
          alt="Full Pokemon"
        />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography variant="h6">Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`} </Typography>;
        })}
      </>
    );
  };
  return (
    <>
      <div className={classes.progress}>
        {pokemon === undefined && <CircularProgress />}
      </div>
      <div className={classes.pokeInfo}>
        {pokemon !== undefined && pokemon && generatePokemonJSX()}
        {pokemon === false && <Typography>Pokemon not found</Typography>}
        {pokemon !== undefined && (
          <Button variant="contained" onClick={() => history.goBack()}>
            Back to Pokedex
          </Button>
        )}
      </div>
    </>
  );
};

export default Pokemon;
