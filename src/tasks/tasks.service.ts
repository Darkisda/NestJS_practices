import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor (
        @InjectRepository(Task)
        private taskRepository: TaskRepository) {
    }

    async getTaskByID(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id)

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" no found`)
        }

        return found
    }



























//   getAllTasks(): Task[] {
//     return this.tasks;
//   }


//   getTaskWithFilters(filterDTO: GetTasksFilterDTO): Task[] {
//     const { status, search } = filterDTO;

//     let tasks = this.getAllTasks();

//     if (status) {
//       tasks = tasks.filter(taks => taks.status === status);
//     }

//     if (search) {
//       tasks = tasks.filter(
//         tasks =>
//           tasks.title.includes(search) || tasks.description.includes(search),
//       );
//     }

//     return tasks;
//   }

//   createTask(createTaskDTO: CreateTaskDTO): Task {
//     const { title, description } = createTaskDTO;

//     const task: Task = {
//       id: uuid.v1(),
//       title,
//       description,
//       status: TasksStatus.OPEN,
//     };

//     this.tasks.push(task);
//     return task;
//   }

//   deleteTask(id: string): void {
//     const found = this.getTaskById(id);
//     this.tasks = this.tasks.filter(tasks => tasks.id !== found.id);
//   }

//   updateTaskStatus(id: string, status: TasksStatus): Task {
//     const task = this.getTaskById(id);
//     task.status = status;
//     return task;
//   }
}
