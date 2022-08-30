import './Doteiro.css'

const Doteiro = ({gamerTag, heroPool, imagem}) => {
    return(
        <div className='doteiro'>
            <div className='cabecalho'>
                <img src={imagem} alt={gamerTag}/>
            </div>
            <div className='rodape'>
                <h4>{gamerTag}</h4>
                <h5>{heroPool}</h5>
            </div>
        </div>
    )
}

export default Doteiro