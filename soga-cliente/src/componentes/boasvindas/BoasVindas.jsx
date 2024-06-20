import style from "./BoasVindas.module.css";

function BoasVindas() {
  // Aqui é para estado e javascript

  // Aqui no return é onde se coloca a estrutura(componentes, paginas), o html e as classes do css ou até inline style
  return (
    <body className={style.body}>
    <header className={style.header}>
      <h2 className={style.logo}>SOGA</h2>
      <nav className={style.navigation}>
        <a href="#">Termos e Condições</a>
        <a href="#">Grupos</a>
        <a href="#">Sore</a>
        <button className={style.btnEntrar}>Entrar</button>
      </nav>
    </header>
    <div className={style.welcome}>
      <h1>Seja Bem-Vindo</h1>
      <p>Mantenha-se conectado</p>
      <p>connosco</p>
      <button className={style.btnRegistrar}></button>
      <p>Não tem uma conta?</p>
    </div>
    </body>
  );
}

export default BoasVindas;
