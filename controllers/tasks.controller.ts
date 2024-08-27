import {Request, Response} from 'express';
import TaskService from "../services/tasks.service";
import handleError from "../utils/errorHandler";
import {ICreateTask, ITask} from "../interfaces/tasks.interfaces";

const taskService = new TaskService();

async function getAllTasks(req: Request, res: Response) {
    const page = +(req.query.page || 1);
    const limit = +(req.query.limit || 10);

    const tasks = await taskService.getAllTasks(page, limit);

    return res.json(tasks);
}

async function getTaskById(req: Request, res: Response) {
    const id = req.params.id;

    try {
        const task = await taskService.getTaskById(id);
        res.status(201).json(task);
    } catch (err) {
        handleError(res, err);
        return res;
    }
}

async function createTask(req: Request, res: Response) {
    const task: ICreateTask = req.body;

    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
}

async function deleteTask(req: Request, res: Response) {
    const id = req.params.id;
    await taskService.deleteTask(id);
    res.send();
}

async function updateTask(req: Request, res: Response) {
    const task: Partial<ITask> = req.body;

    try {
        const newTask = await taskService.updateTask(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        handleError(res, err);
        return res;
    }
}

export {getAllTasks, getTaskById, createTask, deleteTask, updateTask};