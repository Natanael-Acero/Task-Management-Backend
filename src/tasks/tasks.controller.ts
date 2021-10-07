import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { title } from 'process';
import { identity } from 'rxjs';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto : GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //       return this.tasksService.getTaskWithFilters(filterDto);
  //   }else{
  //     return this.tasksService.getAllTasks();
  //   }

  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id:string): Task{
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // createTask(
  //    @Body () createTaskDto: CreateTaskDto
  // ): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id:string):void {
  //  this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTask(
  //   @Param('id') id:string,
  //   @Body() updateTaskStatusDto:UpdateTaskStatusDto
  // ):Task{
  //   const {status} = updateTaskStatusDto;
  //   return this.tasksService.updateTask(id,status);
  // }

}
