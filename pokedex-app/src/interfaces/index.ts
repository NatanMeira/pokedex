/* eslint-disable camelcase */
export interface PokemonData {
  id: number;
  name: string;
  image: string;
  small_image: string;
  generation: string;
  evolution_stage: string;
  evolved: string;
  family_id: string;
  cross_gen: string;
  stat_total: string;
  atk: string;
  def: string;
  sta: string;
  legendary: string;
  aquireable: string;
  spawns: string;
  regional: string;
  raidable: string;
  hatchable: string;
  shiny: string;
  nest: string;
  is_new: string;
  not_gettable: string;
  future_evolve: string;
  n_100_cp_40: string;
  n_100_cp_39: string;
  type?: [
    {
      id: number;
      name:
        | 'electric'
        | 'bug'
        | 'default'
        | 'dark'
        | 'dragon'
        | 'fairy'
        | 'fighting'
        | 'fire'
        | 'flying'
        | 'ghost'
        | 'grass'
        | 'ground'
        | 'ice'
        | 'normal'
        | 'poison'
        | 'psychic'
        | 'rock'
        | 'steel'
        | 'water';
    },
    {
      id: number;
      name:
        | 'electric'
        | 'bug'
        | 'default'
        | 'dark'
        | 'dragon'
        | 'fairy'
        | 'fighting'
        | 'fire'
        | 'flying'
        | 'ghost'
        | 'grass'
        | 'ground'
        | 'ice'
        | 'normal'
        | 'poison'
        | 'psychic'
        | 'rock'
        | 'steel'
        | 'water';
    },
  ];
}
