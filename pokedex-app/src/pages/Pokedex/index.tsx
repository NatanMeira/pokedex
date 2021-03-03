/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PokemonCard from '../../components/PokemonCard';

import { PokemonData } from '../../interfaces';
import api from '../../services/api';
import { InputGroup, SearchButton } from './styles';

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>();

  const [pagination, setPagination] = useState(1);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api
      .get(`/pokemons`, {
        params: {
          search: filter,
          page: pagination,
        },
      })
      .then(response => {
        setPokemons(response.data.data);
      });
  }, [filter, pagination]);

  return (
    <>
      <Header>
        <Form id="search-pokemons">
          <Row>
            <Col md={8} sm={12}>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Busque pelo nome ou Nº de um Pokemon"
                  onChange={e => {
                    setFilter(e.target.value);
                    setPagination(1);
                  }}
                  size="lg"
                />
                <SearchButton size="lg" type="submit" className="px-5">
                  Pesquisar
                </SearchButton>
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Link
                to="/pokemon/create"
                className="btn btn-success btn-add w-100"
              >
                Adicionar Pokemon
              </Link>
            </Col>
          </Row>
        </Form>
      </Header>
      <main>
        <Container className="mt-3 min-vh-100">
          <Row>
            {pokemons ? (
              pokemons.map(pokemon => (
                <Col md={3} className="p-3">
                  <PokemonCard key={pokemon.id} pokemon={pokemon} hideDetails />
                </Col>
              ))
            ) : (
              <h1>Carregando ...</h1>
            )}
          </Row>
        </Container>
      </main>
      <Container>
        <Row>
          <Pagination className="my-5 justify-content-center">
            <Pagination.Prev
              onClick={() => {
                if (pagination - 1 > 0) {
                  setPagination(pagination - 1);
                }
              }}
            />
            <Pagination.Item
              onClick={() => {
                if (pagination - 1 > 0) {
                  setPagination(pagination - 1);
                }
              }}
            >
              {pagination - 1}
            </Pagination.Item>
            <Pagination.Item active href="1">
              {pagination}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                if (pokemons?.length === 20) {
                  setPagination(pagination + 1);
                }
              }}
            >
              {pagination + 1}
            </Pagination.Item>
            <Pagination.Next
              onClick={() => {
                if (pokemons?.length === 20) {
                  setPagination(pagination + 1);
                }
              }}
            />
          </Pagination>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Pokedex;
