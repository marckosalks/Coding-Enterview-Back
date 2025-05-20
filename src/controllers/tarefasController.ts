import { TarefaType } from './../models/model';
import { Request, Response } from "express";

let tarefas : TarefaType[] = [];

// GET
export function getTarefa(req:Request, res:Response ){
  console.log("valor de tarefas: ", tarefas)
  res.json(tarefas);
}

// POST
export function createTarefa(req:Request, res:Response): void{
  
  //como posso criar uma tarefa 
  //quando faço isso estou esperando que esses dados venham da requisição 
  const { titulo,  descricao} =  req.body
  if(!titulo || !descricao){
    res.status(400).json({mensagem: "titulo ou descrição são obrigatórios." })
  }
  
  const novaTarefa: TarefaType = {
    id: Date.now().toString(), 
    titulo, 
    descricao,
    conclusao: false
  }

  tarefas.push(novaTarefa);
  //201 === criação
  res.status(201).json(novaTarefa);
}

// PUT 
export function alterarTarefa(req: Request, res:Response){

}

// DELETE 
export function deletarTarefa(req: Request, res:Response){

}