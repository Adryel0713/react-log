import { useState } from 'react';

function Form(){

    function enviar(e){
        e.preventDefault();
        console.log("Enviado! (Formulário)");
        console.log(`Usuário ${name} foi registrado,senha: ${password}`);
    }


    const [name,setName] = useState()
    const [password,setPassword] = useState()

return (
    <div>
        <h2>Preencha o formuláro:</h2>
        <form onSubmit={enviar}>
            <div>
                <label htmlFor="usuario">Name</label> <br/> <br/>
                <input type="text" name="name" id="name" placeholder="Usuário" onChange={(e) => setName(e.target.value)}/> <br/> 
            </div>
            <div>
                <label htmlFor="senha">Password</label> <br/> <br/>
                <input type="password" name="password" id="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/> <br/> 
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>

)


}

export default Form;