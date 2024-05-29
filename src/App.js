import Exemplo from "./componentes/Exemplo/Exemplo";
import Login from "./paginas/login/Login";

function App() {
  // Esse é o componente principal do aplicativo. As paginas,componentes e estrutura principais serem colocadas aqui.
  //Depois vamos entender melhor
  // Aqui é para estado e javascript

  // Aqui no return é onde se coloca a estrutura(componentes, paginas), o html e as classes do css ou até inline style
  return (
    <div>
      <Exemplo />
      <Login />
    </div>
  );
}

export default App;
