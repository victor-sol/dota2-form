import Doteiro from '../Doteiro'
import './Funcao.css'

const Funcao = (props) => {
    return (
        props.jogadores.length > 0 && <section className='funcao'style={{ backgroundColor: props.corSecundaria }}> 
            <h3 style={ { borderColor: props.corPrimaria } }>{props.nome}</h3>
            <div className='jogadores'>

                {props.jogadores.map( jogador => <Doteiro corDeFundo={props.corPrimaria}

                {props.jogadores.map( jogador => <Doteiro 

                    key={jogador.gamerTag}
                    gamerTag={jogador.gamerTag} 
                    heroPool={jogador.heroPool}
                    imagem={jogador.imagem}
                    />)}
            </div>
        </section>
    )
}
export default Funcao