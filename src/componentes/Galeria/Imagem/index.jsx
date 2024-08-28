
import styled from "styled-components"

const Container = styled.figure`
    width: ${(props) => (props.$expandida ? '90vh' : '400px')};
    max-width: 100%;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    margin: ${(props) => (props.$expandida ? '0' : '24px 24px 24px 0')};
    figcaption{
        background: #04244F;
        border-radius: ${props => props.$expandida ? '0' : '0 0 20px 20px'};;
        padding: 0 16px;
        margin: 0;
        h3{
            font-weight: 700;
            font-size: 24px;
            margin: 16px 0 0 0;
        }
        footer{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            p{
                font-size: 20px;
            }
            div{
                button{
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
            }

        }
    }
    
`
const Foto = styled.img`
    border-radius: ${props => props.$expandida ? '0' : '20px 20px 0 0'};
    width: 100%;
    object-fit: cover;
`

const Imagem = ({ foto, aoFotoSelecionada, $expandida=false, aoAlternarFavorito}) => {
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"
    return(<Container $expandida={$expandida}>
        <Foto src={foto.path} $expandida={$expandida} id={foto.id} $tagId={foto.tagId}/>
        <figcaption>
            <h3>{foto.titulo}</h3>
            <footer>
                <p>Fonte: {foto.fonte}</p>
                <div>
                    <button onClick={()=>aoAlternarFavorito(foto)}><img src={iconeFavorito}/></button>
                    {$expandida ? '' : <button onClick={()=> aoFotoSelecionada(foto)}><img src="/icones/expandir.png"/></button>}
                </div>
            </footer>
        </figcaption>
    </Container>)
}

export default Imagem