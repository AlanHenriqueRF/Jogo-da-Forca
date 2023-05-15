import React from "react";

let letra_clicada = ''
let indetifica_pos;

export default function Letter(props) {
    let [apenas_classe, setApenas_classe] = React.useState('habi')
    let [apenas_disa, setApenas_disa] = React.useState(false)

    function clicouletra() {
        letra_clicada = props.letra[0].toLowerCase()
        setApenas_classe('desabi')
        setApenas_disa(true)
        verifica_letra()
    }

    function verifica_letra() {
        while (props.palavra_sorteada[2][0].includes(letra_clicada)) {
            indetifica_pos = props.palavra_sorteada[2][0].indexOf(letra_clicada);
            props.palavra_sorteada[2][1] = props.palavra_sorteada[2][1].map((item, index) => { if (index === indetifica_pos) { return letra_clicada } else { return item } })
            props.palavra_sorteada[2][0][indetifica_pos] = '_'
        }
        console.log(indetifica_pos)
        if (indetifica_pos !== -1) {
            props.setPalavra_sorteada([props.palavra_sorteada[0], props.palavra_sorteada[1], [props.palavra_sorteada[2][0],props.palavra_sorteada[2][1]]])
        }
    }

    console.log(props.palavra_sorteada, letra_clicada)
    if (props.global[0] === true) {
        return (
            <li>
                <button onClick={clicouletra} data-test="letter" className={props.classe} disabled={props.desabilitado} >
                    {props.letra}
                </button>
            </li>
        );
    }
    else {
        return (
            <li>
                <button onClick={clicouletra} data-test="letter" className={apenas_classe} disabled={apenas_disa} >
                    {props.letra}
                </button>
            </li>
        )
    }
}

