import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = () => {
    return (
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o card do Doteiro do YOLO</h2>
            <CampoTexto label="GamerTAG" placeholder="Digite sua GamerTAG..." />
            <CampoTexto label="Posição In-Game" placeholder="Digite sua Posição In-Game..." />
            <CampoTexto label="Imagem do Herói Favorito" placeholder="Informe o endereço da imagem..." />
        </form>
    </section>
    )
}

export default Formulario