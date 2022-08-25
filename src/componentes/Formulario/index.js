import Botao from '../Botão'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {

    const função = [
        'Hard Carry',
        'Mid',
        'Offlane',
        'Soft Support',
        'Hard Support'

    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Doteiro do YOLO</h2>
                <CampoTexto obrigatorio={true} label="GamerTAG" placeholder="Digite sua GamerTAG..." />
                <CampoTexto obrigatorio={true} label="Hero Pool" placeholder="Digite sua Hero Pool..." />
                <CampoTexto label="Imagem do Herói Favorito" placeholder="Informe o endereço da imagem..." />
                <ListaSuspensa obrigatorio={true} label="Função" itens={função} />
                <Botao texto='Criar card' />
            </form>
        </section>
    )
}

export default Formulario