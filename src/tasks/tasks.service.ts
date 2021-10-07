import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskWithFilters(filterDto :GetTasksFilterDto):Task[]{
    const {status , search} = filterDto;

    let tasks = this.getAllTasks();
  
    if (status) {
        tasks = tasks.filter((task) => task.status === status)
    }

    if (search) {
       tasks = tasks.filter((task) => {
          if (task.title.includes(search) || task.description.includes(search)) {
            return true;
          }
          return false;
        })
    }

    return tasks;
  }

  createTask(createTaskDto:CreateTaskDto): Task {

    const {title, description} = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);    
    return task;
  }

  getTaskById(id:string):Task {
    return this.tasks.find((task)=>task.id === id);
  }

  deleteTask(id:string):void{
    let index = this.tasks.findIndex(task=> task.id === id);
    this.tasks.splice(index,1);
  }

  updateTask(id:string,status:TaskStatus){
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}


