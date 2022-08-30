import Doteiro from '../Doteiro'
import './Funcao.css'

const Funcao = (props) => {
    return (
        <section className='funcao'style={{ backgroundColor: props.corSecundaria }}> 
            <h3 style={ { borderColor: props.corPrimaria } }>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Doteiro 
                    gamerTag={jogador.gamerTag} 
                    heroPool={jogador.heroPool}
                    imagem={jogador.imagem}
                    />)}
            </div>
        </section>
    )
}
export default Funcao