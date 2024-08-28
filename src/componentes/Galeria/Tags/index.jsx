import styled from "styled-components"
import tags from "./tags.json"


const Paragrafo = styled.p`
    color: #D9D9D9;
    font-size: 24px;
`
const BotaoTag = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    cursor: pointer;
    color: #FFFFFF;
    font-size: 24px;
    border:  2px solid transparent;
    margin: 15px;
    border-radius: 10px;
    padding: 12px;
    transition: background-color 0.3s ease;
    &:hover {
      border-color: #C98CF1;
    }
`
const ContainerTags = styled.div`
    display: flex;  
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`

const Tags = ({ aoAlterarTag }) => {
    
    return <>
        <ContainerTags>
            <Paragrafo>Busque por tags:</Paragrafo>
            {tags.map(tag => <BotaoTag key={tag.id} onClick={()=>aoAlterarTag(tag.id)}>{tag.titulo}</BotaoTag>)}
        </ContainerTags>
    </>
}

export default Tags