import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  function verificarLogin() {
    if (usuario === "Admin" && senha === "Admin") {
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos");
    }
  }

  return (
    <div className="container">
      {logado ? (
        <h1>Bem-vindo</h1>
      ) : (
        <div className="box">
          <h1>Login</h1>

          <input
            placeholder="Usuário"
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />

          <button onClick={verificarLogin}>Entrar</button>
        </div>
      )}
    </div>
  );
}

export default App;