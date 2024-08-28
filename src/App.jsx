import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import { useEffect } from "react";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 24px auto auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
`

const App= () =>{
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [tagSelecionada, setTagSelecionada] = useState(0)

  const aoAlternarFavorito = (foto) => {
    setFotosGaleria(fotosGaleria =>
      fotosGaleria.map(fotoDaGaleria => 
        fotoDaGaleria.id === foto.id 
          ? { ...fotoDaGaleria, favorita: !fotoDaGaleria.favorita }
          : fotoDaGaleria
      )
    );
  
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }
  };
  
  const aoAlterarTag = (id) => {
    setTagSelecionada(id)
  }
  
  useEffect(() => {
    if (tagSelecionada !== 0) {
      setFotosGaleria(fotos.filter(foto => foto.tagId === tagSelecionada));
    } else {
      setFotosGaleria(fotos);
    }
  }, [tagSelecionada])

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={"/assets/banner.png"}/>
            <Galeria fotos={fotosGaleria} aoFotoSelecionada={setFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} aoAlterarTag={aoAlterarTag} setFotosGaleria={setFotosGaleria} tagSelecionada={tagSelecionada}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} funcaoFechar={setFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito}/>
    </FundoGradiente>
  )
}

export default App;
