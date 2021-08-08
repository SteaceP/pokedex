import React from "react";
import { upperCaseFirst } from "utils";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../theme/PokedexTheme";

export const PokemonCard = ({ pokemon, history }) => {
  const { name, url } = pokemon;
  const classes = useStyles();
  const id = url.match("https://pokeapi.co/api/v2/pokemon/(\\d+)/")[1];

  return (
    <Grid item xs={6} md={3}>
      <Card onClick={() => history.push(`/pokemon/${name}`)}>
        <CardMedia
          className={classes.cardMedia}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          style={{ width: "130px", height: "130px" }}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{`${id} - ${upperCaseFirst(name)}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
