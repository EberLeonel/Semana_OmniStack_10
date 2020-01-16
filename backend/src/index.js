const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:Omnistack@123@cluster0-sbjk5.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes);

//Médodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (identificar um recurso na alteração ou remoção)

//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (não-relacional)

app.listen(1717);
