import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const PokemonShow = styled(Col)`
  -webkit-box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  border: 3px solid #4e4a43;
  border-radius: 1.3rem;
`;

export const Evolutions = styled.div`
  .pokemon-evolution {
    border: 2px solid #000;
    background-color: #b5b5b5;
    border-radius: 1rem;
  }

  .pokemon-evolution.active {
    border: 2px solid #000000;
    background-color: #30475e;
  }
`;

export const PokemonInfo = styled.div``;

export const PokemonName = styled.div`
  border-bottom: 3px solid #2e2e98;
`;

export const PokemonStatus = styled.div``;

export const Types = styled.div`
  .pokemon-type {
    background: #f05454;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
  }
`;

export const PokemonStats = styled.div``;

export const Stats = styled.div`
  background: #f3f3f3;
  border: 2px solid #000;
  border-radius: 0.5rem;

  .stats-label {
    background: #198754;
    padding: 0.5rem;
    border-right: 1px solid #000;
  }

  .stats-value {
    padding: 0.5rem;
  }

  & + & {
    margin-top: 1rem;
  }
`;
