// REST - > CONJUNTO DE REGRAS PRA CRIAR UMA API
// GET - > BUSCAR DADOS
// POST - > CRIAR DADOS
// PUT - > ATUALIZAR DADOS
// DELETE - > DELETAR DADOSf
//  COMANDO INICIAL
// npm init -y
// npm install express

import express from "express";

const app = express();
const PORT : number = 3000;

app.listen(PORT, ()=>{
  console.log("Servidor está rodando.")
});