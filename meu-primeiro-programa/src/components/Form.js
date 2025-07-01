function Form(){

    function enviar(e){
        e.preventDefault();
        console.log("Enviado! (Formulário)");
    }
return (
    <div>

        <h2>Preencha o formuláro:</h2>
        <form onSubmit={enviar}>
            <input type="text" name="usuario" placeholder="Usuário"/> <br/>
            <button type="submit">Enviar</button>
        </form>
    </div>

)


}

export default Form;