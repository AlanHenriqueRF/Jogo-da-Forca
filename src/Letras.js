export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // let letras = alfabeto.map(letra=><button className="desabi" key={letra} disabled>{letra.toUpperCase()}</button>)
    return (
        <div className="rodape">
            <ul className="alfabeto">
                {alfabeto.map(letra=><li><button className="desabi" key={letra} disabled>{letra.toUpperCase()}</button></li>)}
            </ul>
        </div>);
}