import Task from "../models/tasks.models";
import {ICreateTask, ITask} from "../interfaces/tasks.interfaces";

export default class TaskRepository {
    private model = Task;

    public async findAll(page: number, limit: number): Promise<ITask[]> {
        return this.model.find().skip((page - 1) * limit).limit(limit);
    }

    public async findById(id: string): Promise<ITask> {
        const task = await this.model.findById(id);

        if (!task) {
            throw new Error('No task with id ' + id);
        } else {
            return task;
        }
    }

    public async create(task: ITask): Promise<ITask> {
        return this.model.create(task);
    }

    public async delete(id: string): Promise<void> {
        await this.model.deleteOne({_id: id});
    }

    public async update(task: Partial<ITask>): Promise<ITask> {
        this.model.updateOne({_id: task._id}, {$set: task});

        return this.findById(task._id);
    }
}