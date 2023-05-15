import React from "react";
// import Letras from "./Letras";


export default function Jogo(props) {
    
    function sorteia() {
        let num_ale = Math.floor(Math.random() * (props.palavra.length - 0 + 1)) + 0;
        return props.palavra[num_ale]
    }
    function habilita_letra() {
        props.palavra_sorteada[1] = ""
        props.palavra_sorteada[2][0] = []
        props.palavra_sorteada[2][1] = []
        props.palavra_sorteada[1] = sorteia()
        props.palavra_sorteada[0] = "palavra some"


        for (let i = 0; i < props.palavra_sorteada[1].length; i++) {
            props.palavra_sorteada[2][0].push(props.palavra_sorteada[1][i])
        }
        props.palavra_sorteada[2][1] = props.palavra_sorteada[2][0].map(item => item = '_ ')
        props.palavra_sorteada[0] = "palavra"

        props.setPalavra_sorteada([props.palavra_sorteada[0], props.palavra_sorteada[1], [props.palavra_sorteada[2][0], props.palavra_sorteada[2][1]]])
        

        props.setDesabilitado(false)
        props.setClasse('habi')
        // props

        // if (erros !== 0) {
        //     erros = 0
        //     setImagem_erro(props.imagem[erros].link)
        // }
    }

    return (
        <div className="menu">
            <div className="forca"><img src={props.imagem_forca} alt="Imagem forca" data-test="game-image" /></div>
            <div className="acao">
                <button onClick={habilita_letra} data-test="choose-word" >Escolher palavra</button>
                <div className={props.palavra_sorteada[0]} data-test="word">{props.palavra_sorteada[2][1]}</div>
            </div>
        </div>
    )
}
