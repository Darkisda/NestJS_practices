import { TasksStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsIn([TasksStatus.OPEN, TasksStatus.IN_PROGRESS, TasksStatus.DONE])
  status: TasksStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
