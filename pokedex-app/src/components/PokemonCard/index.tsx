import React from 'react';
import { Link } from 'react-router-dom';

import CardActions from './CardActions';
import { PokemonCardContainer, Pokemon } from './styles';

import NumberPadding from '../../utils/NumberPadding';

import { PokemonData } from '../../interfaces';

interface PokemonCardProps {
  hideDetails?: boolean;
  pokemon: PokemonData;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, hideDetails }) => {
  return (
    <>
      <PokemonCardContainer pokemonType={pokemon.type?.[0].name}>
        <Link to={`/pokemon/${pokemon.id}`}>
          <Pokemon className="pokemon">
            <span className="pokedex-number">{NumberPadding(pokemon.id)}</span>
            <span className="pokemon-name">{pokemon.name}</span>
            <img src={pokemon.image} alt={pokemon.name} width="100%" />
          </Pokemon>
        </Link>
        <CardActions hideDetails={hideDetails} pokemon={pokemon} />
      </PokemonCardContainer>
    </>
  );
};

export default PokemonCard;
