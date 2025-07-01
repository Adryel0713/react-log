/*
function Pessoa(props){

    return(
        <div>
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>
        <p>Altura: {props.altura}</p>
        <p>Idioma: {props.idioma}</p>
        </div>
    )
}
*/

function Pessoa({nome,idade,altura,idioma}){

    return(
        <div>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Altura: {altura}</p>
        <p>Idioma: {idioma}</p>
        </div>
    )
}

export default Pessoa;