import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';

import { Actions } from './styles';

import { PokemonData } from '../../../interfaces';
import api from '../../../services/api';

interface CardActionsProps {
  hideDetails?: boolean;
  pokemon: PokemonData;
}

const CardActions: React.FC<CardActionsProps> = ({ hideDetails, pokemon }) => {
  const handleDelete = useCallback(async (id: number) => {
    await api.delete(`/pokemon/${id}`);
    window.location.replace('/');
  }, []);

  return (
    <>
      <Actions>
        <div className="btn-group w-100">
          {hideDetails ? (
            <Link className="btn btn-show" to={`/pokemon/${pokemon.id}`}>
              <i className="far fa-eye me-1" />
              Detalhes
            </Link>
          ) : (
            ''
          )}
          <Link to={`/pokemon/edit/${pokemon.id}`} className="btn btn-edit">
            <i className="fas fa-edit me-1" />
            Editar
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(pokemon.id)}
            className="btn btn-delete"
          >
            <i className="fas fa-trash me-1" /> Deletar
          </button>
        </div>
      </Actions>
    </>
  );
};

export default CardActions;
