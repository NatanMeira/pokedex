import styled from 'styled-components';
import * as styleTypeVariants from '../../styles/pokemonTypeVariants';

interface PokemonCardContainerProps {
  pokemonType?:
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
}

export const PokemonCardContainer = styled.div<PokemonCardContainerProps>`
  -webkit-box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  border: 3px solid;
  border-radius: 1rem;

  ${props =>
    styleTypeVariants.pokemonTypeVariants[props.pokemonType || 'default']};
`;

export const Pokemon = styled.div`
  position: relative;
  background-color: blanchedalmond;
  border-radius: 0.5rem 0.5rem 0 0;
  border: 3px solid #eeb85d;
  color: black;

  .pokedex-number {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  .pokemon-name {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
