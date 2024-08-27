import TaskRepository from "../repository/tasks.repository";
import {ICreateTask, ITask} from "../interfaces/tasks.interfaces";

export default class TaskService {
    private taskRepository = new TaskRepository();

    public async getAllTasks(page: number, limit: number) {
        return this.taskRepository.findAll(page, limit);
    }

    public async getTaskById(id: string) {
        return this.taskRepository.findById(id);
    }

    public async createTask(task: ICreateTask): Promise<ITask> {
        const newTask = {
            ...task,
            isCompleted: false,
        }

        return this.taskRepository.create(newTask);
    }
    
    public async deleteTask(id: string): Promise<void> {
        await this.taskRepository.delete(id);
    }
    
    public async updateTask(task: Partial<ITask>): Promise<ITask> {
        return this.taskRepository.update(task);
    }
}