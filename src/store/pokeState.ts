import { makeAutoObservable, runInAction } from "mobx";
import { url } from "../url";
import { PokemonData, Pokemon } from "../types";

class PokeState {
  pokemons: Pokemon[] = [];
  currentPokemon?: Pokemon = undefined;
  items = 10;
  page = 1;
  nextUrl = "";
  prevUrl = "";
  currentUrl = "";
  defaultUrl = `${url}limit=${this.items}&offset=0`;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPokemon(pokemon: Pokemon) {
    this.currentPokemon = pokemon;
  }

  get currentPageSize() {
    if (this.page === 1) {
      this.currentUrl = `${url}limit=${this.items}&offset=0`;
    } else {
      this.currentUrl = `${url}limit=${this.items}&offset=${
        this.page * this.items
      }`;
    }
    return this.currentUrl;
  }

  async fetchPokemons(url = this.defaultUrl) {
    try {
      this.pokemons = [];
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          runInAction(() => {
            this.nextUrl = data.next;
            this.prevUrl = data.previous;
          });
          data.results.forEach(async (pokemon: PokemonData) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            runInAction(() => {
              this.pokemons = [...this.pokemons, data];
            });
          });
        });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new PokeState();
