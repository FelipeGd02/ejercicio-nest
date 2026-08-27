import { CourseLevel } from '../course.interface';

export class CreateCourseDto {
  name!: string;
  level!: CourseLevel;
  durationHours!: number;
}   