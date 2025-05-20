import express from "express";
// import rotaTarefas from './routes/rotaTarefas'

export const app =  express();

app.get("/", (req: any, res: any)=>{  
  res.send("Servidor Rodando")
});

// app.use(express.json());

// app.use('/tarefas', rotaTarefas);