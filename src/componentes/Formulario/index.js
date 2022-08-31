import Botao from '../Botão'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    const [gamerTag, setGamerTag] = useState('')
    const [heroPool, setHeroPool] = useState('')
    const [imagem, setImagem] = useState('')
    const [funcao, setFuncao] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.addJogador({
            gamerTag,
            heroPool,
            imagem,
            funcao
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Doteiro do YOLO</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="GamerTAG"
                    placeholder="Digite sua GamerTAG..."
                    valor={gamerTag}
                    aoAlterado={valor => setGamerTag(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Hero Pool"
                    placeholder="Digite sua Hero Pool...  (ex: Lion, Lina, IO)"
                    valor={heroPool}
                    aoAlterado={valor => setHeroPool(valor)}
                />
                <CampoTexto
                    label="Imagem do Herói Favorito"
                    placeholder="Informe o endereço da imagem..."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Função"
                    itens={props.posicoes}
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <Botao texto='Criar card' />
            </form>
        </section>
    )
}

export default Formulario