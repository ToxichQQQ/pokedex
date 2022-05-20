import React, { FC } from "react";
import { Pokemon } from "../../types";
import { Col } from "antd";
import "./PockemonCard.css";
import "../../pokemonsColor.css";
import pokeState from "../../store/pokeState";
import { useNavigate } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const cardStyle = `card ${pokemon.types[0].type.name}`;

  const handleSetCurrentPokemon = () => {
    pokeState.setCurrentPokemon(pokemon);
    navigate("/pokemon");
  };

  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      onClick={() => handleSetCurrentPokemon()}
    >
      <div className={cardStyle}>
        <img
          src={pokemon.sprites.other.home.front_default}
          className="card-img"
        />
        <p>{pokemon.name}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
      </div>
    </Col>
  );
};
