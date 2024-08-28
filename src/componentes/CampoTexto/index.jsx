import styled from "styled-components"
import lupa from "./lupa.png"

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`

const StyledInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    @media (max-width: 775px){
        width: 400px;
    }
`
const StyledImg = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = (props) => {
    return(<StyledContainer>
            <StyledInput placeholder="O que você procura?" />
            <StyledImg src={lupa} alt="Ícone de lupa" />
        </StyledContainer>
    )
}
export default CampoTexto


