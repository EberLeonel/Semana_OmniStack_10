import React, { useEffect, useState } from "react";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

//Componente: bloco isolado de html, css, js, o qual não interfere no restante da aplicação
//Estado: informações mantidas pelo componente (Lembrar: conceito de imutabilidade)
//Propriedade: informações que um componente pai passa para o componente filho

function App() {
  const [github_username, setGithub_username] = useState(" ");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username "
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            ></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            ></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude "
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude "
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/52432328?s=400&v=4"
                alt="Eber Leonel"
              />
              <div className="user-info">
                <strong>Eber Leonel</strong>
                <span>C#, ReactJs</span>
              </div>
            </header>
            <p>
              Estagiário de Desenvolvimento na MaisDados Digital e Advogado nas
              horas vagas.
            </p>
            <a href="https://github.com/EberLeonel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/52432328?s=400&v=4"
                alt="Eber Leonel"
              />
              <div className="user-info">
                <strong>Eber Leonel</strong>
                <span>C#, ReactJs</span>
              </div>
            </header>
            <p>
              Estagiário de Desenvolvimento na MaisDados Digital e Advogado nas
              horas vagas.
            </p>
            <a href="https://github.com/EberLeonel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/52432328?s=400&v=4"
                alt="Eber Leonel"
              />
              <div className="user-info">
                <strong>Eber Leonel</strong>
                <span>C#, ReactJs</span>
              </div>
            </header>
            <p>
              Estagiário de Desenvolvimento na MaisDados Digital e Advogado nas
              horas vagas.
            </p>
            <a href="https://github.com/EberLeonel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/52432328?s=400&v=4"
                alt="Eber Leonel"
              />
              <div className="user-info">
                <strong>Eber Leonel</strong>
                <span>C#, ReactJs</span>
              </div>
            </header>
            <p>
              Estagiário de Desenvolvimento na MaisDados Digital e Advogado nas
              horas vagas.
            </p>
            <a href="https://github.com/EberLeonel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/52432328?s=400&v=4"
                alt="Eber Leonel"
              />
              <div className="user-info">
                <strong>Eber Leonel</strong>
                <span>C#, ReactJs</span>
              </div>
            </header>
            <p>
              Estagiário de Desenvolvimento na MaisDados Digital e Advogado nas
              horas vagas.
            </p>
            <a href="https://github.com/EberLeonel">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/52432328?s=400&v=4"
                alt="Eber Leonel"
              />
              <div className="user-info">
                <strong>Eber Leonel</strong>
                <span>C#, ReactJs</span>
              </div>
            </header>
            <p>
              Estagiário de Desenvolvimento na MaisDados Digital e Advogado nas
              horas vagas.
            </p>
            <a href="https://github.com/EberLeonel">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
