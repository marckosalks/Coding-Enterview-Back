import { TarefaType } from './../models/model';
import { Request, Response } from "express";

let tarefas : TarefaType[] = [];

// GET
export function getTarefa(req:Request, res:Response ) {
  return res.json(tarefas);
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
export function alterarTarefa(req: Request, res:Response) {

  const { id } = req.params;
  const {  titulo, descricao,  conclusao } = req.body;
  
  const posisaoTarefa = Number(tarefas.findIndex( (item: any) => item.id === id))


  tarefas.splice(posisaoTarefa,1)

  const tarefaAtualizada : TarefaType=  {
    id, 
    titulo,
    descricao,
    conclusao, 
  }


  tarefas.push(tarefaAtualizada)

  res.status(404).json({mensagem: "Erro, posição não encontrada ", posisaoTarefa });

  res.status(200).json({mensagem: "valor de posição 200", posisaoTarefa });

}

// DELETE 
export function deletarTarefa(req: Request, res:Response){
   const { id } = req.params;

  const posisaoTarefa = Number(tarefas.findIndex( (item: any) => item.id === id))


  tarefas.splice(posisaoTarefa,1)


  res.status(404).json({mensagem: "Não foi possivel deletar clientes.", posisaoTarefa });

  res.status(200).json({mensagem: "Clientes deletados,", posisaoTarefa });


}