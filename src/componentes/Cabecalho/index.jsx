import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"


const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
        cursor: pointer;
    }
    @media(max-width: 775px) {
        padding: 40px;
    }
`

const Cabecalho = ({aoPesquisar}) => {
    const pesquisaVerificada = (value) => {
        // Verifique se deseja disparar a pesquisa apenas em Enter ou Blur
     
        aoPesquisar(value);
        console.log(value)
    
      }
    return (<>
         <StyledHeader>
            <img alt="Logo escrito SpaceApp " src="/assets/logo.png"/>
            <CampoTexto aoAlterar={pesquisaVerificada}/>
        </StyledHeader>
    </> 
    )
}
export default Cabecalho