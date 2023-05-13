import React from "react";
import Letras from "./Letras";
let erros = 0
let word;

export default function Jogo(props) {
    let [imagem_forca, setImagem_erro] = React.useState(props.imagem[erros].link)
    function sorteia(){
        let num_ale = Math.floor(Math.random()*(props.palavra.length-0+1))+0;
        return props.palavra[num_ale]
    }
    function habilita_letra() {
        if (props.botao[0] === 'desabi') {
            props.botao[0] = 'habi';
            props.botao[1] = false;
            props.set(<Letras />)}
        
        if (erros !== 0) {
            erros = 0
            setImagem_erro(props.imagem[erros].link)}

        word = sorteia()
        console.log(word)
    }
    
    return (
        <div className="menu">
            <div className="forca"><img src={imagem_forca} alt="Imagem forca" /></div>
            <div className="acao">
                <button onClick={habilita_letra} >Escolher palavra</button>
                <div className="palavra">_ua _e _ _e _a</div>
            </div>
        </div>
    )
}