import express from "express";
import {router } from "./routes/rotaTarefas";

export const app =  express();

// leitura de json no body
app.use(express.json())


app.get("/", (req: any, res: any)=>{  
  res.send("Servidor Rodando")
});

app.use('/tarefas', router);