import { Injectable } from '@nestjs/common';
import {
  Course,
  CourseLevel,
} from './course.interface';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'HTML y CSS',
      level: 'basic',
      active: true,
      durationHours: 8,
    },
    {
      id: 2,
      name: 'TypeScript',
      level: 'intermediate',
      active: true,
      durationHours: 15,
    },
    {
      id: 3,
      name: 'Docker',
      level: 'intermediate',
      active: true,
      durationHours: 12,
    },
    {
      id: 4,
      name: "Introducción a NestJS",
      level: "basic",
      active: true,
      durationHours: 10,
    },
    {
      id: 5,
      name: "Bases de datos",
      level: "advanced",
      active: false,
      durationHours: 6,
    },
  ];

  findAll(level?: CourseLevel): Course[] {
    if (!level) {
      return this.courses;
    }

    return this.courses.filter(
      (course) => course.level === level,
    );
  }
  findActive(): Course[] {
    return this.courses.filter((course) => course.active);
  }
  search(name:string): Course[] {
    return this.courses.filter((course) => course.name.toLowerCase().includes(name.toLowerCase()),);
  }

  findOne(id: number): Course | undefined {
    return this.courses.find(
      (course) => course.id === id,
    );
  }

  create(data: CreateCourseDto): Course {
    const newCourse: Course = {
      id: this.courses.length + 1,
      name: data.name,
      level: data.level,
      active: true,
      durationHours:data.durationHours,
    };

    this.courses.push(newCourse);

    return newCourse;
  }
}