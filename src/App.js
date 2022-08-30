import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Funcao from './componentes/Funções';


function App() {

  const times = [
    {
      nome: 'Hard Carry',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Mid',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Offlane',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Soft Support',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Hard Support',
      corPrimaria: '#6278F7',
      corSecundaria: '#E8F8FF'
    }
  ]

  const [jogadores, setJogador] = useState([])

  const aoJogadorCadastrado = (jogador) => {
    console.log(jogador)
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogadores => aoJogadorCadastrado(jogadores)} />
      {times.map(time => <Funcao
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.funcao === time.nome)}

      />)}


    </div>
  );
}

export default App;
