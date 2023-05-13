export default function Letras(props) {
    return (
        <div className="rodape">
            <ul className="alfabeto">
                {props.letra.map((item,index)=><li><button className={props.botao[0]} key={item} disabled={props.botao[1]}>{item.toUpperCase()}</button></li>)}
            </ul>
        </div>);
}