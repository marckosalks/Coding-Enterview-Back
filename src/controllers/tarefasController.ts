import { TarefaType } from './../models/model';
import { Request, Response } from "express";

let tarefas: TarefaType[] = [];

let contadorId = 1;

// GET
export function getTarefa(req: Request, res: Response) {
  res.json(tarefas);
}


// POST
export function createTarefa(req: Request, res: Response): void {
  //como posso criar uma tarefa 
  //quando faço isso estou esperando que esses dados venham da requisição 
  const { titulo, descricao } = req.body
  if (!titulo || !descricao) {
    res.status(400).json({ mensagem: "titulo ou descrição são obrigatórios." })
  }

  const novaTarefa: TarefaType = {
    id: contadorId++,
    titulo,
    descricao,
    conclusao: false
  }

  tarefas.push(novaTarefa);
  //201 === criação
  res.status(201).json(novaTarefa);
}

// PUT 
export function alterarTarefa(req: Request, res: Response) {
  const idNumber = Number(req.params.id);
  const { titulo, descricao, conclusao } = req.body;

  const posicaoTarefa = tarefas.findIndex((item: any) => item.id === idNumber);

  if (posicaoTarefa === -1) {
    res.status(404).json({ mensagem: "Tarefa não encontrada" });
  } else {
    tarefas.splice(posicaoTarefa, 1);

    const tarefaAtualizada: TarefaType = {
      id: idNumber,
      titulo,
      descricao,
      conclusao,
    };

    tarefas.push(tarefaAtualizada);

    res.status(200).json({ mensagem: "Tarefa atualizada com sucesso", tarefa: tarefaAtualizada });
  }
}


// DELETE 
export function deletarTarefa(req: Request, res: Response) {
  const idNumber = Number(req.params.id);

  const posicaoTarefa = tarefas.findIndex((item: any) => item.id === idNumber);
  
  if (posicaoTarefa === -1) {
    res.status(404).json({ mensagem: "Tarefa não encontrada" });
  } else {
    tarefas.splice(posicaoTarefa, 1);
    res.status(200).json({ mensagem: "Tarefa atualizada com sucesso" });
  }

}