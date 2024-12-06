import { Request,Response } from "express";
import Task , {ITask} from "../models/task.model";

export const getTasks = async(req: Request,res: Response) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
};

export const createTask = async(req: Request,res: Response ) => {
    const {title,description}=req.body;
    const newTask = new Task({title,description});
    await newTask.save();
    res.status(201).json(newTask);

};


export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTask);
  };
  
  export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).send();
  };