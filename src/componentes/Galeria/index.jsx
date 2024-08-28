import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`
const Fotos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoAlterarTag }) => {
    
    
    return <>
            <Tags aoAlterarTag={aoAlterarTag}/>
        <GaleriaContainer>
            <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
                <Fotos>{fotos.map(foto=>
                    <Imagem foto={foto} aoFotoSelecionada={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} key={foto.id}/>)}
                </Fotos>
            </SecaoFluida>
            <Populares />
        </GaleriaContainer>
    </>
}

export default Galeria