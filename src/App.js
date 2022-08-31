import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Funcao from './componentes/Funções';
import Rodape from './componentes/Rodapé';


function App() {

  const posicoes = [
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

  const addJogador = (jogador) => {
    console.log(jogador)
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />

      <Formulario 
        posicoes={posicoes.map(posicao => posicao.nome)} 
        addJogador={jogador => addJogador(jogador)} 
      />

      {posicoes.map(posicao => <Funcao
        key={posicao.nome}
        nome={posicao.nome}
        corPrimaria={posicao.corPrimaria}
        corSecundaria={posicao.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.funcao === posicao.nome)}

      />)}
      <Rodape/>


    </div>
  );
}

export default App;
