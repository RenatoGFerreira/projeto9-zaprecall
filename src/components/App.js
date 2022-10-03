import GlobalStyle from "../css/GlobalStyle"
import styled from "styled-components"
import perguntas from "./perguntas"
import Cabecalho from "./Cabecalho"
import Cards from "./Cards"
import Rodape from "./Rodape"
import React, { useState } from "react"


export default function App() {
    const [verPergunta, setVerpergunta] = useState([])
    const [verResposta, setVerResposta] = useState([])

    const [naoLembrei, setNaoLembrei] = useState([])

    const [arrFeitos, setArrFeitos] = useState([])


    function abrirPergunta(i){
        setVerpergunta([])
        setVerpergunta([i])
    }

    function abrirResposta(i){
        setVerResposta([])
        setVerResposta([i])
    }

    function resetEstado(i){
        setNaoLembrei([])
        setNaoLembrei([i])
    }

    return (
        <ScreenContainer>
            <GlobalStyle/>
            <Cabecalho/>
            {perguntas.map((card, index) => 
            <Cards 
                card={card} 
                index={index} 
                perguntas={perguntas} 
                key={index} 

                verPergunta={verPergunta} 
                setVerpergunta={setVerpergunta} 

                verResposta={verResposta}
                setVerResposta={setVerResposta}

                abrirPergunta={abrirPergunta}
                abrirResposta={abrirResposta}
                resetEstado={resetEstado}

                naoLembrei={naoLembrei}
                setNaoLembrei={setNaoLembrei}

                arrFeitos={arrFeitos}
                setArrFeitos={setArrFeitos}
            />)}
            <Rodape/>
        </ScreenContainer>
    )
}


const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;