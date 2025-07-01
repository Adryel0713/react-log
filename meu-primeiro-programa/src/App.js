import './App.css';
import HelloWorld from "./components/HelloWorld";

function App() {

  const nomeUsuario = "Adryel";
  const nomeMaior = nomeUsuario.toUpperCase();

  const url = "test";
  function soma(s1,s2){
    return s1 + s2;
  }
  return (
    <div className="App"> {/* Ao invés de class, é className */}

      <p>Olá,{nomeUsuario}..</p>
      <p>nome maiusculo: {nomeMaior}</p>
      <p>Tudo bom?</p>
      <p>Soma: {soma(1,2)}</p>
      <p><HelloWorld/> </p>
      <img src={url} alt="Minha imagem"></img>
    </div>
  );
}

export default App;
