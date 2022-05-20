import React, { FC, useState } from "react";
import { Col, Input, Pagination, Row } from "antd";
import { Header } from "../../components/Header/Header";
import { List } from "../../components/List/List";
import { toJS } from "mobx";
import pokeState from "../../store/pokeState";
import "./MainPage.css";
import { observer } from "mobx-react-lite";
import { pokemonTypesArr } from "../../constants";

export const MainPage: FC = observer(() => {
  const pokeInfo = [...toJS(pokeState.pokemons)];
  const [filter, setFilter] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState(pokemonTypesArr);

  const handleChange = (page: number) => {
    pokeState.page = page;

    pokeState.fetchPokemons(pokeState.currentPageSize);
  };

  const onShowSizeChange = (current: number, size: number) => {
    pokeState.items = size;
    pokeState.fetchPokemons(pokeState.currentPageSize);
  };

  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <Header title={"PokeDex"} level={1} />
        </Col>
        <Col span={16}>
          <Input
            value={filter}
            data-test="input"
            placeholder="Search pokemon"
            onChange={(e) => setFilter(e.target.value)}
          />
        </Col>
        <Col span={24}>
          <List
            pokeList={pokeInfo.filter((poke) => poke.name.includes(filter))}
          />
        </Col>
        <Pagination
          data-test="pagination"
          className="pagination"
          total={1114}
          onChange={handleChange}
          onShowSizeChange={onShowSizeChange}
          current={pokeState.page}
          pageSize={pokeState.items}
        />
      </Row>
    </div>
  );
});
