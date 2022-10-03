import styled from "styled-components"
import play from "../img/seta_play.png"
import setaVirar from "../img/seta_virar.png"

export default function Cards(props) {

    const { card, index, perguntas, verPergunta, setVerpergunta, verResposta, setVerResposta, abrirPergunta, abrirResposta, resetEstado, arrFeitos, setArrFeitos } = props

    


    return (
        <>
            {verPergunta.includes(index) ?
                <>
                {verResposta.includes(index)?
                <PerguntaAberta>
                    <p>{card.resposta}</p>
                    <containerBotoes>
                        <button color="red" index={index} onClick={()=>resetEstado(index)}>Não lembrei</button>
                        <button color="yellow" index={index} onClick={()=>resetEstado(index)}>Quase não lembrei</button>
                        <button color="green" index={index} onClick={()=>resetEstado(index)}>Zap!</button>
                    </containerBotoes>
                </PerguntaAberta>
                :
                <PerguntaAberta index={index} >
                    <p>{card.pergunta}</p>
                    <img src={setaVirar} alt="setinha retorno" onClick={()=> abrirResposta(index)}/>
                </PerguntaAberta>
                }
                </>
                :
                <PerguntaFechada index={index}>
                    <p>Pergunta {index + 1}</p>
                    <img src={play} onClick={() => abrirPergunta(index)} alt="play" />
                </PerguntaFechada>
            }
        </>
    )
}



const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
      }

`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    containerBotoes{
        display:flex;
        justify-content: space between;
        button {
            width: 90px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #FFFFFF;
            background: red;
            border-radius: 5px;
            border: 1px solid blue;
            padding:5px;
        }
    }
`