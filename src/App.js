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

let global = [true]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const erros_corpo = [{ link: forca },
{ link: cabeca },
{ link: corpo },
{ link: braco1 },
{ link: braco2 },
{ link: perna1 },
{ link: perna2 }
]
let word;
let list_word = []
let underlines = []

export default function App() {
    // let [desabilitado, setDesabilitado] = React.useState(['desabi', true]);
    let [classe,setClasse] = React.useState('desabi');
    let [desabilitado, setDesabilitado] = React.useState(true);
    let [letra, setLetra] = React.useState(alfabeto.map((item,index)=>[item.toUpperCase(),index]));
    // let [desabilitado, setDesabilitado] = React.useState(alfabeto.map((item,index)=>[item.toUpperCase(),'desabi', true,index]))
    let [palavra_sorteada, setPalavra_sorteada] = React.useState(['palavra some', word, [list_word, underlines]]);
    let [erros, setErros] = React.useState([3]);
    let [imagem_forca, setImagem_forca] = React.useState(erros_corpo[erros].link)


    // console.log(palavra_sorteada)
    return (
        <div className="pagina">
            <Jogo classe={classe} setClasse={setClasse} desabilitado={desabilitado} setDesabilitado={setDesabilitado} letra={letra} setLetra={setLetra} erros={erros} setErros={setErros} palavra={palavras} imagem_forca={imagem_forca} setImagem_forca ={setImagem_forca} palavra_sorteada={palavra_sorteada} setPalavra_sorteada={setPalavra_sorteada} global={global}/>
            <Letras classe={classe} setClasse={setClasse} desabilitado={desabilitado} setDesabilitado={setDesabilitado} letra={letra} setLetra={setLetra} erros={erros} setErros={setErros} palavra={palavras} imagem_forca={imagem_forca} setImagem_forca ={setImagem_forca} palavra_sorteada={palavra_sorteada} setPalavra_sorteada={setPalavra_sorteada} global={global}/>
        </div>
    )
}
