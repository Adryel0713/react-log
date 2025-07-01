function Evento(){

    function clicar(){
        console.log("Você clicou aqui");
    }
    return(
        <div>
            <p>Clique no botão:</p>
            <button onClick={clicar}>clique aqui</button>
        </div>
    )
}
export default Evento;