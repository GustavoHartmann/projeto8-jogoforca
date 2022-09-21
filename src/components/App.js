export default function App() {
    return (
        <div className="conteudo">
            <div className="conteudo-jogo">
                <img src="./assets/img/forca0.png" alt="imagem da forca" />
                <div className="info-jogo">
                    <button className="botao-escolher-palvra">Escolher palavra</button>
                    <div className="palavra-escolhida">
                        <h1>________</h1>
                    </div>
                </div>
            </div>
            <div className="interface-jogo">
                <div className="teclado">
                    <div className="tecla">A</div>
                    <div className="tecla">B</div>
                    <div className="tecla">C</div>
                    <div className="tecla">D</div>
                    <div className="tecla">E</div>
                    <div className="tecla">F</div>
                    <div className="tecla">G</div>
                    <div className="tecla">H</div>
                    <div className="tecla">I</div>
                    <div className="tecla">J</div>
                    <div className="tecla">K</div>
                    <div className="tecla">L</div>
                    <div className="tecla">M</div>
                    <div className="tecla">N</div>
                    <div className="tecla">O</div>
                    <div className="tecla">P</div>
                    <div className="tecla">Q</div>
                    <div className="tecla">R</div>
                    <div className="tecla">S</div>
                    <div className="tecla">T</div>
                    <div className="tecla">U</div>
                    <div className="tecla">V</div>
                    <div className="tecla">W</div>
                    <div className="tecla">X</div>
                    <div className="tecla">Y</div>
                    <div className="tecla">Z</div>
                </div>
                <div className="chute">
                    <h2>Já sei a palavra!</h2>
                    <input type="text" />
                    <button className="botao-chutar">Chutar</button>
                </div>
            </div>
        </div>
    )
}