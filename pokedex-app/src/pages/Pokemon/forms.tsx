/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {} from './styles';

import { PokemonData } from '../../interfaces';
import api from '../../services/api';

type PokemonFormData = Omit<PokemonData, 'id' | 'types'>;

interface Params {
  id: string;
}

const PokemonForm: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonData>();

  const params: Params = useParams();

  useEffect(() => {
    if (params.id) {
      api.get(`/pokemon/${params.id}`).then(response => {
        setPokemon(response.data.pokemon);
      });
    }
  }, [params.id]);

  function validate(values: PokemonFormData) {
    const errors = {} as PokemonFormData;
    if (!values.name) {
      errors.name = 'O Campo de E-mail é Obrigatório';
    }
    if (!values.image) {
      errors.image = 'O Campo de image é Obrigatório';
    }
    if (!values.small_image) {
      errors.small_image = 'O Campo de small_image é Obrigatório';
    }
    if (!values.generation) {
      errors.generation = 'O Campo de generation é Obrigatório';
    }
    if (!values.evolution_stage) {
      errors.evolution_stage = 'O Campo de evolution_stage é Obrigatório';
    }
    if (!values.evolved) {
      errors.evolved = 'O Campo de evolved é Obrigatório';
    }
    if (!values.family_id) {
      errors.family_id = 'O Campo de family_id é Obrigatório';
    }
    if (!values.cross_gen) {
      errors.cross_gen = 'O Campo de cross_gen é Obrigatório';
    }
    if (!values.stat_total) {
      errors.stat_total = 'O Campo de stat_total é Obrigatório';
    }
    if (!values.atk) {
      errors.atk = 'O Campo de atk é Obrigatório';
    }
    if (!values.def) {
      errors.def = 'O Campo de def é Obrigatório';
    }
    if (!values.sta) {
      errors.sta = 'O Campo de sta é Obrigatório';
    }
    if (!values.legendary) {
      errors.legendary = 'O Campo de legendary é Obrigatório';
    }
    if (!values.aquireable) {
      errors.aquireable = 'O Campo de aquireable é Obrigatório';
    }
    if (!values.spawns) {
      errors.spawns = 'O Campo de spawns é Obrigatório';
    }
    if (!values.regional) {
      errors.regional = 'O Campo de regional é Obrigatório';
    }
    if (!values.raidable) {
      errors.raidable = 'O Campo de raidable é Obrigatório';
    }
    if (!values.shiny) {
      errors.shiny = 'O Campo de shiny é Obrigatório';
    }
    if (!values.nest) {
      errors.nest = 'O Campo de nest é Obrigatório';
    }
    if (!values.is_new) {
      errors.is_new = 'O Campo de is_new é Obrigatório';
    }
    if (!values.not_gettable) {
      errors.not_gettable = 'O Campo de not_gettable é Obrigatório';
    }
    if (!values.future_evolve) {
      errors.future_evolve = 'O Campo de future_evolve é Obrigatório';
    }
    if (!values.n_100_cp_40) {
      errors.n_100_cp_40 = 'O Campo de n_100_cp_40 é Obrigatório';
    }
    if (!values.n_100_cp_39) {
      errors.n_100_cp_39 = 'O Campo de n_100_cp_39 é Obrigatório';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: pokemon ? pokemon.name : '',
      image: pokemon ? pokemon.image : '',
      small_image: pokemon ? pokemon.small_image : '',
      generation: pokemon ? pokemon.generation : '',
      evolution_stage: pokemon ? pokemon.evolution_stage : '',
      evolved: pokemon ? pokemon.evolved : '',
      family_id: pokemon ? pokemon.family_id : '',
      cross_gen: pokemon ? pokemon.cross_gen : '',
      stat_total: pokemon ? pokemon.stat_total : '',
      atk: pokemon ? pokemon.atk : '',
      def: pokemon ? pokemon.def : '',
      sta: pokemon ? pokemon.sta : '',
      legendary: pokemon ? pokemon.legendary : '',
      aquireable: pokemon ? pokemon.aquireable : '',
      spawns: pokemon ? pokemon.spawns : '',
      regional: pokemon ? pokemon.regional : '',
      raidable: pokemon ? pokemon.raidable : '',
      hatchable: pokemon ? pokemon.hatchable : '',
      shiny: pokemon ? pokemon.shiny : '',
      nest: pokemon ? pokemon.nest : '',
      is_new: pokemon ? pokemon.is_new : '',
      not_gettable: pokemon ? pokemon.not_gettable : '',
      future_evolve: pokemon ? pokemon.future_evolve : '',
      n_100_cp_40: pokemon ? pokemon.n_100_cp_40 : '',
      n_100_cp_39: pokemon ? pokemon.n_100_cp_39 : '',
    },
    enableReinitialize: true,
    validateOnChange: false,
    validate,
    onSubmit: async values => {
      const {
        name,
        image,
        small_image,
        generation,
        evolution_stage,
        evolved,
        family_id,
        cross_gen,
        stat_total,
        atk,
        def,
        sta,
        legendary,
        aquireable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        is_new,
        not_gettable,
        future_evolve,
        n_100_cp_40,
        n_100_cp_39,
      } = values;

      if (params.id) {
        const response = await api.put(`pokemon/${params.id}`, {
          name,
          image,
          small_image,
          generation,
          evolution_stage,
          evolved,
          family_id,
          cross_gen,
          stat_total,
          atk,
          def,
          sta,
          legendary,
          aquireable,
          spawns,
          regional,
          raidable,
          hatchable,
          shiny,
          nest,
          is_new,
          not_gettable,
          future_evolve,
          n_100_cp_40,
          n_100_cp_39,
          types: [1, 2],
          weathers: [1, 2],
        });

        if (response.status === 200) {
          toast.success('Pokemon Atualizado com Sucesso');
          setTimeout(() => {
            window.location.replace('/');
          }, 3000);
        } else {
          toast.error('Ocorreu um erro ao atualizar um pokemon');
        }
      } else {
        const response = await api.post('pokemon', {
          name,
          image,
          small_image,
          generation,
          evolution_stage,
          evolved,
          family_id,
          cross_gen,
          stat_total,
          atk,
          def,
          sta,
          legendary,
          aquireable,
          spawns,
          regional,
          raidable,
          hatchable,
          shiny,
          nest,
          is_new,
          not_gettable,
          future_evolve,
          n_100_cp_40,
          n_100_cp_39,
          types: [1, 2],
          weathers: [1, 2],
        });

        if (response.status === 201) {
          toast.success('Pokemon Criado com Sucesso');
          setTimeout(() => {
            window.location.replace('/');
          }, 3000);
        } else {
          toast.error('Ocorreu um erro ao criar um novo pokemon');
        }
      }
    },
  });

  return (
    <>
      <Header>
        <p className="text-center h1 ">
          <strong>
            {params.id ? 'Atualização de Pokemon ' : 'Criação de Pokemon'}
          </strong>
        </p>
      </Header>

      <main>
        <Container>
          <Form onSubmit={formik.handleSubmit} className="my-5">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.name ? formik.errors.name : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Url da imagem</Form.Label>
                  <Form.Control
                    type="text"
                    id="image"
                    name="image"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.image ? formik.errors.image : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Imagem De Evolução</Form.Label>
                  <Form.Control
                    type="text"
                    id="small_image"
                    name="small_image"
                    onChange={formik.handleChange}
                    value={formik.values.small_image}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.small_image
                        ? formik.errors.small_image
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Geração</Form.Label>
                  <Form.Control
                    type="text"
                    id="generation"
                    name="generation"
                    onChange={formik.handleChange}
                    value={formik.values.generation}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.generation
                        ? formik.errors.generation
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Estágio de evolução</Form.Label>
                  <Form.Control
                    type="text"
                    id="evolution_stage"
                    name="evolution_stage"
                    onChange={formik.handleChange}
                    value={formik.values.evolution_stage}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.evolution_stage
                        ? formik.errors.evolution_stage
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Evoluido</Form.Label>
                  <Form.Control
                    type="text"
                    id="evolved"
                    name="evolved"
                    onChange={formik.handleChange}
                    value={formik.values.evolved}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.evolved ? formik.errors.evolved : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Id da Familia</Form.Label>
                  <Form.Control
                    type="text"
                    id="family_id"
                    name="family_id"
                    onChange={formik.handleChange}
                    value={formik.values.family_id}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.family_id ? formik.errors.family_id : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Cross Gen</Form.Label>
                  <Form.Control
                    type="text"
                    id="cross_gen"
                    name="cross_gen"
                    onChange={formik.handleChange}
                    value={formik.values.cross_gen}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.cross_gen ? formik.errors.cross_gen : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Status Total</Form.Label>
                  <Form.Control
                    type="text"
                    id="stat_total"
                    name="stat_total"
                    onChange={formik.handleChange}
                    value={formik.values.stat_total}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.stat_total
                        ? formik.errors.stat_total
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Ataque</Form.Label>
                  <Form.Control
                    type="text"
                    id="atk"
                    name="atk"
                    onChange={formik.handleChange}
                    value={formik.values.atk}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.atk ? formik.errors.atk : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Defesa</Form.Label>
                  <Form.Control
                    type="text"
                    id="def"
                    name="def"
                    onChange={formik.handleChange}
                    value={formik.values.def}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.def ? formik.errors.def : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Estamina</Form.Label>
                  <Form.Control
                    type="text"
                    id="sta"
                    name="sta"
                    onChange={formik.handleChange}
                    value={formik.values.sta}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.sta ? formik.errors.sta : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Legendario</Form.Label>
                  <Form.Control
                    type="text"
                    id="legendary"
                    name="legendary"
                    onChange={formik.handleChange}
                    value={formik.values.legendary}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.legendary ? formik.errors.legendary : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Aquirível</Form.Label>
                  <Form.Control
                    type="text"
                    id="aquireable"
                    name="aquireable"
                    onChange={formik.handleChange}
                    value={formik.values.aquireable}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.aquireable
                        ? formik.errors.aquireable
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Spawns</Form.Label>
                  <Form.Control
                    type="text"
                    id="spawns"
                    name="spawns"
                    onChange={formik.handleChange}
                    value={formik.values.spawns}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.spawns ? formik.errors.spawns : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Regional</Form.Label>
                  <Form.Control
                    type="text"
                    id="regional"
                    name="regional"
                    onChange={formik.handleChange}
                    value={formik.values.regional}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.regional ? formik.errors.regional : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Raidable</Form.Label>
                  <Form.Control
                    type="text"
                    id="raidable"
                    name="raidable"
                    onChange={formik.handleChange}
                    value={formik.values.raidable}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.raidable ? formik.errors.raidable : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Shiny</Form.Label>
                  <Form.Control
                    type="text"
                    id="shiny"
                    name="shiny"
                    onChange={formik.handleChange}
                    value={formik.values.shiny}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.shiny ? formik.errors.shiny : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nest</Form.Label>
                  <Form.Control
                    type="text"
                    id="nest"
                    name="nest"
                    onChange={formik.handleChange}
                    value={formik.values.nest}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.nest ? formik.errors.nest : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Is New</Form.Label>
                  <Form.Control
                    type="text"
                    id="is_new"
                    name="is_new"
                    onChange={formik.handleChange}
                    value={formik.values.is_new}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.is_new ? formik.errors.is_new : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Not Gettable</Form.Label>
                  <Form.Control
                    type="text"
                    id="not_gettable"
                    name="not_gettable"
                    onChange={formik.handleChange}
                    value={formik.values.not_gettable}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.not_gettable
                        ? formik.errors.not_gettable
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Evolução Futura</Form.Label>
                  <Form.Control
                    type="text"
                    id="future_evolve"
                    name="future_evolve"
                    onChange={formik.handleChange}
                    value={formik.values.future_evolve}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.future_evolve
                        ? formik.errors.future_evolve
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>N 100 CP 40</Form.Label>
                  <Form.Control
                    type="text"
                    id="n_100_cp_40"
                    name="n_100_cp_40"
                    onChange={formik.handleChange}
                    value={formik.values.n_100_cp_40}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.n_100_cp_40
                        ? formik.errors.n_100_cp_40
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>N 100 CP 39</Form.Label>
                  <Form.Control
                    type="text"
                    id="n_100_cp_39"
                    name="n_100_cp_39"
                    onChange={formik.handleChange}
                    value={formik.values.n_100_cp_39}
                    size="lg"
                  />
                  <Form.Text className="text-danger">
                    <p className="mt-2">
                      {formik.errors.n_100_cp_39
                        ? formik.errors.n_100_cp_39
                        : null}
                    </p>
                  </Form.Text>
                </Form.Group>
              </Col>

              <Row className="justify-content-between w-100 px-5">
                <Link to="/" className="col-md-5 btn btn-danger mt-2">
                  Cancelar
                </Link>
                <Button
                  type="submit"
                  variant={params.id ? 'primary ' : 'success'}
                  className="col-md-5 mt-2 "
                >
                  {params.id ? 'Atualizar ' : 'Criar'}
                </Button>
              </Row>
            </Row>
          </Form>
        </Container>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default PokemonForm;
