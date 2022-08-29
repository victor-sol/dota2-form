import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const [jogadores, setJogador] = useState([])

  const aoJogadorCadastrado = (jogador) => {
    console.log(jogador)
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoJogadorCadastrado={jogadores => aoJogadorCadastrado(jogadores)} />
    </div>
  );
}

export default App;
