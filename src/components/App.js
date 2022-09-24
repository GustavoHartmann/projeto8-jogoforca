import React from "react"
import alfabeto from "../alfabeto";
import palavras from "../palavras"

export default function App() {
    const [jogoIniciado, setJogoIniciado] = React.useState(false);
    const [numeroErros, setNumeroErros] = React.useState(0);
    const numeroMaxErros = 6;
    const [palavraSorteada, setPalavraSorteada] = React.useState("");
    const [arrayPalavra, setArrayPalavra] = React.useState([]);
    const [arrayBooleano, setArrayBooleano] = React.useState(alfabeto);
    const [corPalavra, setCorPalavra] = React.useState("");
    const [valorInput, setValorInput] = React.useState("");


    function Tecla(props) {
        return (
            <button data-identifier="letter" className="tecla" disabled={props.booleano} onClick={clicarTecla}>{props.letra.toUpperCase()}</button>
        )
    }

    function comecarJogo() {
        setCorPalavra("");
        setNumeroErros(0);
        setJogoIniciado(true);
        alfabeto.map((obj) => obj.booleano = false)
        sortearPalavra();
    }

    function sortearPalavra() {
        const numeroAleatorio = Math.floor(Math.random() * palavras.length)
        setPalavraSorteada(palavras[numeroAleatorio]);
        console.log(palavras[numeroAleatorio]);
        setArrayPalavra(Array(palavras[numeroAleatorio].length).fill("_"))
    }

    function clicarTecla(evento) {
        const tecla = evento.target.innerText.toLowerCase();
        palavraSorteada.includes(tecla) ? reenderizarLetra(tecla) : aumentarErros()
        setArrayBooleano(alfabeto.map((obj) => obj.letra === evento.target.innerText.toLowerCase() || obj.booleano === true ? obj.booleano = true : obj.booleano = false))
    }

    function reenderizarLetra(tecla) {
        const arrayPalavraSorteada = palavraSorteada.split("")
        arrayPalavraSorteada.map((l, indexLetra) => l === tecla ? arrayPalavra.splice(indexLetra, 1, l) : console.log("batata"))
        if (!arrayPalavra.includes("_")) {
            ganharJogo();
        }
    }

    function ganharJogo() {
        resetarEstados();
        setCorPalavra("verde");
    }

    function aumentarErros() {
        const qtdErros = numeroErros + 1
        setNumeroErros(qtdErros);
        if (qtdErros === numeroMaxErros) {
            perderJogo();
        }
    }

    function perderJogo() {
        resetarEstados();
        setCorPalavra("vermelho");
    }

    function resetarEstados() {
        setArrayPalavra(palavraSorteada);
        alfabeto.map((obj) => obj.booleano = true)
        setJogoIniciado(false);
    }

    function chutarPalavra() {
        setNumeroErros(numeroMaxErros);
        valorInput === palavraSorteada ? ganharJogo() : perderJogo()
        setValorInput("");
    }

    return (
        <div className="conteudo">
            <div className="conteudo-jogo">
                <img data-identifier="game-image" src={`./assets/img/forca${numeroErros}.png`} alt="imagem da forca" />
                <div className="info-jogo">
                    <button data-identifier="choose-word" className="botao-escolher-palvra" onClick={comecarJogo}>Escolher palavra</button>
                    <div className="palavra-escolhida">
                        <h1 data-identifier="word" className={corPalavra}>{arrayPalavra}</h1>
                    </div>
                </div>
            </div>
            <div className="interface-jogo">
                <div className="teclado">
                    {alfabeto.map((v, indexValor) => <Tecla letra={v.letra} key={indexValor} booleano={v.booleano} />)}
                </div>
                <div className="chute">
                    <h2>Já sei a palavra!</h2>
                    <input data-identifier="type-guess" type="text" disabled={!jogoIniciado} value={valorInput} onChange={(e) => setValorInput(e.target.value)}/>
                    <button data-identifier="guess-button" className="botao-chutar" disabled={!jogoIniciado} onClick={chutarPalavra}>Chutar</button>
                </div>
            </div>
        </div>
    )
}