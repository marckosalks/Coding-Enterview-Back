import { Router } from "express";
import { getTarefa, createTarefa, alterarTarefa, deletarTarefa } from "../controllers/tarefasController";
import middlewareLog from "../middlewares/middlewareLog";

export const router = Router();

// colocar middleware em todas as rotas
router.use(middlewareLog) 

router.get('/', getTarefa);
router.post('/', createTarefa);
router.put('/:id', alterarTarefa);
router.delete('/:id', deletarTarefa);
