import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"


const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (<>
         <StyledHeader>
            <img alt="Logo escrito SpaceApp " src="/assets/logo.png"/>
            <CampoTexto />
        </StyledHeader>
    </> 
    )
}
export default Cabecalho