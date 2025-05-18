// REST - > CONJUNTO DE REGRAS PRA CRIAR UMA API
// GET - > BUSCAR DADOS
// POST - > CRIAR DADOS
// PUT - > ATUALIZAR DADOS
// DELETE - > DELETAR DADOSf
//  COMANDOs INICIAIS:
// npm init -y
// npm install express
// npm install --save-dev typescript @types/node @types/express


import express from "express";

const app = express();
const PORT : number = 3000;

app.listen(PORT, ()=> {
  console.log(`Servidor está rodando na porta ${PORT}`)
});