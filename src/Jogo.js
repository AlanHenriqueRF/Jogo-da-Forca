import forca from "./assets/forca0.png"
// import cabeca from "./assets/forca1.png"
// import corpo from "./assets/forca2.png"
// import braco1 from "./assets/forca3.png"
// import braco2 from "./assets/forca4.png"
// import perna1 from "./assets/forca5.png"
// import perna2 from "./assets/forca6.png"

export default function Jogo() {
    return (
        <div className="menu">
            <div className="forca"><img src={forca} alt="Imagem forca" /></div>
            <div className="acao">
                <button>Escolher palavra</button>
                <div className="palavra">_ua _e _ _e _a</div>
            </div>
        </div>
    )
}