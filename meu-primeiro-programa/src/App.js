import './App.css';
// import HelloWorld from "./components/HelloWorld";
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frases from "./components/Frases"

function App() {

  
  return (
    <div className="App"> {/* Ao invés de class, é className */}
        <p><SayMyName nome="Clauber"/></p>
        <p><Pessoa nome="Clauber Adryel" idade="22" altura="1.69" idioma="Português"/></p>
        <p><Frases/></p>
    </div>
  );
}

export default App;
