export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonTypes {
  name: string;
  isEnable: boolean;
}

export interface Pokemon {
  abilities: [];
  base_experience: number;
  forms: [];
  id: number;
  height: number;
  weight: number;
  name: string;
  types: any;
  stats: [];
  sprites: any;
}
