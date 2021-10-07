import { EntityRepository, Repository } from "typeorm";
import { Task } from "../entities/task.entity";

@EntityRepository(Task)
export class TaskRespository extends Repository<Task>{   



}