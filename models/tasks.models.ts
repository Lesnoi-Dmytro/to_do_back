import {model, Schema} from "mongoose";
import {ITask} from "../interfaces/tasks.interfaces";

const TaskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const Task = model("Task", TaskSchema);

export default Task;