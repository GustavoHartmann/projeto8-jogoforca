import React from "react"
import alfabeto from "../alfabeto";
import palavras from "../palavras"

export default function App() {
    const [jogoIniciado, setJogoIniciado] = React.useState(false);
    const [numeroErros, setNumeroErros] = React.useState(0);
    const [palavraSorteada, setPalavraSorteada] = React.useState("");
    const [arrayPalavra, setArrayPalavra] = React.useState([]);
    const [arrayAlfabeto, setArrayAlfabeto] = React.useState(alfabeto);

    function Tecla(props) {
        return (
            <button className="tecla" disabled={props.booleano} onClick={clicarTecla}>{props.letra.toUpperCase()}</button>
        )

    }

    function comecarJogo() {
        document.querySelector(".palavra-escolhida").classList.remove("errado")
        document.querySelector(".palavra-escolhida").classList.remove("certo")
        setNumeroErros(0)
        setJogoIniciado(true);
        alfabeto.map((obj) => obj.booleano = false)
        sortearPalavra();
    }

    function sortearPalavra() {
        const numeroAleatorio = Math.floor(Math.random() * palavras.length)
        setPalavraSorteada(palavras[numeroAleatorio])
        console.log(palavras[numeroAleatorio]);
        setArrayPalavra(Array(palavras[numeroAleatorio].length).fill("_"))
    }

    function clicarTecla(evento) {
        const tecla = evento.target.innerText.toLowerCase();
        palavraSorteada.includes(tecla) ? reenderizarLetra(tecla) : aumentarErros()
        setArrayAlfabeto(alfabeto.map((obj) => obj.letra === evento.target.innerText.toLowerCase() || obj.booleano === true ? obj.booleano = true : obj.booleano = false))
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
        document.querySelector(".palavra-escolhida").classList.add("certo")
    }

    function aumentarErros() {
        const qtdErros = numeroErros + 1
        setNumeroErros(qtdErros)
        if (qtdErros === 6) {
            finalizarJogo();
        }
    }

    function finalizarJogo() {
        resetarEstados()
        document.querySelector(".palavra-escolhida").classList.add("errado")
    }

    function resetarEstados() {
        setArrayPalavra(palavraSorteada)
        alfabeto.map((obj) => obj.booleano = true)
        setJogoIniciado(false);
    }

    return (
        <div className="conteudo">
            <div className="conteudo-jogo">
                <img src={`./assets/img/forca${numeroErros}.png`} alt="imagem da forca" />
                <div className="info-jogo">
                    <button className="botao-escolher-palvra" onClick={comecarJogo}>Escolher palavra</button>
                    <div className="palavra-escolhida">
                        <h1>{arrayPalavra}</h1>
                    </div>
                </div>
            </div>
            <div className="interface-jogo">
                <div className="teclado">
                    {alfabeto.map((v, indexValor) => <Tecla letra={v.letra} key={indexValor} booleano={v.booleano} />)}
                </div>
                <div className="chute">
                    <h2>Já sei a palavra!</h2>
                    <input type="text" disabled={!jogoIniciado} />
                    <button className="botao-chutar">Chutar</button>
                </div>
            </div>
        </div>
    )
}