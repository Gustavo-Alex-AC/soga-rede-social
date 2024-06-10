function Registrar() {
  return 
  
<div className={style.main}>


<div className={style.conteinera}>
<div className={style.conteiner}>
  <form className={style.registerForm}>
    <h1>Registra-te</h1>

    <input type="text" id="username" name="username" placeholder="Nome de usuário" required /><br />

    <input type="email" id="email" name="email" placeholder="E-mail ou número de telefone" /><br />

    <input type="password" id="password" name="password" placeholder="criar senha" />
    <button type="submit" id="botao">Registrar</button>
  </form>
</div>

<div className={style.login}>
  <form className={style.loginForm}>
    <h1>Seja <br />  Bem-vindo. </h1>

    <h3>Acesse sua conta</h3>

    <div className={style.btn}>
      <label htmlFor="botao">Já tem uma conta?</label>
      <button type="submit" id="bota">Entrar</button>
    </div>
  </form>
</div>
</div>

</div>  



}

export default Registrar;
