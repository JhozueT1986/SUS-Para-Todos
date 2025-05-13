const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("."));

let usuarios = []; // Lista de usuários { nome, senha }

app.post("/cadastro", (req, res) => {
  const { nome, senha } = req.body;

  // Verifica se nome já existe
  const usuarioExistente = usuarios.find((u) => u.nome === nome);
  if (usuarioExistente) {
    return res.status(400).send("Usuário já cadastrado");
  }

  usuarios.push({ nome, senha });
  res.status(200).send("Cadastro realizado com sucesso");
});

app.post("/login", (req, res) => {
  const { nome, senha } = req.body;

  const usuario = usuarios.find((u) => u.nome === nome && u.senha === senha);
  if (usuario) {
    res.status(200).send("Login realizado com sucesso");
  } else {
    res.status(401).send("Nome ou senha inválidos");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
