import {Router} from "express";
import {createTask, deleteTask, getAllTasks, getTaskById, updateTask} from "../controllers/tasks.controller";

const router = Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/', updateTask);

export default router;