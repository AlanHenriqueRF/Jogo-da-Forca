import Letter from './Letter'

export default function Letras(props) {
    return (
        <div className="rodape">
            <ul className="alfabeto">
                {props.letra.map((item,index) => <Letter letra={item[0]} classe={props.classe} setClasse={props.setClasse} desabilitado={props.desabilitado} setDesabilitado={props.setDesabilitado} setLetra={props.setLetra} erros={props.erros} setErros={props.setErros} palavra={props.palavras} imagem_forca={props.imagem_forca} setImagem_forca ={props.setImagem_forca} palavra_sorteada={props.palavra_sorteada} setPalavra_sorteada={props.setPalavra_sorteada} global={props.global}/>)}
            </ul>
        </div>);
}
