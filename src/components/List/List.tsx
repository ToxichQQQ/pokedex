import React, { FC } from "react";
import { Pokemon } from "../../types";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Row } from "antd";
import "./List.css";

interface ListProps {
  pokeList: Pokemon[];
}

export const List: FC<ListProps> = ({ pokeList }) => {
  console.log(pokeList);
  return (
    <Row className="list">
      {pokeList ? (
        pokeList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id + pokemon.name} />
        ))
      ) : (
        <p>Loading</p>
      )}
    </Row>
  );
};
