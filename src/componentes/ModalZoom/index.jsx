import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { BsFillXCircleFill as Icone} from "react-icons/bs";
import { useEffect } from "react";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 10%;
    background: transparent;
    border: none;
    display: flex;
    width: 90%;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    form{
        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            margin: 0;
        }
    }
`

const ModalZoom = ({ foto, funcaoFechar, aoAlternarFavorito }) => {

    useEffect(() => {
        if (foto) {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola a página até o topo com animação suave
        }
    }, [foto]); // O useEffect será executado toda vez que `foto` mudar

    function fechar(){
        funcaoFechar('')
    }

    return(
        <>
            {/*Para transformar o objeto em um booleano, ele será negado duas vezes*/}
           {foto && 
                <>
                    <Overlay />
                    <DialogEstilizado open={!!foto}>
                        <Imagem foto={foto} $expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                        <form method="dialog">
                            <button onClick={fechar}><Icone color="white" size={40}/></button>
                        </form>
                    </DialogEstilizado>
                </>
            }
        
        </>
    ) 
}

export default ModalZoom;