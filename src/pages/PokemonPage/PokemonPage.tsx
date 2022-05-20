import React, { useEffect } from "react";
import pokeState from "../../store/pokeState";
import "./PokemonPage.css";
import "../../pokemonsColor.css";
import { Button, Col, Row, Tooltip } from "antd";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";
import { BackwardOutlined } from "@ant-design/icons";

export const PokemonPage = () => {
  const navigate = useNavigate();
  const pokemon = toJS(pokeState.currentPokemon);
  const pokemonCardStyle = `pokemonCard ${pokemon?.types[0].type.name}`;

  const handleBackToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!pokemon) {
      handleBackToHomePage();
    }
  }, []);

  return (
    <div className="pokemonContainer">
      <Row justify="center">
        <Col span={12} className={pokemonCardStyle}>
          <Tooltip title="Back" className="pokemonCardBackButton">
            <Button
              data-test="back-btn"
              onClick={handleBackToHomePage}
              icon={<BackwardOutlined />}
            />
          </Tooltip>
          <img
            className="pokemonCardImg"
            src={
              pokemon?.sprites.other.dream_world.front_default ||
              pokemon?.sprites.other.home.front_default
            }
          />
          <p className="pokemonCardHeader">{pokemon?.name}</p>
          <Row>
            <Col className="pokemonCardItems" span={24}>
              Type: {pokemon?.types[0].type.name}
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={12} className="pokemonCardItems">
              XP: {pokemon?.base_experience}
            </Col>
            <Col span={12} className="pokemonCardItems">
              ID: {pokemon?.id}
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={12} className="pokemonCardItems">
              Height: {pokemon?.height} m
            </Col>
            <Col span={12} className="pokemonCardItems">
              Weight: {pokemon?.weight} kg
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
