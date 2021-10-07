import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTaskWithFilters(filterDto :GetTasksFilterDto):Task[]{
  //   const {status , search} = filterDto;

  //   let tasks = this.getAllTasks();
  
  //   if (status) {
  //       tasks = tasks.filter((task) => task.status === status)
  //   }

  //   if (search) {
  //      tasks = tasks.filter((task) => {
  //         if (task.title.includes(search) || task.description.includes(search)) {
  //           return true;
  //         }
  //         return false;
  //       })
  //   }

  //   return tasks;
  // }

  // createTask(createTaskDto:CreateTaskDto): Task {

  //   const {title, description} = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);    
  //   return task;
  // }

  // getTaskById(id:string):Task {
  //   const found = this.tasks.find((task)=>task.id === id);

  //   if (!found) {
  // 	  throw new NotFoundException(`Task with ID "${id} not found"`); 
  //   }
    
  //   return found;
  // }

  // deleteTask(id:string):void{
  //   const found  = this.getTaskById(id);
  //   let index = this.tasks.findIndex(task=> task.id === id);
  //   this.tasks.splice(index,1);
  // }

  // updateTask(id:string,status:TaskStatus):Task{
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}


