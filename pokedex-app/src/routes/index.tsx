import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Pokedex from '../pages/Pokedex';
import Pokemon from '../pages/Pokemon';
import PokemonForm from '../pages/Pokemon/forms';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route exact path="/" component={Pokedex} isPrivate />
    <Route path="/pokemon/create/" component={PokemonForm} isPrivate />
    <Route path="/pokemon/edit/:id" component={PokemonForm} isPrivate />
    <Route path="/pokemon/:id" component={Pokemon} isPrivate />
  </Switch>
);

export default Routes;
