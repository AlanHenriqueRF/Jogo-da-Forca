import Letter from './Letter'

export default function Letras(props) {
    // function clicouletra(i) {
    //     let nova_array = []
    //     if (i===props.botao[3]){
    //         nova_array = [props.botao[0],'desabi',true,props.botao[3]]
            
    //     }
    //     else{
    //         nova_array = [props.botao]
    //     }
    //     props.set(nova_array)
    // }
    return (
        <div className="rodape">
            <ul className="alfabeto">
                {props.letra.map((item,index) => <Letter letra={item[0]} classe={props.classe} setClasse={props.setClasse} desabilitado={props.desabilitado} setDesabilitado={props.setDesabilitado}/>)}
                {/* {props.botao.map((item,index)=><li><button className={item[1]} onClick={(index)=>props.set}  key={index} disabled={item[0]}>{item[0]}</button></li>)} */}
            </ul>
        </div>);
}
