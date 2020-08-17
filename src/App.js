import React from 'react';
import { Container, Topo, Titulo, Consulta } from './Styles';

import Filtro from './components/Filtro/Filtro'
import Lista from './components/Lista/Lista'
import Detalhes from './components/Detalhes/Detalhes'

const App = () => {
  	return (
      	<Container>

			<Topo>
				<Titulo>Teste</Titulo>
			</Topo>

			<Filtro />

			<Consulta>
				<Lista />
				<Detalhes />
			</Consulta>

		</Container>
  	);
}

export default App;
