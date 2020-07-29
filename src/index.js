import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Error404 from './pages/error/Error404';

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
  		<Route path="/" component={Home} exact/>

  		<Route path="/cadastro/video" component={CadastroVideo} />
  		<Route path="/cadastro/Categoria" component={CadastroCategoria} />

  		<Route component={Error404}/>
  	</Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

