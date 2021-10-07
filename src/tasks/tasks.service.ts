import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskRespository } from './repositories/task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  
constructor(
  @InjectRepository(TaskRespository)
   private taskRepository : TaskRespository
  ){}

  getTasks(filterDto:GetTasksFilterDto):Promise<Task[]>{
    return this.taskRepository.getTasks(filterDto);
  }

  createTask(createTaskDto:CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async getTaskById(id:string): Promise<Task> {
    const found = await this.taskRepository.findOne({id:id})

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);  
    }

    return found;
  }

  async deleteTask(id:string): Promise<void>{
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
      
    }
    
  }

  async updateTask(id:string,status:TaskStatus):Promise<Task>{
    const task = await this.getTaskById(id);

    task.status = status;
    await this.taskRepository.save(task);

    return task;
  }
}


