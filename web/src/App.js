import React, { useEffect, useState } from "react";
import api from "./services/api.js";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

import DevItem from './componentes/DevItem';
import DevForm from './componentes/DevForm';

//Componente: bloco isolado de html, css, js, o qual não interfere no restante da aplicação
//Estado: informações mantidas pelo componente (Lembrar: conceito de imutabilidade)
//Propriedade: informações que um componente pai passa para o componente filho

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const  response = await api.post('devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
        </aside>
      <main>
        <ul>
          {devs.map(dev => (//parenteses substiui {return()}
          <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
