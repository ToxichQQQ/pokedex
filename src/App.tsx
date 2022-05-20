import React, { useEffect } from "react";
import "./App.css";
import pokeState from "./store/pokeState";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { PokemonPage } from "./pages/PokemonPage/PokemonPage";

const App = observer(() => {
  useEffect(() => {
    pokeState.fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Routes>
    </div>
  );
});

export default App;
