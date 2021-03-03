import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import api from '../../services/api';
import NumberPadding from '../../utils/NumberPadding';

import { PokemonData } from '../../interfaces';

import {
  PokemonShow,
  Evolutions,
  PokemonInfo,
  PokemonName,
  PokemonStatus,
  Types,
  Stats,
  PokemonStats,
} from './styles';

interface Params {
  id: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonData>();
  const [evolutions, setEvolutions] = useState<PokemonData[]>();
  const params: Params = useParams();

  useEffect(() => {
    api.get(`/pokemon/${params.id}`).then(response => {
      setPokemon(response.data.pokemon);
      setEvolutions(response.data.evolutions);
    });
  }, [params.id]);

  return (
    <>
      <Header />

      <main>
        <Container className="mt-3 min-vh-100">
          <Row className="justify-content-center">
            <PokemonShow md={11} className="min-vh-100 mt-3 mb-5 p-0">
              <Row>
                <Col md={5} sm={12}>
                  {pokemon ? (
                    <>
                      <PokemonCard hideDetails={false} pokemon={pokemon} />
                      {evolutions && pokemon.family_id !== '0' ? (
                        <Evolutions className="d-flex justify-content-center p-2 m-3">
                          {evolutions.map(evolution => (
                            <Col
                              key={evolution.id}
                              md={4}
                              className={`${
                                evolution.id === pokemon.id ? 'm-1' : 'm-2'
                              } pokemon-evolution ${
                                evolution.id === pokemon.id ? 'active' : ''
                              }`}
                            >
                              <Link to={`/pokemon/${evolution.id}`}>
                                <img
                                  src={evolution.small_image}
                                  alt={evolution.name}
                                  width="100%"
                                />
                              </Link>
                            </Col>
                          ))}
                        </Evolutions>
                      ) : (
                        ''
                      )}
                    </>
                  ) : (
                    ''
                  )}
                </Col>
                <Col md={7} sm={12} className="p-5">
                  <PokemonInfo>
                    <PokemonName className="d-flex justify-content-between mb-3">
                      <strong>{pokemon?.name}</strong>
                      <span>
                        {NumberPadding(pokemon?.id ? pokemon?.id : 1)}
                      </span>
                    </PokemonName>
                    <PokemonStatus>
                      <Types>
                        <span className="me-3">Tipo:</span>
                        <span className="pokemon-type me-3">
                          {pokemon?.type?.[0].name}
                        </span>
                        {pokemon?.type?.[1] ? (
                          <span className="pokemon-type">
                            {pokemon?.type?.[1].name}
                          </span>
                        ) : (
                          ''
                        )}
                      </Types>
                    </PokemonStatus>
                    <PokemonStats className="mt-5">
                      <Stats className="d-flex">
                        <span className="stats-label">Ataque</span>
                        <span className="stats-value">{pokemon?.atk}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Defesa</span>
                        <span className="stats-value">{pokemon?.def}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Estamina</span>
                        <span className="stats-value">{pokemon?.sta}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Status Total</span>
                        <span className="stats-value">
                          {pokemon?.stat_total}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Geração</span>
                        <span className="stats-value">
                          {pokemon?.generation}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Estágio de evolução</span>
                        <span className="stats-value">
                          {pokemon?.evolution_stage}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Evoluido</span>
                        <span className="stats-value">{pokemon?.evolved}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Id da Familia</span>
                        <span className="stats-value">
                          {pokemon?.family_id}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Cross Gen</span>
                        <span className="stats-value">
                          {pokemon?.cross_gen}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Legendário</span>
                        <span className="stats-value">
                          {pokemon?.legendary}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Adquirível</span>
                        <span className="stats-value">
                          {pokemon?.aquireable}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Spawns</span>
                        <span className="stats-value">{pokemon?.spawns}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Regional</span>
                        <span className="stats-value">{pokemon?.regional}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Raidable</span>
                        <span className="stats-value">{pokemon?.raidable}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Chocável</span>
                        <span className="stats-value">
                          {pokemon?.hatchable}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Shiny</span>
                        <span className="stats-value">{pokemon?.shiny}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Nest</span>
                        <span className="stats-value">{pokemon?.nest}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">È novo</span>
                        <span className="stats-value">{pokemon?.is_new}</span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Não Pegavel</span>
                        <span className="stats-value">
                          {pokemon?.not_gettable}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">Evolução Futura</span>
                        <span className="stats-value">
                          {pokemon?.future_evolve}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">N 100 Cp 40</span>
                        <span className="stats-value">
                          {pokemon?.n_100_cp_40}
                        </span>
                      </Stats>
                      <Stats className="d-flex">
                        <span className="stats-label">N 100 Cp 39</span>
                        <span className="stats-value">
                          {pokemon?.n_100_cp_39}
                        </span>
                      </Stats>
                    </PokemonStats>
                  </PokemonInfo>
                </Col>
              </Row>
            </PokemonShow>
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Pokemon;
