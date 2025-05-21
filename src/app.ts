import express from "express";
import {router } from "./routes/rotaTarefas";
import middlewareLog from "./middlewares/middlewareLog";

export const app =  express();

// leitura de json no body
app.use(express.json())

//middleware global
app.use(middlewareLog);

app.get("/", (req: any, res: any)=>{  
  res.send("Servidor Rodando")
});

app.use('/tarefas', router);