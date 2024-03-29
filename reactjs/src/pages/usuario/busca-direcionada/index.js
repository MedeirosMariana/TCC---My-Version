import { Container } from './styled'
import Cabecalho from '../../../components/cabecalho'


export default function BuscaDirecionada () {
    return (
        <Container>
            <Cabecalho />
            <div className="secondary-container"> 
                <div className="background-sphere"> 
                    <img src="peças.png" alt="" />
                    <div> PEÇAS </div>
                </div>
                <div className="box"> 
                    <img src="/assets/images/principal-box.png" alt="" />
                    <div className="box-text"> 
                        <h1> Cada Um Tem o Anjo Que Merece </h1>
                        <div> Comédia, 80 minutos, 12 anos. </div>
                        <p> <b> Sinopse: </b> 
                            Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                        </p>
                        <button> SAIBA MAIS </button>
                    </div>
                </div>
                <div className="box"> 
                    <img src="/assets/images/principal-box.png" alt="" />
                    <div className="box-text"> 
                        <h1> Cada Um Tem o Anjo Que Merece </h1>
                        <div> Comédia, 80 minutos, 12 anos. </div>
                        <p> <b> Sinopse: </b> 
                            Nesta comédia, o casal, Osvaldo e Quitéria, vive às turras, brigando e se desentendendo a todo momento, por qualquer motivo. Os dois estão nos seus limites e prestes a se separarem quando algo surpreendente acontece. Lá no céu os Deuses decidem que eles merecem uma atenção especial para ajudar a refazer esse amor tão desgastado pelo tempo. Dirigida por Wesley Leal.
                        </p>
                        <button> SAIBA MAIS </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}