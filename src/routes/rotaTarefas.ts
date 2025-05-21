import { Router } from "express";
import { getTarefa, createTarefa, alterarTarefa, deletarTarefa } from "../controllers/tarefasController";

export const router = Router();

router.get('/', getTarefa);
router.post('/', createTarefa);
router.put('/:id', alterarTarefa);
router.put('/:id', deletarTarefa);
