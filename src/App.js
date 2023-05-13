import React from "react";
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"
import forca from "./assets/forca0.png"
import cabeca from "./assets/forca1.png"
import corpo from "./assets/forca2.png"
import braco1 from "./assets/forca3.png"
import braco2 from "./assets/forca4.png"
import perna1 from "./assets/forca5.png"
import perna2 from "./assets/forca6.png"


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const erros_corpo = [{erro:0, link:forca },
    {erro:1,link:cabeca},
    {erro:2,link:corpo},
    {erro:3,link:braco1},
    {erro:4,link:braco2},
    {erro:5,link:perna1},
    {erro:6,link:perna2}
]

export default function App() {
    let [desabilitado, setDesabilitado] = React.useState(['desabi',true]);
    return (
        <div className="pagina">
            <Jogo palavra = {palavras} botao={desabilitado} set = {setDesabilitado} imagem={erros_corpo}/>
            <Letras letra={alfabeto} botao={desabilitado} />
        </div>
    )
}