import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import type {
  CourseLevel,
} from './course.interface';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
  ) {}

  @Get()
  findAll(
    @Query('level') level?: CourseLevel,
  ) {
    return this.coursesService.findAll(level);
  }
  @Get('active')
  findActive(){
    return this.coursesService.findActive();
  }
  @Get('search')
  search(@Query('name')name: string) {
    return this.coursesService.search(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const course = this.coursesService.findOne(
      Number(id),
    );

    if (!course) {
      throw new NotFoundException(
        'El curso con id ' + id + ' no existe',
      );
    }

    return course;
  }

  @Post()
  create(@Body() body: CreateCourseDto) {
    return this.coursesService.create(body);
  }
}