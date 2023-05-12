export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let letras = alfabeto.map(letra=><button key={letra} disabled>{letra.toUpperCase()}</button>)//<li className="letra"></li> <ul></ul>
    return (
        <div className="rodape">
            <div className="alfabeto">
                {letras}
            </div>
        </div>);
}