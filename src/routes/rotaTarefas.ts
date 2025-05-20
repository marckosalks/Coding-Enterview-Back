import { Router } from "express";
import { createTarefa, getTarefa } from "../controllers/tarefasController";

const router =  Router();

router.get('/', getTarefa);
router.post('/', createTarefa);