import Titulo from "../../Titulo"
import Fotos from '../../../fotos.json'
import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    img{
        max-width: 212px;
        border-radius: 20px;
    }
`
const StyledButton = styled.button`
 background-color: transparent;
 padding: 20px;
 margin: auto auto 24px auto;
 border: 2px solid #C98CF1;
 width: 100%;
 border-radius: 20px;
 font-weight: 700;
 color: #FFFFFF;
 font-size: 24px;
 &:hover{
    border-color: #7B78E5;
    opacity: 0.7;
    cursor: pointer;
 }
`
const Populares = () => {
    return <>
        <Container>
            <Titulo $alinhamento = "center">Populares</Titulo>
            {Fotos.map(foto => <img src={foto.path} key={foto.id}/>)}
            <StyledButton>Ver Mais</StyledButton>
        </Container>
    </>
}

export default Populares